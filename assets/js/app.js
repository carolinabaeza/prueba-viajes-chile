$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


$(".favoritos").click (function () {
    alert("Añadido a favoritos") 
});

$("#accion-tarjeta-1").click (function () {
    $(".texto-tarjeta-1").toggle ();
    });
    
    $("#accion-tarjeta-2").click (function () {
        $(".texto-tarjeta-2").toggle ();
        });
    
        $("#accion-tarjeta-3").click (function () {
            $(".texto-tarjeta-3").toggle ();
            });

            $("#accion-tarjeta-4").click (function () {
                $(".texto-tarjeta-4").toggle ();
                });





                $(function () {
                    $(document).scroll(function () {
                      var $nav = $(".fixed-top");
                      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                    });
                  });


                  


                  