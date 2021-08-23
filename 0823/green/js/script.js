$(function(){
    // 1. 팝업구현 >> 배너를 클릭하면 팝업이 열림.
    $(".box").click(function(){
        // $("#popup").show();
        $("#popup").fadeIn(500);
    });
    $(".modal .close").click(function(){
        // $("#popup").hide();
        $("#popup").fadeOut(500);
    });
    
    // 2. 슬라이더 >> 3초이내 자동으로 이미지넘김. >> setInterval(함수, 시간)

    /* 좌우방향 롤링
    let bannerWidth = $(".top_banner>li").width();
    setInterval(function(){
        $(".top_banner").animate({left : -bannerWidth }, 2000, function(){
            $(".top_banner li:first").insertAfter(".top_banner li:last");
            $(".top_banner").css("left",0);
        });
    }, 3000);
    */
    $(".top_banner>li:first").siblings("li").hide();
    setInterval(function(){
        $(".top_banner>li:first").fadeOut(500).next("li").fadeIn(500);
        $(".top_banner>li:first").insertAfter(".top_banner>li:last");
    }, 2500);

    // 3. 탭메뉴
    $(".gnb>li").mouseenter(function(){
        $(this).children(".submenu").stop().slideDown("fast");
        $(this).siblings("li").children(".submenu").stop().slideUp("fast");
    }).mouseleave(function(){
        $(this).children(".submenu").stop().slideUp("fast");
    });

    // 4. 메뉴
    $("#tab_menu>a").click(function(){
        $(this).addClass("on").siblings("a").removeClass("on");
        let idx = $(this).index();
        $("#tab_box .list").eq(idx).show().siblings(".list").hide();
    });
    $("#tab_menu>a").eq(0).trigger("click");
})