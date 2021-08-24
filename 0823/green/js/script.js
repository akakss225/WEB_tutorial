$(function(){
    // 1. 팝업구현 >> 배너를 클릭하면 팝업이 열림.
    $(".box").click(function(){
        // $("#popup").show();
        $("#popup").fadeIn(500);

        $("#popup").click(function(e){
            $(this).fadeOut();
        })
        $(".modal").click(function(e){
            e.stopPropagation();
            // if($(this).has(e.target).length === 0){ // 클릭하면 0 이 나옴.
            //     $("#popup").show();
            // }
            // else{
            //     $("#popup").fadeOut();
            // }
        })
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
    
    // 페이드 인, 아웃
    // $(".top_banner>li:first").siblings("li").hide();
    // setInterval(function(){
    //     $(".top_banner>li:first").fadeOut(500).next("li").fadeIn(500);
    //     $(".top_banner>li:first").insertAfter(".top_banner>li:last");
    // }, 2500);

    // 3. 탭메뉴
    $("#tab_menu>a").click(function(){
        $(this).addClass("on").siblings("a").removeClass("on");
        let idx = $(this).index();
        $("#tab_box .list").eq(idx).show().siblings(".list").hide();
    });
    $("#tab_menu>a").eq(0).trigger("click");

    
    // 4. 메뉴

    // 1 유형 선택한 대메뉴의 서브메뉴만 슬라이드 다운

    // $(".gnb>li").mouseenter(function(){
    //     $(this).children(".submenu").stop().slideDown("fast");
    // }).mouseleave(function(){
    //     $(this).children(".submenu").stop().slideUp("fast");
    // });

    // 2 유형 모든 서브메뉴가 슬라이드 다운

    // $(".gnb>li").mouseenter(function(){
    //     $(".submenu").stop().slideDown("fast");
    // }).mouseleave(function(){
    //     $(".submenu").stop().slideUp("fast");
    // });

    // 3 유형  BG가 깔림

    $("header").append("<div class='bg'></div>");
    
    $(".gnb>li").mouseenter(function(){
        $(".submenu, .bg").stop().slideDown("fast");
    }).mouseleave(function(){
        $(".submenu, .bg").stop().slideUp("fast");
    });

})