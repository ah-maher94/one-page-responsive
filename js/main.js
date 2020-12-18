$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $("#scrollToTop").fadeIn(500);
        }else{
            $("#scrollToTop").fadeOut(500);
        }


        // Under Slider Animation
        if($(this).scrollTop() >= ($("#underSlider").offset().top - 900)){
            $("#underSlider img").fadeIn(500);
        }else{
            $(".hiddenNavbar").fadeOut(500);
        }

        // console.log("window" + $(this).scrollTop());
        // console.log("div"+($("#deptDivs").offset().top ));
        
        // Departments Animation
        if($(this).scrollTop() >= ($("#deptDivs").offset().top -900)){
            $("#deptDivs .deptDiv:eq(0)").slideDown(500);
            $("#deptDivs .deptDiv:eq(1)").slideDown(1000);
            $("#deptDivs .deptDiv:eq(2)").slideDown(1500);
        }

        // Services Animation
        $(".serviceDivs div").each(function(){
            // console.log("div"+($(this).offset().top ));
            if($(window).scrollTop() >= ($(this).offset().top - 900)){
                $(this).animate({"left": "0px"}, 800);
            }
            if($("button",this).length >0){
                $(this).hover(function(){
                    $("button",this).fadeIn(200);
                }, function(){
                    $("button",this).fadeOut(200);
                });
            }

        })


        // Projects Animation
        if($(this).scrollTop() >= ($("#projectDivs").offset().top -900)){
            $("#projectDivs .projectDiv:eq(0)").animate({"top": "0px"}, 400);
            $("#projectDivs .projectDiv:eq(1)").animate({"top": "0px"}, 700);
            $("#projectDivs .projectDiv:eq(2)").animate({"top": "0px"}, 1000);
        }

        if($(this).scrollTop() >= ($(".projectBg").offset().top -900)){
            $(".projectBg").fadeIn(0);
        }

        // Team Members
        if($(this).scrollTop() >= ($("#teamDivs").offset().top -900)){
            $("#teamDivs .teamDiv:eq(0)").animate({"top": "0px"}, 400);
            $("#teamDivs .teamDiv:eq(1)").animate({"top": "0px"}, 700);
            $("#teamDivs .teamDiv:eq(2)").animate({"top": "0px"}, 1000);
        }


        $(".showProjects").each(function(){
            if($("button",this).length >0){
                $(this).hover(function(){
                    $("button",this).fadeIn(200);
                }, function(){
                    $("button",this).fadeOut(200);
                });
            }

        })

        // Questions Buttons
        $(".questionsDivs div").each(function(){

            if($("button",this).length >0){
                $(this).hover(function(){
                    $("button",this).fadeIn(200);
                }, function(){
                    $("button",this).fadeOut(200);
                });
            }

        })




    });

    // Menu Dropdown
    $(".dropdown-toggle").hover(function(){
        $(".dropdown-toggle").parent().find("div:first").not($(this)).stop(true, true);
        $(this).parent().find("div:first").slideDown(500);
    }, function(){
        $(".dropdown-toggle").parent().find("div:first").not($(this)).stop(true, true);
        $(this).parent().find("div:first").slideUp(500);
    });
 
        
    $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
        var inner = document.querySelector('.card-carousel-inner');
        var controls = document.querySelectorAll('.controls');
        if (e.direction === 'left') {
                controls[0].className = 'fas fa-angle-double-left controls class-active';
        }
        if (e.direction === 'right') {
                controls[1].className = 'fas fa-angle-double-right controls class-active'
        }
        
        if (e.relatedTarget == inner.lastElementChild) {
            controls[1].className = 'fas fa-angle-double-right controls class-fade'
        }
        if (e.relatedTarget == inner.firstElementChild) {
            controls[0].className = 'fas fa-angle-double-left controls class-fade'
        }
        })


 
 
    var body = $("body, html");
    // Scroll To Top Button
    $("#scrollToTop").click(function(){
        $(body).stop().animate({scrollTop:0},700);
    })


    // Team Content
    $(".teamDiv").hover(function(){
        $(".teamCard").not($(this).children("div:first")).stop(false, true);
        $(this).children("div:first").animate({"bottom":"-5%"},1, function(){
            $(this).fadeIn(1,function(){
                $(this).animate({"bottom":"15%"},50);
            })
        });
    }, function(){
        $(".teamCard").not($(this).children("div:first")).stop(false, true);
        $(this).children("div:first").animate({"bottom":"-25%"},50, function(){
            $(this).fadeOut(0);
        });
    });


    // collapse FAQ
    $(".plusMinus").click(function(){
        console.log($(this).parent().next(".faqParagraph").is(":hidden"));
        console.log($(this).html());
        $(this).parent().next().slideToggle(500);

    /*      //change + to - 
            , function(){
            if($(this).parent().next(".faqParagraph").is(":hidden")){
                console.log("if");
                $(this).parent().children("span").text = "-";
            }else{
                console.log("else");
                $(this).parent().children("span").text = "+";
            }
    
        } */

        $(this).parent().parent().find("p").not($(this).parent().next()).slideUp(500);


    });


});

// Loading
$(window).on('load', function(){
    $(".loading-overlay, .loading-overlay .sk-folding-cube").fadeOut(3000, function(){
        $("body").css({"overflow":"auto"});
            $(this).remove();
    });
    
});