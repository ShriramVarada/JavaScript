//element.onevent = functionName;
type= 'module';
var today = new Date();
function printDate(idd){
  document.write(idd.textContent);
}


function random2(e, seed){
  if(!e){
    e = window.event;
  }
  var el = e.target || e.srcElement ;
  var parent = el.parentNode;
  var grandparent = parent.parentNode;

  grandparent.removeChild(parent);

  if(e.preventDefault){
    e.preventDefault();
  }else{
    e.returnValue = false;
  }

  // document.write('<br>');
  // Math.seedrandom(seed);
  // document.write('<br>' + Math.random());
}

//this.onload = printDate;
// var d = document.getElementById('page');
// d.onmouseover = printDate;

//For older versions of IE
var idd = document.getElementById('id');
if(idd.addEventListener){
  idd.addEventListener('click', function(e){
    printDate(idd);
    random2(e, 'seed');
  }, false);
}else{
  idd.attachEvent('onmouseover', function() {
    document.write('IE8');
  });
}
