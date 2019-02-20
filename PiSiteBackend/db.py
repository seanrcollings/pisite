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
        stats.append({'title': stat.title, 'subtitle': stat.subtitle, 'command': stat.command, 'key': stat.key, 'weight': stat.weight})
    return stats
