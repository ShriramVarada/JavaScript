var msg = 'Sign up to receive our newsletter for 10% off!';
var date = new Date(1996, 04, 15, 0, 23, 14);
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
var num = 8.34;
document.write(num.toPrecision(2) + "<br>");

var randomNUm = Math.floor(Math.random()*10 + 1);
var ele = document.getElementById('sample');
ele.innerHTML = '<h4> Random Number </h4><br><p> ' + randomNUm + ' </p>';
