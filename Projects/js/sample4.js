// pg 320, 322, 328, 336, 338, 344, 350, 351
// pg 356, 361

$(function(){
  var $s = $('<li> soy sauce </li>'); // $ wraps an instance to a jQuery object

  $('li:last').after($s);
  //$('li').css('background', '#345abc')
  $('li.hot').removeClass('hot');

  // $('li').each(function(){
  //   var ids = this.style.backgroundColor;
  //   $(this).append('<h5 id = "sa"><span>sd</span>testing loop each</h5> ' + ids );
  // });
  //
  var $listitems = $('li');
  var offset = $('#addButton').offset().top - $(window).height();
  // $('li h5').remove();
  //$listitems.children().children('span').remove();
  // var index = 0;
  $listitems.eq(2).hide().each(function(index){
    $(this).delay(700*index).fadeIn(1500);
  });

  var para = document.getElementById('content');

  $('li').on('click', function(){
    $(this).animate({
      opacity: .1,
      paddingLeft: '+=80'
    }, 1500, function(){
      // $(this).remove();
      para.innerHTML += $(this).children().length + '<br>'+$.isNumeric('123');
    })
  });

  var $clonedlist = $('li').clone();
  var $desc = $('input:text');

  $('#addButton').on('click', function(e){ // Submit used for form elements
    e.preventDefault();
    para.textContent = $desc.val();
    $desc.val('');
    $('li').remove();
    $clonedlist.width('1%');
    $('p').after($clonedlist);

  });

  hello();

});
