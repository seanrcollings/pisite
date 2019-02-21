import sqlite3


def drop_table():
    with sqlite3.connect('pisite.db') as connection:
        c = connection.cursor()
        c.execute("""DROP TABLE IF EXISTS stats;""")
    return True


def create_db():
    with sqlite3.connect('pisite.db') as connection:
        c = connection.cursor()
        table = """CREATE TABLE stats(
            ord INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            subtitle TEXT NOT NULL,
            command TEXT NOT NULL,
            parser TEXT,
            id TEXT NOT NULL
        );
        """
        c.execute(table)
    return True


if __name__ == '__main__':
    drop_table()
    create_db()