$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        ltr:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:10,
        items:4,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            768:{
                items:2,
                nav:false
            },
            991:{
                items:3,
                nav:true,
                loop:false
            },
            // 991:{
            //     items:4,
            //     nav:true,
            //     loop:false
            // }
        }
    
    })
    
});
