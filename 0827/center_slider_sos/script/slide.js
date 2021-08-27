$(function(){
    // 1. 상단 슬라이더 , dot 애니메이션
    let imgWidth = $(".inner_slide>li").outerWidth();
    let slideCount = $(".inner_slide li").length;
    $(".inner_slide").width(imgWidth * slideCount);
    
    for (let i = 0; i < slideCount; i++){
        $(".dot").append("<li></li>");
    }
    $(".dot li").eq(0).addClass("on");

    setInterval(function(){
        $(".inner_slide").animate({ marginLeft : -imgWidth}, 1000, function(){
            $(".inner_slide li:first").insertAfter(".inner_slide li:last");
            $(".inner_slide").css("margin-left",0);
            let idx = $(".inner_slide li:first").children("img").attr("alt");
            $(".dot li").eq(idx).addClass("on").siblings("li").removeClass("on");
        })
    }, 3000);

    // 2. 포스터 이미지 회전 및 scale
    $(".p_img li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
    setInterval(function(){
        $(".p_img li:nth-child(2)").removeClass("on");
        $(".p_img").animate({ marginLeft : -336}, 1000, function(){
            $(".p_img li:first").insertAfter(".p_img li:last");
            $(".p_img").css("margin-left",0);
            $(".p_img li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
        });
    }, 3000);
});