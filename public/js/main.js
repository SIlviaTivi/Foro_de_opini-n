$(document).ready(function () {


var $name = $('.name');
var $topic = $('.topic');
var $content = $('.content');
var $btnpost =$(".btnpost");
var $myInput = $(".myInput");
var $contentResponse = $(".content-response");
$myInput.focus();


/*search para buscar tema*/

    $myInput.on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".content .filter").filter(function() {
      var tao = $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
     
      });
    });

$.ajax({
    type: 'GET',
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
    success: function(response) {
        
        /*traer data de api*/
        $.each(response, function( index, obj ) {
            $content.append(`
                  
                  <div class="filter "><img class='img-user inline-block' src="assets/images/user.png" alt=""><h4 class='theme inline-block'>Tema: ${response[index].content}</h4>
                    <p>Usuario: ${response[index].author_name}</p>
                    <p>Respuesta: ${response[index].responses_count}<a href="#" class='btn-response'> <u>Responder</u></a></p><div>
                `);
            });
        }
    });

    $btnpost.on('click', function(){
        $(".content .filter").hide();
        var order = {
            author_name: $name.val(),
            content: $topic.val()
        }

        $.ajax({
            url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
            data: order,
            success: function(responsePost) {
              /*  console.log(responsePost);*/
            },
            type: 'POST'
         });

         $.ajax({
            type: 'GET',
            url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
            success: function(response) {
                
                /*traer data de api*/
                $.each(response, function( index, obj ) {
                    $content.append(`
                          <div class="filter"><h4 class='theme'>Tema: ${response[index].content}</h4>
                            <p>Usuario: ${response[index].author_name}</p>
                            <p>Respuesta: ${response[index].responses_count}<a href="#" class='btn-response'> <u>Responder</u></a></p><div>
                        `);
                    });
                }
            });

     })


});
