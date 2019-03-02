import sqlite3


def drop_table():
    with sqlite3.connect('pisite.db') as connection:
        c = connection.cursor()
        c.execute("DROP TABLE IF EXISTS stats;")
        c.execute("DROP TABLE IF EXISTS schema_migrations;")
    return True


def create_db():
    with sqlite3.connect('pisite.db') as connection:
        c = connection.cursor()
        sql = """
            CREATE TABLE stats(
                title TEXT NOT NULL,
                subtitle TEXT NOT NULL,
                command TEXT NOT NULL,
                parser TEXT
            );
        """
        c.execute(sql)
        sql = """
            CREATE TABLE schema_migrations(
                schemaid TEXT NOT NULL
            );
        """
        c.execute(sql)
    return True

def add_stats(): # Adds the initial stats to the database | possibly integrate into the DatabaseRecord model?
    data_types = [
        {'title': 'Uptime', 'description': "Time since last restart", 'command': "uptime -p"},
        {'title': 'Current Time', 'description': "Current local on the Pi", 'command': "date +\%I:\%M\%p"},
        {'title': 'Current Date', 'description': 'Current local date on the Pi', 'command': "date +\%d/\%m/\%Y"},
        {'title': 'Load Average', 'description': 'Average Load of the systems', 'command': "uptime | grep -o '...., ...., ....'"},
        {'title': 'User Count', 'description': 'How many users are currently logged into the system, will always be atleast 1', 'command': "uptime | grep -o '..users'"},
        {'title': 'Disk Usage', 'description': 'How much disk space is currently taken up on the Pi', 'command': "df -h --total | grep total | grep -o '..%'"},
        {'title': 'Temp', 'description': 'The internal temperature of the Raspberry Pi', 'command': "/opt/vc/bin/vcgencmd measure_temp | grep -o .....C"},
        {'title': 'Top PID', 'description': 'The PID of the process that is using the most CPU time', 'command': "ps -Ao pid --sort=-pcpu | head -n 2 | tr -dc '0-9'"},
        {'title': 'Process Mem', 'description': 'The memory usage of the process that is using the most CPU time', 'command': "ps -o pmem --sort=-pmem | head -n 2 | tr -dc '0-9'"},
        {'title': 'Site Size', 'description': 'The current size (in Megabytes) of the entire website', 'command': "du -hs /var/www/pisite/pisiteprod | grep -o '..M'"}
    ]
    with sqlite3.connect('pisite.db') as connection:
        cursor = connection.cursor()
        for stat in data_types:
            cursor.execute("INSERT INTO stats (title, subtitle, command) values (?, ?, ?);", (stat['title'], stat['description'], stat['command']))

if __name__ == '__main__':
    drop_table()
    create_db()
    add_stats()