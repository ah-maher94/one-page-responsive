$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $("#scrollToTop").fadeIn(500);
        }else{
            $("#scrollToTop").fadeOut(500);
        }


        // Under Slider Animation
        if($(this).scrollTop() >= ($("#underSlider").offset().top - $("#underSlider").height()*3)){
            $("#underSlider img").fadeIn(500);
        }else{
            $("#underSlider img").fadeOut(500);
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
     /*    if($(this).scrollTop() >= ($("#underSlider").offset().top - $("#underSlider").height()*3)){
            $("#underSlider img").fadeIn(500);
        }else{
            $("#underSlider img").fadeOut(500);
        } */
    });

    var body = $("body, html");
    $("#scrollToTop").click(function(){
        $(body).stop().animate({scrollTop:0},700);
    })

    $(".plusMinus").click(function(){
        console.log($(this).parent().next(".faqParagraph").is(":hidden"));
        console.log($(this).html());
        $(this).parent().next().slideToggle(500, function(){
            if($(this).parent().next(".faqParagraph").is(":hidden")){
                console.log("if");
                $(this).parent().children("span").text = "-";
            }else{
                console.log("else");
                $(this).parent().children("span").text = "+";
            }
    
        });
        $(this).parent().parent().find("p").not($(this).parent().next()).slideUp(500);


    });


});