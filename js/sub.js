$(function(){

    //추천상품 
    var swiper = new Swiper(".rrswiper", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false, 
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
        },
        },

    });


    //필터
    $('.filterList').hide();
    $('.filterLink').on('click',function(e){
        e.preventDefault(); 
        if($(this).parent().next().is(':visible')){
            $(this).parent().next().stop().hide();
            $(this).find('img').css({transform:'none'});
        } else {
            $(this).parent().next().stop().slideDown();
            $(this).find('img').css({transform:'rotate(180deg)'});
        }
    });


// 제품 카테고리
    $('.filterList li').on('click',function(){ 
        $('.filterList li').removeClass('on');
        $(this).addClass('on');
        $('.filterList').stop().slideUp();
        $('.filterLink').find('img').css({transform:'none'});
        $('.filterLink span').text($(this).text());

        const value = $('.filterLink span').text();
        if(value == '핸드크림'){
            $('.shop_filter ul').eq(1).removeClass('hidden');
            $('.handList li').removeClass('on');
        } else{
            $('.shop_filter ul').eq(1).addClass('hidden');
        }

        const filterId = $(this).attr('id');
        $('.shop_container > div').each(function(){
            const dataList = $(this).attr('data-list');
            
            if(filterId=="all"){
                $('.shop_container > div').fadeIn();
            } else if(dataList==filterId){
                $(this).show();
            } else {
                $(this).hide();
            };  
        });
    });

// 핸드크림 카테고리 
    $('.handList li').on('click',function(){
        $('.handList li').removeClass('on');
        $(this).addClass('on');
        
        const handDetail = $(this).attr('id');
        $('.shop_container > div').each(function(){
            const dataTag = $(this).attr('data-tag');
            if(dataTag==handDetail){
                $(this).show();
            } else {
                $(this).hide();
            };  
        });
    });

// 배너

    $('.shop_filter li').on('click',function(){
        const listId = $(this).attr('id');
        $('.shop_banner>div').each(function(){
            const bannerTag = $(this).attr('data-tag');
            if(listId==bannerTag){
                $('.shop_banner>div').hide();
                $(this).show();
                return false;
            } else{
                $(this).hide();
                $('.shop_banner .bannerDefault').show();
            }


        });
    });








//제품
    for (let i = 0; i < $('.itemCapacity button').length; i++){
        $('.itemCapacity button').eq(i).on('click',function(){
		$(this).parent().parent().find("button").removeClass('active');
        $('.itemCapacity button').eq(i).addClass('active');
		$(this).parent().parent().find("img").removeClass('active');
        $('.itemImg img').eq(i).addClass('active');
		$(this).parent().parent().find(".price").removeClass('active');
        $('.itemInfo .price').eq(i).addClass('active');
        });
    }



});


