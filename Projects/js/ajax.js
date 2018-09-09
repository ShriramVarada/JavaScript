// pg 374-376, 381, 400, 401, 405-406

var ajaxReq = new XMLHttpRequest();


// ajaxReq.onload = function(){
//   if(ajaxReq.status === 200){
//     // Code to process the results from the server
//     document.getElementById('sad').innerHTML = ajaxReq.responseText;
//     document.write(ajaxReq.status);
//   }
// };

function show2(data){
  document.getElementById('sad').innerHTML = data.events[0].location;
  //document.write(JSON.parse(data));
  $('#sad').load('index3.html #newitemButton');

}

$(function(){
  $('#supporter a').on('click', function(e){
    e.preventDefault();
    var target = e.target.id;
    $.get('test3.html', target, function(data){
      $('#gray').remove();
      $('#supporter').html(data);
    });
  });

  $('#newitemForm').on('submit', function(e){
    e.preventDefault();
    var registerss = $('#newitemForm').serialize();
    $.post('test3.html', registerss, function(data){
      $('#newitemForm').html(data);
    });
  });
});


JSON.parse('{"dsf": [ {"location" : "d", "event" : 23}]}');

ajaxReq.open('GET', 'test3.html', true);
ajaxReq.send(null);

// JSON.parse(), stringify()
//
// 200 The server has responded and all is ok
// 304 Not modified
// 404 Page not found
// 500 Internal error on the server
