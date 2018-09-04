// import {hello} from './js/sample2.js';
var msg = 'Sign up to receive our newsletter for 10% off!';
var date = new Date(1996, 0o4, 15, 0, 23, 14);
document.write(date.getMonth()+'<br>');

function updateMessage() {
  var el = document.getElementById('df');
  el.textContent = msg;

}

updateMessage();

function return2(width, length, height){
  var area = width*length;
  var volume = area*height;
  return [area, volume];
}

var msfg = function(message){
  message += '!!'

  return message;
};

var m = (function(){
  return 'ads';
}());

document.write(return2(2,3,4)[1]+"<br>");
document.write(msfg('Go'));
document.write(m +'<br>');

// var car = {
//   speed : 23,
//   model : 'Bugatti',
//
//   printSpeedModel : function(){
//     document.write(this.speed + "Speed and Model= " + this.model );
//   }
// };
//
// var hotel = new Object();
//
// hotel.name = '%STAR';
// hotel.rooms=100;
// hotel.checkAvailability = function(){
//   return this.rooms;
// };
//
// car.printSpeedModel();
// document.write(car['model']+'<br>')
// document.write(hotel.checkAvailability())
// delete hotel.name;
// document.write(hotel.name);

function Hotel(name, rooms, stars){
  this.name = name;
  this.rooms = rooms;
  this.stars = stars;

  this.checkAvailability = function(number){
    return this.rooms - number;
 };
}

var hotel = new Hotel('Quality', 100, 5);
document.write(hotel.checkAvailability(2));

// hotel.sa = 'j';            This works as well
// document.write(hotel.sa);

// All global variables also become properties of the
// window object. so when a function is in the global
// context, you can access global variables using the
// window object, as well as its other properties.

document.write(this.msg);


var shape = { // This is technically an array
  name : 'Square',
  side : 2,
  ansestors : ['Parallelogram', 'Rectangle', 'Quadrilateral']
};

var area = function(){
  return this.side * this.side;
};

shape.getArea = area;
document.write(shape.getArea(2) + '<br>');


//The window object represents the current
// browser window or tab. It is the topmost object
// in the Browser Object Model, and it contains
// other objects that tell you about the browser.
alert(window.location);

// The topmost object in the Document Object Model (or DOM) is the
// document object. It represents the web page loaded into the current
// browser window or tab.
var num = 8.34, title;
document.write(num.toPrecision(2) + "<br>");

var randomNUm = Math.floor(Math.random()*10 + 1);
var ele = document.getElementById('sample');
document.write("<br><br>"+ ele.innerHTML+'<br>')
ele.innerHTML = '<h6> Random Number </h6><br><p> ' + randomNUm + ' </p>';

num = 13.4;
if (num > 17){
  document.write('<br>' + num + ' is greater than 17');
}else if (num > 12) {
  document.write('<br>' + num + ' is greater than 12');
}else {
  document.write('<br>' + num + ' is less than 12 + <br>');
}


switch(num){
  case 2:
    title = '2';
    break;
  case 6:
    title = '6';
    break;
  default:
    title = 'default';
}

document.write(title);

// if (document .getElementByid('header'))
//   Found: do something
// else {
//   Not found: do somethi ng else

var artist = '<br> Dasample';
var artistA = artist || '';

document.write(artistA + '<br>');

var object = '' || { name : 'Object'}; // An object
document.write(object.name);

for (var i = 0; i < 10; ++i){
  document.write('<br>' + i);
}
num = 0;
while(num < 10){
  document.write('<br>' + num++);
}

// !==, === strict operators

// pg 188

var sample = document.getElementById('one');
var lei = document.querySelector('.badword');
document.write(lei.firstChild);

sample.className = 'cool';

var elements = document.querySelectorAll('li[class]');

var elements = document.getElementsByClassName('hot');

var elements = document.getElementsByTagName('h1');

num = 0;
while(num < elements.length){
  document.write(elements[num].textContent);
  elements[num++].className = 'headings1';
}

function setup(){
  var ed = document.getElementById('username');
  ed.focus();
}

function checkUsername(){
  var el = us.value;
  if(el.length < 5){
    elMsg.textContent = 'enter above 5 characters';
   }
  else{
    elMsg.textContent = '';
  }
}

function close2(event){
  //document.body.removeChild(ele);
  edd.textContent += event.screenY + ' ' + event.screenX + ' ' + this.parentNode;
}


function characleft(){
  var el = us.value;
  elMsg.textContent= (10 - el.length) + ' characters left'
}

function buttonpressed(e, additem){
  e.preventDefault();
  var newItem = document.createElement('li');
  var text = document.createTextNode(additem);
  newItem.appendChild(text);
  list.appendChild(newItem);
}

var edd = document.getElementById('context');
var us = document.getElementById('username');
var elMsg = document.getElementById('message');
var close = document.getElementById('close');
var daa = document.getElementById('da');
var but = document.getElementById('addtm');
var list = document.getElementById('items');

close.addEventListener('mouseover', close2, true);
daa.addEventListener('mouseover', close2, true);
us.addEventListener('focus', checkUsername, false);
us.addEventListener('keypress', characleft, false);
but.addEventListener('click', function(e){
  buttonpressed(e, 'aasd');
}, false);

list.addEventListener('DOMNodeInserted', count, false);

function count(){
  var count = items.children.length;
  context.textContent = count;
}

window.addEventListener('load', setup, false);

// pg 283-286
