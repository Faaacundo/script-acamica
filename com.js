$(document).ready(function() {

    var MaxInputs       = 10; //Número Maximo de Campos
    var contenedor      = $("#contenedor"); //ID del contenedor
    var AddButton       = $("#agregarCampo"); //ID del Botón Agregar
/******************************************************************************************/
    var x               = $("#contenedor div").length + 1; //var x = número de campos existentes en el contenedor
    var conteo          = x-1; //para el seguimiento de los campos

    $(AddButton).on('click', function(e) { // Al clickear el AddButton

        if(x <= MaxInputs){ //maximos de secciones impresas

              var val   = $("#inputSec").val(); // Toma el valor del Input


          if(val==""){ // si el Input no tiene nada
              alert("Por favor ponle nombre a la sección que vas a crear");
              $('#inputSec').focus();
              return false;
          }else{
              if( $('#'+val ).length > 0){  // Si el id #Con el valor que tiene el input en ese momento existe
                  alert("Ya existe este nombre para tu sección");
                  return 0;
              } else{
                  conteo++;
                  //agregar campo
                  $(contenedor).append('<div id="'+ val +'" class="seccion-'+ conteo +'"><h3>'+val+'</h3><hr><ul></ul><a href="#" class="eliminar">&times;</a></div>');
                  $('#agregarContenido').click(function( event ) {
                                    var cont  = $("#inputCont").val();
                    //CREA UN LI ADENTRO DEL UL DE LA SECCIÓN QUE HEMOS CREADO
                    $('#contenedor div ul').append("<li>"+cont+"</li>");
                  });
              };
          };
          x++; //Incrementa el numero
        };
    });
    
    

//  ELIMINAR SECCIÓN ******************************************
    $("#contenedor").on("click",".eliminar", function(e){ //Click en eliminar campo
        if( x > 1 ) {
            $(this).parent('div').remove(); //Eliminar el campo
            x--;
        }
        return false;
    });



//MUESTRA EL MENU PARA CREAR SECCIÓN Y AGREGAR CAMPOS *********
    $('#menuToggle').on('click', function(){
      $('.cuerpo').toggleClass('abrir'); //Agrega o saca la clase Abrir dependiendo si la tiene o no hace lo contrario
      $('.cuerpo #modal').toggleClass('modal'); //Agrega o saca la clase modal dependiendo si la tiene o no hace lo contrario
      $('.cuerpo').toggleClass('bordeCuerpo'); //Agrega o saca la clase bordeCuerpo que hace como sombra dependiendo si la tiene o no hace lo contrario
    });

});
