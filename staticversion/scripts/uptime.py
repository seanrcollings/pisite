import subprocess

uptime_output = subprocess.check_output('uptime', shell = True).strip().decode('utf-8')

html = '''
<!doctype html>
	<html lang = 'eng'>
		<head>
		<meta charset = "utf-8">
		<meta name = 'description' content=''>
		<meta name = 'author' content = ''>
		<title>Pi Site</title>
		<link href = 'css/styles.css' rel = 'stylesheet' type = 'text/css'>
		<link href = 'css/normalize.css' rel = 'stylesheet' type = 'text/css'>
		<link href = 'css/w3.css' rel = 'stylesheet' type = 'text/css'>
		<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
		</head
>	<body>
		<header>
			<div class = 'navbar'>
				<nav>
					<ul>
						<li><a href = 'index.html'><img src = 'img/logo.png'></a></li>
						<li><a href = 'stats.html'>Pi Stats</a></li>
						<li><a href = 'links.html'>Links</a></li>
						<li><a href = '#openModal'>Login</a></li>
					</ul>
				</nav>
				<div id = 'openModal' class = 'modalDialog'>
					<div><a href = "#close" title = 'Close' class = 'close'>X</a>
						<!-- Content fod Modal -->
						<div class = 'login'>
							<h2>Sign in</h2>
							<form>
								<input type = 'email' name = 'email' placeholder = 'Email' >
								<input type = 'password' name = 'password' placeholder = 'Password'>
								<input type = 'button' value = 'Login'>
							</form> 
						</div> <!-- end login -->
					</div> <!-- end close -->
				</div> <!-- end modal -->
			</div> <!-- End of Nav bar -->
		</header>

  <body>
  	<h2>Current Uptime Statistic</h2>
    <div style >%s</div>
  </body>
<section id = 'classes'>
		<footer>
			<nav>
				<ul>
					<li><a href = 'index.html'>Home</a></li>
					<li><a href = 'data.html'>Pi Stats</a></li>
					<li><a href = 'links.html'>Links</a></li>
				</ul>
			</nav>
		</footer>
	</body>
</html>
''' % uptime_output

file = open('/var/www/html/stats.html', 'w')
file.write(html)
print("stat.html successfully written to!")
file.close()

