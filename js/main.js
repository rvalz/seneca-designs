//flags 
var england = document.getElementById('england');
var englishflag = england.getContext('2d');
englishflag.fillStyle = 'red';
englishflag.fillRect(65, 0, 20, 100); // vertical line
englishflag.fillStyle = 'red';
englishflag.fillRect(0, 40, 150, 20); // horizontal line
englishflag.strokeRect(0, 0, 150, 100); // flag border

var japan = document.getElementById('japan');
var japanflag = japan.getContext('2d');
var jap_center_x = japan.width / 2; // find x center
var jap_center_y = japan.height / 2; // find y center
var radius = 30; // circle radius
japanflag.fillStyle = 'white';
japanflag.fillRect(0, 0, 150, 100); // white bg
japanflag.beginPath(); // create path for circle
japanflag.arc(jap_center_x, jap_center_y, radius, 0, 2 * Math.PI, false); // draw circle
japanflag.fillStyle = 'red'; // fill circle red
japanflag.fill();
japanflag.strokeRect(0, 0, 150, 100); // flag border

var scotland = document.getElementById('scotland');
var scotflag = scotland.getContext('2d');
scotflag.fillStyle = 'blue';
scotflag.fillRect(0, 0, 150, 100); // blue background
scotflag.lineWidth = '15'; // width of white line
scotflag.strokeStyle = 'white';
scotflag.moveTo(0, 0);
scotflag.lineTo(150, 100); // top left to bottom right
scotflag.moveTo(150, 0); // top right to bottom left
scotflag.lineTo(0, 100);
scotflag.stroke();

var monaco = document.getElementById('monaco');
var monoflag = monaco.getContext('2d');
monoflag.fillStyle = 'red';
monoflag.fillRect(0, 0, 150, 50); // top color
monoflag.fillStyle = 'white';
monoflag.fillRect(150, 50, 0, 0); // bottom color
monoflag.strokeRect(0, 0, 150, 100); // flag border

// Dynamically update copyright year
var copy_year = document.getElementById('copy_year');
var date_now = new Date();
var my_year = date_now.getFullYear();
copy_year.innerHTML = my_year;