$(function(){
    $(".gnb>li").mouseenter(function(){
        $(".submenu").stop().slideDown(300);
    }).mouseleave(function(){
        $(".submenu").stop().slideUp(300);
    })

    /* let sliderWidth = $(".slide>li").width();
    setInterval(function(){
        $(".slide").animate({ left : -sliderWidth}, 2000, function(){
            $(".slide>li:first").insertAfter(".slide>li:last");
            $(".slide").css("left", 0);
        })
    }, 300) */
})