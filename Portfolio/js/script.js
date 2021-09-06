$(function(){

    // 상단 gnb박스 submenu 출력
    $(".gnb>li>a").click(function(e){
        e.preventDefault();
        $(this).siblings(".subwrap").stop().slideToggle(500);
        $(this).toggleClass("on");
        $(this).parents("li").siblings("li").children("a").removeClass("on");
        $(this).parents("li").siblings("li").children(".subwrap").stop().hide();
    });

    // 스크롤시 상단에 nav 박스 고정 및 사이드버튼 출력 , top버튼
    $(window).scroll(function(){
        let st = $(window).scrollTop();
        let videoHeight = $("video").height();
        if( st > videoHeight ){
            $("header").addClass("on");
        }
        else{
            $("header").removeClass("on");
        };

        if( st > videoHeight && !$(".sidebox").hasClass("on") ){
            $(".sideBtn").fadeIn(500);
        }
        else{
            $(".sideBtn").fadeOut(500);
        };

        $("#content div[class^='title']").each(function(){
            if( st > $(this).offset().top - 400 ){
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        });

        $("#content span").each(function(){
            if( st > $(this).offset().top - 550 ){
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        });

        if( st > $("#java").offset().top ){
            $("#top").fadeIn("fast");
        }
        else{
            $("#top").fadeOut("fast");
        }
    });

    // 사이드메뉴 버튼 & 사이드박스 
    $(".sideBtn").click(function(){
        $(this).stop().hide();
        $(".sidebox").addClass("on");
    });
    $(".sidebox>.close").click(function(){

        $(".sidebox").removeClass("on");
        $(".sideBtn").stop().show();
    });

    // 하단 슬라이드 박스
    $(".slide .list li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
    setInterval(function(){
        $(".slide .list").animate({marginLeft : -275}, 1000, function(){
            $(".slide .list li:first").insertAfter($(".slide .list li:last"));
            $(".slide .list").css("margin-left", 0);
            $(".slide .list li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
        })
    }, 3000)
});