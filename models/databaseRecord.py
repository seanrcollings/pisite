import sqlite3
from pprint import pprint

class DatabaseRecord:
    
    @classmethod
    def fetch_all(cls):
        with sqlite3.connect('/var/www/pisite/pisiteprod/database/pisite.db') as connection:
            cursor = connection.cursor()
            cursor.execute("SELECT rowid,* FROM %s ORDER BY rowid desc" % (cls.table_name()))
            names = [description[0] for description in cursor.description]
            rows = cursor.fetchall()
            objects = []
            for row in rows:
                database_object = cls()
                for index, column in enumerate(row):
                    column_name = names[index]
                    setattr(database_object, column_name, column)
                objects.append(database_object)
            return objects

    @classmethod
    def table_name(cls):
        raise Exception('Must implement in child class')  

        