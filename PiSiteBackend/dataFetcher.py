import json
import hashlib
import subprocess

from dataParsers import *

class DataType():
	def __init__(self, title, description, command, order, parser = False):
		self.title = title
		self.description = description
		self.command = command
		self.order = order
		self.parser = parser

		self.id = self.get_id(self.title)

	def fetch_data(self):
		command_output = subprocess.check_output(self.command, shell = True).strip().decode('utf-8')
		
		if self.parser:
			data = self.parser(command_output)
		else:
			data = command_output
			
		return self.get_object(data)

	def get_object(self, data):
		return {
			"title": str(self.title),
			"data": str(data),
			"description": str(self.description),
			"id": self.id,
			"order": self.order
		}

	def get_id(self, title):
		return hashlib.sha1(title.encode()).hexdigest()


def fetch_data():
    data_types = [
	DataType('Uptime', 'Time since last restart', 'uptime -p', 1),
	DataType('Current Time', "Current local on the Pi", "date +\%I:\%M\%p", 2), # displays the time in a human understandable format
	DataType('Current Date', 'Current local date on the Pi', "date +\%d/\%m/\%Y", 3),
	DataType('Load Average', 'Average Load of the systems', "uptime | grep -o '...., ...., ....'", 4), # command finds the particular format of: .02, 0.03, 0.01
	DataType('User Count', 'How many users are currently logged into the system, will always be atleast 1', "uptime | grep -o '..users'", 5),
	DataType('Memory Usage', 'How much memory the Pi is using at the moment', "cat /proc/meminfo | egrep 'MemTotal|MemFree'", 6, parseMemory),
	DataType('Disk Usage', 'How much space is currently taken up on the Pi', "df -h --total | grep total | grep -o '..%'", 7),
	#DataType('Temp', 'The internal temperature of the Raspberry Pi', "/opt/vc/bin/vcgencmd measure_temp | grep -o .....C", 8),
	DataType('Top PID', 'The PID of the process that is using the most CPU time', "ps -Ao pid --sort=-pcpu | head -n 2 | tr -dc '0-9'", 9),
	DataType('Process Mem', 'The memory usage of the process that is using the most CPU time', "ps -o pmem --sort=-pmem | head -n 2 | tr -dc '0-9'", 10), # fixed up some of these commands so they run on the pi
	#DataType('Site Size', 'The current size (in Megabytes) of the entire website', "du -hs /var/www/pisite/pisiteprod | grep -o '..M'", 11)
    ]
    
    data_objects = {}
    for data_type in data_types:
        data = data_type.fetch_data()
        data_objects[data["id"]] = data
    return data_objects
