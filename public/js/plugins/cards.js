

  $.fn.initCards = function () {
    console.log("hi3");
    $('.card-ind').on('click', function() {
        console.log("hi22");
        if ($(this).hasClass('open')) {
          $('.card-ind').removeClass('open');
          $('.card-ind').removeClass('shadow-2');
          $(this).addClass('shadow-1');
          return false;
        } else {
          $('.card-ind').removeClass('open');
          $('.card-ind').removeClass('shadow-2');
          $(this).addClass('open');
          $(this).addClass('shadow-2');
        }
      });

}