/* Th i s script displays a greeting to the user based upon the current time.
It is an example from JavaScript & jQuery book */

var today= new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting= 'Good evening!';
}

else if (hourNow > 12) {
  greeting = ' Good afternoon!';
}

else if (hourNow > 0) {
greeting = 'Good morni ng!';
}

else {
greeting = 'Welcome! ' ;
}

document.write( ' <h3>' +greeting + ' </ h3>');

var ed = document.getElementById('god');
ed.textContent = 'Narayana' + 1;

var samplemessage = new String("sf\nddg\"sdg\" se");
document.write('<br />' + samplemessage);

var colors;
colors = ['white', 'black', ' custom ']; /* Or colors = new Array('white', 'black', 'custom');*/

document.write(colors[2]);
