from peewee import * 

db = SqliteDatabase('pisite.db') 

class Stat(Model):
    title = CharField()
    subtitle = CharField()
    command = CharField()
    key = CharField()
    weight = IntegerField()

    class Meta: 
        database = db

db.connect()

def fetch_stats():
    stats = []
    for stat in Stat.select():
        stats.append([stat.title, stat.subtitle, stat.command, stat.key, stat.weight])
    return stats
