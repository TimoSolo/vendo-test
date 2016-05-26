//LOADER/SPINNER
$(window).bind("load", function() {

    "use strict";
    
    $(".spn_hol").fadeOut(1000);
});


//MENU APPEAR AND HIDE
$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '35px'
            });
            $(".navbar-brand img").css({
                'padding-top': '0px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0.95)'
            });
        } else {
            $(".navbar").css({
                'margin-top': '-100px',
                'opacity': '0'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '45px'
            });
            $(".navbar-brand img").css({
                'height': '45px'
            });
            $(".navbar-brand img").css({
                'padding-top': '20px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });
        }
    });
});


// MENU SECTION ACTIVE
$(document).ready(function() {

    "use strict";
    
    $(".navbar-nav li a").click(function() {

        "use strict";
        
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

// Hilight MENU on SCROLl
$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        $(".page").each(function() {

            "use strict";
            
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});

//SMOOTH MENU SCROOL
$(function() {
	
	"use strict";

  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50 // 50 for navbar
      }, 1000);
        return false;
    }
}
});
});

// FIX HOME SCREEN HEIGHT
$(document).ready(function() {

    "use strict";
    
    setInterval(function() {

        "use strict";
        
        var widnowHeight = $(window).height();
        var containerHeight = $(".home-container").height();
        var padTop = widnowHeight - containerHeight;
        $(".home-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10)
});

//PARALLAX
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";
        $('.home-parallax').parallax("30%", 0.1);
        $('.subscribe-parallax').parallax("30%", 0.1);
        $('.testimonial').parallax("10%", 1);
        /*add as necessary*/
    }
});

//OWL CAROSEL
$(document).ready(function() {

    "use strict";
    
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1370, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
    });
});

 //PRETTYPHOTO
 $(document).ready(function() {

    "use strict";

    $("a[rel^='prettyPhoto']").prettyPhoto({
        show_title: false,
        /* true/false */
    });
});

//WOW JS
$(document).ready(function() {

    "use strict";

    new WOW().init();
});

//CONTACT FORM VALIDATION
sentmail = function(data) {
    $(".Sucess").show();
    $(".Sucess").fadeIn(2000);
    $(".Sucess").html("<i class='fa fa-check'></i> Dear <b>" + $("#name").val() + "</b> Thank you for your inquiry we will respond to you as soon as possible!");
    $("#Name").val("");
    $("#Email").val("");
    $("#Subject").val("");
    $("#Message").val("");
    $(".form_error .name_error, .form_error .email_error, .form_error .email_val_error, .form_error .message_error").addClass("hide").removeClass("show");
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("");
}
$(document).ready(function() {

    "use strict";
    
    $(".form_submit").click(function() {

        "use strict";
        
        var name = $("#name").val();
        var emaild = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,10}$/i;
        if (!name) {
            $(".form_error .name_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .name_error").addClass("hide").removeClass("show");
        }
        if (!emaild) {
            $(".form_error .email_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .email_error").addClass("hide").removeClass("show");
            if (testEmail.test(emaild)) {
                $(".form_error .email_val_error").addClass("hide").removeClass("show");
            } else {
                $(".form_error .email_val_error").addClass("show").removeClass("hide");
                return false;
            }
        }
        if (!message) {
            $(".form_error .message_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .message_error").addClass("hide").removeClass("show");
        }
        if (name && emaild && message) {
            $.ajax({
                url: 'https://docs.google.com/forms/d/1cq3dZEqhtBh5r34TkohEnymT2tJXtl4MWumcwFcFz90/formResponse',
                data: {
                    "entry.1432786648": name,
                    "entry.1592383048": emaild,
                    "entry.21911664": subject,
                    "entry.1652165143": message
                },
                type: 'POST',
                error: sentmail,
                success: sentmail
            });
        }
        return false;
    });
});

/// SMOOTH SCROLL           

$(document).ready(function() {

    "use strict";
    
    var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });
    //COUNTER
    $('.counter_num').counterUp({
        delay: 5,
        time: 1000
    });
});


//VIDEO BACKGROUND
// $(document).ready(function() {
//   var videobackground = new $.backgroundVideo($('body'), {
//     "align": "centerXY",
//     "width": 1280,
//     "height": 720,
//     "path": "media/",
//     "filename": "cloud",
//     "types": ["mp4","ogg","webm"]
//   });
// });

// TIMOSOLO MAGIC!

var slides=4;
    var pos=3; // 0 based
    var width=218;
    var moving=false;

    var slideby = function(dir) {
        if (moving) return; // ignore if in-motion
        moving=true;
        // remove active class on the content sliders
        $("#tslider .content>div").removeClass("active");
        pos += dir;
        
        if (pos>=slides) {
            pos=0;
        }
        else if (pos<0) {
            pos=slides-1;
            $("#tslider #screens .holder").removeClass("animate").css("margin-left",-width*slides);
        }
        // set one slide to active
        $("#tslider .content>div:eq("+pos+")").addClass("active");

        // slide the main screen:
        window.setTimeout(function() {
            $("#tslider #screens .holder").addClass("animate").css("margin-left",
                parseInt($("#tslider #screens .holder").css("margin-left"))-width*dir);
            //animate the bg screen, then undo
            $("#tslider #blur").addClass("animate").css("margin-left",-width*dir);
        }, 10);
        

        window.setTimeout(function() {
            $("#tslider #blur").removeClass("animate").css("margin-left",0);
            for (var i = 3; i >= 0; i--) {
                $("#tslider #blur img:eq("+i+")").attr("class","p"+((slides+pos+(i-3))%slides));
            };
            $("#tslider #screens .holder").removeClass("animate").css("margin-left",-width*pos);
            moving=false;
        }, 1020);

    }

    $( document ).ready(function() {
        slideby(1);
        $("#next").click(function(){
            slideby(1);
        })
        $("#prev").click(function(){
            slideby(-1);
        })
    });



    // player ***************
    var clips = new Array();
    var player = new Audio();
    clips[0] = new Audio("player_files/addidas.ogg");
    clips[1] = new Audio("player_files/appletizer.ogg");
    clips[2] = new Audio("player_files/berlingo.ogg");
    clips[3] = new Audio("player_files/listerene.ogg");
    //TODO: preload sounds

    $( document ).ready(function() {
        $("#player .song").click(function(){
            player.src = clips[this.id-1].src;
            player.play();
            $("#calling .name").html(this.innerText);
            $("#calling .avatar").prop("src","av"+this.id+".png");
            $("#calling").addClass("active");
        });
        $("#next, #prev, #calling").click(function(){
            player.pause();
            $("#calling").removeClass("active");
        });
        var rand = Math.random();
        //alert(rand);
        if (rand>0.5) {
            $(".header").addClass("african")
        }

    });