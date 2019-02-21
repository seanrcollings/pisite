import subprocess

def fetch_data(command):
	print command
	try:
		data = subprocess.check_output(command, shell = True).strip().decode('utf-8')
	except:
		data = "Data Fetch Failed :("
	return data
