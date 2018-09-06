// pg 320, 322, 328

$(function(){
  var s = '<li> soy sauce </li>'; // $ wraps an instance to a jQuery object

  $('li:last').after(s);
  //$('li').css('background', '#345abc')
  $('li.hot').removeClass('hot');

  // $('li').each(function(){
  //   var ids = this.style.backgroundColor;
  //   $(this).append('<h5 id = "sa"><span>sd</span>testing loop each</h5> ' + ids );
  // });
  //
  var $listitems = $('li');
  // $('li h5').remove();
  //$listitems.children().children('span').remove();
  // var index = 0;
  $listitems.hide().each(function(index){
    $(this).delay(700*index).fadeIn(1500);
  });


  $('li').on('click', function(){
    $(this).animate({
      opacity: .1,
      paddingLeft: '+=80'
    }, 1500, function(){
      // $(this).remove();
    })
  });
});
