//element.onevent = functionName;
var today = new Date();
function printDate(){
  document.write('<br> <br>' + today.getHours());
}

const fs = require('seedrandom');
function random2(e, seed){
  document.write(e.target+'<br>'+e.type);
  Math.seedrandom(seed);
  document.write('<br>' + Math.random());
}

//this.onload = printDate;
// var d = document.getElementById('page');
// d.onmouseover = printDate;

// For older versions of IE
if(document.addEventListener){
  document.addEventListener('mouseover', function(e){
    printDate();
    random2(e, 'seed');
  }, false);
}else{
  document.attachEvent('onmouseover', function() {
    document.write('IE8');
  });
}
