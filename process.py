import subprocess

uptime_output = subprocess.check_output('uptime', shell = True).strip().decode('utf-8')

html = '''
<html>
  <body>
    <div>%s</div>
  </body>
</html>
''' % uptime_output

file = open('/var/www/html/stats.html', 'w')
file.write(html)
file.close()

