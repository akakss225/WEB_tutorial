$(function(){

    // 상단 gnb박스 submenu 출력
    $(".gnb>li>a").click(function(e){
        e.preventDefault();
        $(this).siblings(".subwrap").stop().slideToggle(500);
        $(this).toggleClass("on");
        $(this).parents("li").siblings("li").children("a").removeClass("on");
        $(this).parents("li").siblings("li").children(".subwrap").stop().hide();
        $(this).parents("li").toggleClass("on").siblings("li").removeClass("on");
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
    function run(){ // 슬라이드 코드
        $(".slide .list").animate({marginLeft : -275}, 1000, function(){
            $(".slide .list li:first").insertAfter($(".slide .list li:last"));
            $(".slide .list").css("margin-left", 0);
            $(".slide .list li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
        });
    };
    let interval = setInterval(run, 3000);
    $(".slide .list li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
    if ($(window).outerWidth() < 960){ // 초기값 : 브라우저 실행시 현재 width에 따라 pc사이즈면 슬라이드가 실행되고, 아니면 실행되지않는다.
        $(".slide .list li:nth-child(2)").removeClass("on").siblings("li").removeClass("on");
        clearInterval(interval);
    };
    
    $(window).resize(function(){ // width를 변경하면서 pc size가 되면 슬라이드 실행, 테블릿 size가 되면 슬라이드 멈춤.
        if($(window).outerWidth() < 960){
            $(".slide .list li:nth-child(2)").removeClass("on")
            clearInterval(interval);
            
        }
        else{
            $(".slide .list li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
            clearInterval(interval);
            interval = setInterval(run, 3000);
        }
        if ($(window).outerWidth() > 520 && $("nav").hasClass("active")){
            $("nav").removeClass("active");
        }
    });

    // 모바일 토글버튼
    $("#toggle").click(function(){
        $("nav").stop().toggleClass("active");
    })
});