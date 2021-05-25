$('.screen-shift-text > button, .hero .hero-link').on('click', function toggleScreen() {
    $('.content-box.current').removeClass('animate__fadeInDown').addClass('animate__fadeOutDown');
    setTimeout(function() {
        $('.content-box.current').addClass('d-none').removeClass('current');
        $($(this).data('calls')).removeClass('d-none animate__fadeOutDown').addClass('animate__fadeInDown current');
    }.bind(this), 500);
});