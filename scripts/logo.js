
// When hovered over, the pi logo changes to a colored version
const logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => {
	document.getElementById('logo').src = 'img/logo-color.png';
});

logo.addEventListener('mouseleave', () => {
	document.getElementById('logo').src = 'img/logo.png';
});

function makeid() { //Generates a random string of numbers and letters 10 characters long
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10 ; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
