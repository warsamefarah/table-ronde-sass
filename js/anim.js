$(document).ready(function () {
  // $('.art').hide();

    gsap.from('.title', {opacity: 0, duration: 2})
    TweenMax.fromTo('.line1', {scaleX: 0, transformOrigin: '0 100%'}, {scaleX: 1, duration: 1, delay: 2, ease: 'power1.inOut'});
    TweenMax.fromTo('.circle1', {opacity: 0}, {opacity: 1, duration: 0.5, delay: 1})

    $('.dot').click(function() {
        $(this).children('input[type=radio]').prop( "checked", true )
        $(this).addClass('dot-color')

        if ($('input[name=un]').is(':checked')) {
          gsap.to('.art1', {opacity: 1, duration: 0.2, y: -50})
        }

        if ($('input[name=deux]').is(':checked')) {
          gsap.to('.art2', {opacity: 1, duration: 0.2, y: 50})
        }

        if ($('input[name=trois]').is(':checked')) {
          gsap.to('.art3', {opacity: 1, duration: 0.2, y: -50})
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass('dot')) {
          $('input[type=radio]').prop( "checked", false );
          $('.dot').removeClass('dot-color');
          gsap.to('.art2', {opacity: 0, duration: 0.2, y: -50})
          gsap.to('.art3, .art1', {opacity: 0, duration: 0.2, y: 50})
        }
    });
});