import json; import hashlib; import subprocess
raw_data = []
data = []

def get_uptime_data(): 
    # runs the uptime command in the terminal, is parsed apart into 4 seperate stats for the website: Uptime, Current Time, Users, Average Load
    uptime_output = subprocess.check_output('uptime -p', shell = True).strip().decode('utf-8')
    raw_data.append(["Uptime", uptime_output, "Uptimey boy"] )

def get_date_data(): 
    date_output = subprocess.check_output("date +%I:%M%p", shell = True).strip().decode('utf-8')
    raw_data.append(["Current Time", date_output, "You're dumb if you don't know what current time means"] )


def get_object(title, data, description):
    return {
        "title": str(title),
        "data": str(data),
        "description": str(description),
        "id": get_id(title)
    }

def get_id(title):
    return hashlib.sha1(title.encode()).hexdigest()


get_date_data()
get_uptime_data()

for array in raw_data:
	data.append(get_object(array[0], array[1], array[2]))


    
with open('data.json', 'w') as outfile:
    json.dump(data, outfile)