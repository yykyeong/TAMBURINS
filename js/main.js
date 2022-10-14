$(function(){    
    
    
//모바일 메뉴
$('.aside_menu').click(function(){
    $('.aside, .aside_bg').addClass('on');
});

$('.aside_cross').click(function(){
    $('.aside, .aside_bg').removeClass('on');
});

$('.aside_bg').click(function(){
    $('.aside, .aside_bg').removeClass('on');
});

$('.has_sub > a').click(function(){
    $(this).next().slideToggle(500);
})

// 장바구니
$('.cart_menu').click(function(){
    $('.aside_cart_wrap').addClass('cartOn');
});

$('.aside_cart .aside_cross').click(function(){
    $('.aside_cart_wrap').removeClass('cartOn');
});

$('.aside_cart_wrap').click(function(e){
    if($(e.target).is($('.aside_cart_wrap'))){
        $('.aside_cart_wrap').removeClass('cartOn');
    };
});

/* sec01_main */

// function addzero() {
//     $('.main_sec01 .swiper-pagination span').prepend(0)
// }



function addzero(){
    const visualPage = $('.main_sec01 .swiper-pagination span');
    visualPage.prepend(0);
}
var swiper = new Swiper(".visualSwiper", {
    observer: true,
    observeParents: true,
    loop:true,
    navigation: {
        nextEl: ".visualSwiper .swiper-button-next",
        prevEl: ".visualSwiper .swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    keyboard: true,
    on: {
        activeIndexChange : function(){addzero();},
    },
    });
    addzero();

/* sec02_best */
var bestSwiper = new Swiper(".bestSwiper", {
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    pagination: {
        el: ".bestPage",
        type: "progressbar",
        direction: 'false',
    },
    loop:true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },

    navigation: {
        nextEl: ".bestSwiperBtn .swiper-button-next",
        prevEl: ".bestSwiperBtn .swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        720: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        },
    });
    $('.bestBox > div').removeClass('swiper-pagination-horizontal');
    
    /* sec03_prd */
    
    // prd 타이틀
    $('.tit_left').waypoint(function(){
        $('.tit_left').addClass('animated fadeInLeft');
    },{
        offset: '75%' 
    });
    
    $('.tit_right').waypoint(function(){
        $('.tit_right').addClass('animated fadeInRight');
    },{
        offset: '75%' 
    });
    
    // prd 리스트
    var prdTab = $('.prd_tab > li');
    var prdItem = $('.prd_list_wrap > div')
    var prdTab_lgth = prdTab.length;
    var srt = 1;
    
    
        prdTab.on('click', function() {
        var index = $(this).index();
        prdItem.removeClass('prd_list_active');
        prdItem.eq(index).addClass('prd_list_active');
        
        prdTab.removeClass('prd_tab_active');
        $(this).addClass('prd_tab_active');
    });
    
    setInterval (prdSlide,3000)
    function prdSlide(){
    if(srt == prdTab_lgth){
        srt = 0;
    }
    prdItem.eq(srt).addClass('prd_list_active').siblings().removeClass('prd_list_active');
    prdTab.eq(srt).addClass('prd_tab_active').siblings().removeClass('prd_tab_active');
    srt++;  
    };
    
    /* sec04_gift */
    var prevScrollTop = 0;
    var nowScrollTop = 0;
    
    function wheelDelta(){
        return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
    };
    
    $(window).on('scroll', function(){
    nowScrollTop = $(this).scrollTop();
    if(wheelDelta() == 'down'){
        $('.sticky').removeClass('fadeIn'); 
        $('.sticky').waypoint(function(){
            $('.sticky').addClass('animated fadeOut');
        },{
            offset: '0%' 
        });        
    }
    if(wheelDelta() == 'up'){
        $('.sticky').removeClass('animated fadeOut'); 
        $('.sticky').addClass('animated fadeIn');
    }
    prevScrollTop = nowScrollTop;
    });
    
    /* sec05_store */
    var storeSwiper = new Swiper(".storeSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            spaceBetween: 50,
        }
    },
    on: {
    activeIndexChange: function () {
    var storeIndex = this.realIndex;
    const slideEven = $('.storeSwiper .swiper-slide:even');
    const slideOdd =  $('.storeSwiper .swiper-slide:odd');
    if (storeIndex%2 == 0 ){
        slideEven.addClass('storeOn');
        slideOdd.removeClass('storeOn');
    }
    else if(storeIndex%2 == 1 ){
        slideOdd.addClass('storeOn');
        slideEven.removeClass('storeOn');
    }}}, });
    
    
    /* sec06_sns */
    var snsSwiper = new Swiper(".snsSwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: false, //그룹수가 맞지 않을 경우 빈칸으로
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
    768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
    },
    1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
    }}});
    
    
    /* footer */
    var f_button = $('.f_btn');
    var f_list = $('.footer_group');
    var arrow = $('.f_btn span');
    
    for (let i=0 ; i< f_button.length;i++){
    f_button.eq(i).on('click',function(){
    if(f_list.eq(i).is(':visible')){
        f_list.eq(i).slideUp();
        arrow.eq(i).removeClass('btnUp')
    } else{
        f_list.eq(i).slideDown();
        arrow.eq(i).addClass('btnUp')}
    });};
    
    $(window).resize(function(){
    if($(window).width() >= 1200){
        f_button.attr('disabled',true);
        // alert ('비활성');
    } else {
        f_button.attr('disabled',false);}
    }).resize(); 



// 탑버튼
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.chat').fadeIn(200);
    } else {
        $('.chat').fadeOut(200);
    }
});

$('.chat').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
});






});









