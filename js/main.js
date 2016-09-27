$(document).ready(function(){

$("#cabecera").load("Plantilla.html div#primero")   ;

   $("#pie").load("Plantilla.html div#segundo")   ;

$(function() {
    //Se activa cuando el scroll supera los 100px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('a.scroll-top').fadeIn();
        } else {
            $('a.scroll-top').fadeOut();
        }
    });
    //Crea la animacion al dar clic sobre el boton
    $('a.scroll-top').click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

    $('img').on('click',function(){
                var src = $(this).attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#misgaleria').modal();
                $('#misgaleria').on('shown.bs.modal', function(){
                    $('#misgaleria .modal-body').html(img);
                });
                $('#misgaleria').on('hidden.bs.modal', function(){
                    $('#misgaleria .modal-body').html('');
                });
           });



});
