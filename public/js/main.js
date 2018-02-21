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

          /*crear input de mensaje respuesta*/
          var $btnResponse = $(".btn-response");
          var $msnResponse = $(".msn-response");
          $msnResponse.hide();
        $btnResponse.on("click", function() {
          console.log(this);
          console.log($('p').data('target'));
          if (this) {
            var id = $('.id').data('target') ;

            localStorage.setItem('idUser', id);
        /*     window.location.href = 'verTopic.html';*/
          console.log(id);
          }

      /*    $(this)
          .append(`
              <p>Nombre: <input class="by" type="text" name="" value=""></p>
              <p>Mensaje: <input class="msn-input" type="text" name="" value=""></p>
              <button class="send">Enviar</button>
            `);*/

          $msnResponse.toggle();

            var $idPost = $(".id-post");
            $(".send").on("click", function() {
            /*  console.log($idPost)*/
              var $by = $('.by').val();
              var $msnInput = $('.msn-input').val();
              console.log($by);
            });



          });
        },
            type: 'GET'

     });
    /*metodo post para crear respuestas*/
     $btnpost.on('click', function(){

        var response = {
            author_name: $name.val(),
            content: $topic.val()

        }

    /*    $.ajax({
            url: `http://examen-laboratoria-sprint-5.herokuapp.com/topics/${topicId}/responses`,
            data: response,
            success: function(responsePost) {
                console.log(response);
            },
            type: 'POST'
         });*/

       })  /* fin metodo post para crear respuestas*/
     /*metodo post para crear temas*/
     $btnpost.on('click', function(){
        var order = {
            author_name: $name.val(),
            content: $topic.val()
        }

        $.ajax({
            url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
            data: order,
            success: function(responsePost) {
                console.log(responsePost);
            },
            type: 'POST'
         });

     }); /* fin metodo post para crear temas*/


});
