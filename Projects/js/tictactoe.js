$(function(){
    $('td').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           alert(this.firstChild.value);
         }
       });   
});