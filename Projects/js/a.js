var msg = 'Sign up to receive our newsletter for 10% off!';



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
}

var m = (function(){
  return 'ads';
}());

document.write(return2(2,3,4)[1]+"<br>");
document.write(msfg('Go'));
document.write(m +'<br>');

var car = {
  speed : 23,
  model : 'Bugatti',

  printSpeedModel : function(){
    document.write(this.speed + "Speed and Model= " + this.model );
  }
};

var hotel = new Object();

hotel.name = '%STAR';
hotel.rooms=100;
hotel.checkAvailability = function(){
  return this.rooms;
}

car.printSpeedModel();
document.write(car['model']+'<br>')
document.write(hotel.checkAvailability())
delete hotel.name;
document.write(hotel.name);
