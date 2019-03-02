from os import listdir
from os.path import isfile, join
import sqlite3

def migrate():
    migration_files = [f for f in listdir('./migrations') if isfile(join('./migrations', f))]
    with sqlite3.connect('pisite.db') as connection:
        c = connection.cursor()
        schema_ids = c.execute('SELECT schemaid FROM schema_migrations').fetchall()
        schema_ids = [x[0] for x in schema_ids]
        for file in migration_files:
            if file[0] not in schema_ids:
                 c.execute(open('migrations/' + file).read())
                 c.execute('INSERT INTO schema_migrations (schemaid) values (?)', (file[0]))



if __name__ == '__main__':
    migrate()