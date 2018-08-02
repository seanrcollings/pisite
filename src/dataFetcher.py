import json; import hashlib; import subprocess

data_objects = []

class DataType():
	def __init__(self, title, description, command):
		self.title = title
		self.description = description
		self.command = command

		self.id = self.get_id(self.title)

	def fetch_data(self):
		command_output = subprocess.check_output(self.command, shell = True).strip().decode('utf-8')
		data_objects.append(get_object(command_output))

	def get_object(self, data):
	    return {
	        "title": str(self.title),
	        "data": str(data),
	        "description": str(self.description),
	        "id": self.id
	    }

	def get_id(title):
	    return hashlib.sha1(title.encode()).hexdigest()


data_types = [
	DataType('Uptime', 'Time since last restart', 'uptime-p')
	DataType('Current time', "You are a dummy if you do not know what current time it", "date +\%I:\%M\%p")
]

for data_type in data_types:
	data_type.fetch_data
    
with open('data.json', 'w') as outfile:
    json.dump(data_object, outfile)