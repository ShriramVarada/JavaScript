$(function(){
    $('td').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           var c=this.firstChild.value;
           this.firstChild.remove();
           this.textContent=c;
           checkWinner();
         }
         
       });  
       
    $('#restart').on('click', function(){
        $('td').each(function(){
            if(this.firstChild){
                this.firstChild.remove();
            }
            //this.textContent='';

            $(this).append("<input type=\"text\">");
        });
    });
});

function checkWinner(){
    var c = $('td.row1').eq(0).text() ? $('td.row1').eq(0).text() : "sad";
    var d = $('td.row1').eq(1).text() ? $('td.row1').eq(1).text():"df";
    var e = $('td.row1').eq(2).text() ? $('td.row1').eq(2).text():"da";

    if((c === e) && (c === d) && (d === e)){
        $('#message').text("The person with the " + c + " is the winner");
        return;
    }

    var c = $('td.row2').eq(0).text() ? $('td.row2').eq(0).text() : "asf";
    var d = $('td.row2').eq(1).text() ? $('td.row2').eq(1).text():"sdf";
    var e = $('td.row2').eq(2).text() ? $('td.row2').eq(2).text():"sdfdsf";

    if((c === e) && (c === d) && (d === e)){
        $('#message').text("The person with the " + c + " is the winner");
    }
}