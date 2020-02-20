$(document).scroll(function() {
    if ($(document).scrollTop() >= 350) {
        console.log("scrolled, changing nav");
        $('#navigation').addClass('navbar-light bg-light');
    }
    else {
        $('#navigation').removeClass('navbar-light bg-light');
    }
});

$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
});