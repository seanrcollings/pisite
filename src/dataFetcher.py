import json; import hashlib

raw_data = [["Current Time", "20:32:01", "You're dumb if you don't know what current time means"], ["Users", "2 Useres", "Stat won't change"], ["Uptime", "34 Minutes", "How long since last restart"]]
data = []


def get_object(title, data, description):
    return {
        "title": str(title),
        "data": str(data),
        "description": str(description),
        "id": get_id(title)
    }

def get_id(title):
    return hashlib.sha1(title.encode()).hexdigest()

for array in raw_data:
	data.append(get_object(array[0], array[1], array[2]))

    
with open('data.json', 'w') as outfile:
    json.dump(data, outfile)