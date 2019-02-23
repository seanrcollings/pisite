from databaseRecord import DatabaseRecord
import subprocess

class Stat(DatabaseRecord):
    
    @classmethod
    def table_name(cls):
        return 'stats'


    def fetch_data(self):
        try:
            data = subprocess.check_output(self.command, shell = True).strip().decode('utf-8')
        except:
            data = "Data Fetch Failed :("
        return data