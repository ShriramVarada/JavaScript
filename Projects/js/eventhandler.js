//element.onevent = functionName;
var today = new Date();
// function printDate(idd){
//   document.write(idd.firstChild.textContent);
// }
require('jquery');

document.write(message);
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
  
  document.write('<br>');
  Math.seedrandom(seed);
  document.write('<br>' + Math.random());
}

// this.onload = printDate;
// var d = document.getElementById('page');
// d.onmouseover = printDate;

//For older versions of IE
var idd = document.getElementById('id');
if(idd.addEventListener){
  idd.addEventListener('click', function(e){
    //printDate(idd);
    random2(e, 'seed');
  }, false);
}else{
  idd.attachEvent('onmouseover', function() {
    document.write('IE8');
  });
}


var para = document.getElementById('content');
$(document).ready(function(){
  $('li.hot').addClass('complete');
  //$('li:lt(2)').hide().delay(500).fadeIn(1500);

  $('#two').on('click mouseover',':not(#four)', {status:'important'}, function(e){
    para.textContent += e.type + e.data.status;
    $(this).remove();
  });

  //var $para = $('#content');


  // $(`variable`) places the element so that it can be used as a jQuery obejct
  // $(para).append($('#four').html(function(){
  //   return '<strong>dsf</strong>';
  // }));

  para.append($('li:lt(3)').text());
  $('li:contains("pine")').html('<h2>ad</h2>');
  $('h1#header').remove();
  // pg 318


});


// pg 302
