var elr = document.getElementById('df');

if(Modernizr.geolocation){
  navigator.geolocation.getCurrentPosition(success, fail);
}else{
  elr.textContent = "Sorry we could not get your location";
}
var msg;
function success(position){
  msg = '<h3>Latitude: </h3>';
  msg += position.coords.latitude + '<br>';
  msg += '<h3>Longitude: </h3>';
  msg += position.coords.longitude;
  elr.innerHTML = msg;
}

function fail(msgError){
  elr.textContent = msgError;
  console.log(msgError.code);
}


var des = document.getElementById('username');

if(window.localStorage){
  window.localStorage.setItem('age', 23); // or localstorage.age = 23, Similarly for getItem as well
  des.addEventListener('input', function(){
    localStorage.username = des.value;
  }, false);
}

// sessionStorage is just like localStorage
var location2 = location.pathname;
var page = location2.substring(location2.lastIndexOf('/') + 1);

window.addEventListener('popstate', function(){
  var path = location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1);
}, false);
