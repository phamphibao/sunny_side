$(document).ready(function () {
    $('input#checked_menu').click(function (e) { 
        $('.menu-popup-mobile').toggleClass('active');
    });
    
    var $window = $(window);
    var windowsize = $window.width();
        if (windowsize > 426) {
            animation('#box-top-right','animate__animated animate__fadeInLeft',300);
            animation('#box-top-left','animate__animated animate__fadeInRight',300);
            animation('#box-center-left','animate__animated animate__fadeInLeft',800);
            animation('#box-center-right','animate__animated animate__fadeInRight',800);
            animation('#image-left','animate__animated animate__fadeInLeft',1500);
            animation('#image-right','animate__animated animate__fadeInRight',1500);
            animation('#emily','animate__animated animate__fadeInLeft animate__delay-2s',1800);
            animation('#thomas','animate__animated animate__fadeInLeft animate__delay-1s',1800);
            animation('#jennie','animate__animated animate__fadeInLeft ',1800);
        }
});

function animation(params,animation,elPosition) {
    $(document).scroll(function () { 
        var offset = $(params).offset().top + elPosition;
        var window =  $(document).scrollTop();
        if(offset < window){
            $(params).addClass(animation);
            $(params).removeClass('d-none');
            $(params).css('display', 'block');
        }
    });
}