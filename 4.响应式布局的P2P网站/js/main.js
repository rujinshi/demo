$(document).ready(function(){
    // 根据文档 个性化设置轮播图选项
    $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true
    }
    );
});
