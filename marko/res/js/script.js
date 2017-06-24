$(function(){

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

    if (scrollPos > 50) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });

  $('body').scrollspy({ target: '#navbar-example' });
  

   $('[data-fancybox]').fancybox({
      speed : 600,
      image: {
        protect: true
      }
   });

  $('.gallery_categories li').click(function() {
      $(".gallery_categories li").removeClass('active');
      $(this).addClass('active');
  });

  $(".filter-btn").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('slow');
        }
        else
        {
           $(".filter").not('.'+value).hide('slow');
            $('.filter').filter('.'+value).show('slow');  
        }
    });

  $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
           window.location.hash = hash;
        });
      }
    });

});

