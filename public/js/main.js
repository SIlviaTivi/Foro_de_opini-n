$(document).ready(function () {


var $name = $('.name');
var $topic = $('.topic');
var $content = $('.content');
var $btnpost =$(".btnpost");
var $myInput = $(".myInput");
var $contentResponse = $("content-response");
$myInput.focus();
    $.ajax({
        url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
        success: function(response) {

          /*search para buscar tema*/
          $myInput.on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".content p").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
          /*traer data de api*/
          $.each(response, function( index, obj ) {
               $content
               .append(`
               <div><h4>Tema: ${response[index].content}</h4>
                    <p>Usuario: ${response[index].author_name}</p>
                    <p> id: ${response[index].id}</p>
                    <span>Respuesta: ${response[index].responses_count}<a href="#" class='btn-response'> <u>Responder</u>
                      <p data-target=${response[index].id} class="id"></p>
                    </a>

                    </span>
                    <br><hr>

                    <div class="msn-response">

                    </div>
               </div>`);
             });
         $('.btn-response').click(function() {


             });
/*.....*/

});
