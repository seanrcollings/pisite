import React from 'react';

import npmInstallImage from '../../img/npminstall.PNG'

export default function HowToContent() {
	return [
		<div className='howto-grid__content'>
			<h2 id='installation'>What you need to install</h2>
				<ul>
					<li><a href = 'https://nodejs.org/en/download/'>Node Server</a></li>
					<li><a href ='https://www.python.org/'>Python</a></li>
					<li><a href = 'https://code.visualstudio.com/'>Text Editor (Visual Studio Reccomended)</a></li>
					<li><a href = 'https://www.cygwin.com/'>If on Windows, install some sort of Linux terminal emulator (Cygwin, Git Bash, Cmder)</a></li>
				</ul>

			<h2 id='development'>Setting up the Development Enviorment</h2>
			<p>
				First off, run <code>git clone https://github.com/seanrcollings/PiSite</code> to pull down the repository, or go the 
				<a href = 'https://github.com/seanrcollings/PiSite'>GitHub page</a> and download it manually. Now cd into the PiSite directory and
				run <code>npm install</code> (The Node Package Manager should have come with the node server). This command will install all the
				dependancies that the Site requires. Now run <code>npm start</code> and the devlopment server should start itself 
            </p>
			<img src={npmInstallImage}/>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan tortor quis pharetra malesuada. Phasellus hendrerit aliquet tincidunt.
				Integer non dignissim nunc. Suspendisse in massa dignissim, laoreet risus non, porta mi. Donec posuere at sapien non luctus. Nulla nulla urna, lobortis a tristique at,
				efficitur id erat. Etiam in libero quam. Suspendisse id bibendum tellus.Ut tempus libero non nibh ornare hendrerit. Nulla lobortis velit sit amet felis dignissim egestas. Ut luctus,
				urna ut ultrices aliquet, neque felis laoreet dolor, eget posuere elit risus vel eros. Etiam congue finibus nisi, a porta urna blandit a. Vestibulum lacinia efficitur neque, ut
				auctor justo placerat et. Curabitur quis velit finibus, rutrum ipsum et, accumsan risus. Suspendisse potenti. In justo mauris, placerat id risus eu, varius mollis dui. Mauris a
				scelerisque dolor. Nullam non rutrum dolor. Sed enim dui, maximus a nulla eget, laoreet dapibus nulla. Nulla facilisi. Donec et viverra felis. Pellentesque placerat at orci quis
				pulvinar. Aliquam erat volutpat. Suspendisse luctus enim quis aliquam dictum. Nulla vitae volutpat risus. Morbi in ante justo. Proin mattis commodo facilisis. Phasellus interdum vitae
				nulla sed tempus. Mauris nec porttitor nulla. Aenean ac arcu molestie dolor bibendum pulvinar in non diam. Fusce molestie molestie semper. Phasellus non erat finibus, vulputate dolor
				a, viverra eros. Vestibulum eleifend laoreet ligula, in ultrices nisi finibus quis. Ut tincidunt fringilla nisl, ut vulputate ligula ultrices id. Integer tincidunt purus sit amet dolor
				ultricies luctus. Vestibulum quis leo dictum, ornare quam sit amet, convallis nibh. Suspendisse interdum eros sit amet ante scelerisque, eu auctor ligula hendrerit. Vestibulum vitae
				condimentum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in lectus dui. Ut ultrices, ante non consequat gravida, felis turpis
				tincidunt libero, quis lacinia velit nibh a odio. Praesent eu mauris gravida, rhoncus eros et, varius massa. Donec quis gravida mi. Mauris aliquet mollis neque, sit amet gravida est
				eleifend ac. Aenean finibus nulla sed velit eleifend tempus et ut nunc. Donec consequat sapien eget erat viverra, eget tincidunt nisi hendrerit. Ut tincidunt sit amet mauris sit amet
				pulvinar.
            </p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan tortor quis pharetra malesuada. Phasellus hendrerit aliquet tincidunt.
				Integer non dignissim nunc. Suspendisse in massa dignissim, laoreet risus non, porta mi. Donec posuere at sapien non luctus. Nulla nulla urna, lobortis a tristique at,
				efficitur id erat. Etiam in libero quam. Suspendisse id bibendum tellus.Ut tempus libero non nibh ornare hendrerit. Nulla lobortis velit sit amet felis dignissim egestas. Ut luctus,
				urna ut ultrices aliquet, neque felis laoreet dolor, eget posuere elit risus vel eros. Etiam congue finibus nisi, a porta urna blandit a. Vestibulum lacinia efficitur neque, ut
				auctor justo placerat et. Curabitur quis velit finibus, rutrum ipsum et, accumsan risus. Suspendisse potenti. In justo mauris, placerat id risus eu, varius mollis dui. Mauris a
				scelerisque dolor. Nullam non rutrum dolor. Sed enim dui, maximus a nulla eget, laoreet dapibus nulla. Nulla facilisi. Donec et viverra felis. Pellentesque placerat at orci quis
				pulvinar. Aliquam erat volutpat. Suspendisse luctus enim quis aliquam dictum. Nulla vitae volutpat risus. Morbi in ante justo. Proin mattis commodo facilisis. Phasellus interdum vitae
				nulla sed tempus. Mauris nec porttitor nulla. Aenean ac arcu molestie dolor bibendum pulvinar in non diam. Fusce molestie molestie semper. Phasellus non erat finibus, vulputate dolor
				a, viverra eros. Vestibulum eleifend laoreet ligula, in ultrices nisi finibus quis. Ut tincidunt fringilla nisl, ut vulputate ligula ultrices id. Integer tincidunt purus sit amet dolor
				ultricies luctus. Vestibulum quis leo dictum, ornare quam sit amet, convallis nibh. Suspendisse interdum eros sit amet ante scelerisque, eu auctor ligula hendrerit. Vestibulum vitae
				condimentum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in lectus dui. Ut ultrices, ante non consequat gravida, felis turpis
				tincidunt libero, quis lacinia velit nibh a odio. Praesent eu mauris gravida, rhoncus eros et, varius massa. Donec quis gravida mi. Mauris aliquet mollis neque, sit amet gravida est
				eleifend ac. Aenean finibus nulla sed velit eleifend tempus et ut nunc. Donec consequat sapien eget erat viverra, eget tincidunt nisi hendrerit. Ut tincidunt sit amet mauris sit amet
				pulvinar.
            </p>

		</div>
	]
}