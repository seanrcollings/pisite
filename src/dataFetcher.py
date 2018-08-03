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
		data_objects.append(self.get_object(command_output))

	def get_object(self, data):
	    return {
	        "title": str(self.title),
	        "data": str(data),
	        "description": str(self.description),
	        "id": self.id
	    }

	def get_id(self, title):
	    return hashlib.sha1(title.encode()).hexdigest()


data_types = [
	DataType('Uptime', 'Time since last restart', 'uptime -p'),
	DataType('Current Time', "You are a dummy if you do not know what current time it", "date +\%I:\%M\%p"), # displays the time in a human understandable format
	DataType('Current Date', 'What the current date is one the pi internally', "date +\%d/\%m/\%Y"),
	DataType('Load Average', 'Average Load of the systems', "uptime | grep -o '...., ...., ....'"), # command finds the particular format of: .02, 0.03, 0.01
	DataType('User Count', 'How many users are currently logged into the system, will always be atleast 1', "uptime | grep -o '..users'"),
]

for data_type in data_types:
	data_type.fetch_data()

with open('/var/www/pisite/pisiteprod/data.json', 'w') as outfile:
    json.dump(data_objects, outfile)
