$(function(){



    $(".storetabCont>div:not("+$(".storeTab li a.active").attr("href")+")").hide();
    $('.storeTab li a').click(function(){
        $('.storeTab li a').removeClass('active');
        $(this).addClass('active');
        $('.storetabCont>div').hide();
        $($(this).attr('href')).show();
        return false
    })

    $('.stockist_list li').on('click',function(){
        $(this).children('.cont_stk').slideToggle();
        $(this).toggleClass('active');
        $('.stockist_list li').not(this).children('.cont_stk').slideUp();
        $('.stockist_list li').not(this).removeClass('active');
    });


    var stkCnt = $('.stockist_list li').length;
    var flagCnt = $('.flagshipItem').length;
    $('#stk_cnt').append(`(${stkCnt})`);
    $('#flag_cnt').append(`(${flagCnt})`);



    $('.flagSlide').bxSlider({
        pager: true,
        controls: false,
        infiniteLoop: true,
        // startSlide
    });

    $('.exhibitSlide a').colorbox({ 
    maxWidth: '100%',
    maxHeight: '100%',
    });


    $(".exhibitSlide").slick({
        centerMode:true,
        slide:"li",
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:3,
        slidesToScroll:1,
        speed:2000,
        arrows:false,
        pauseOnHover:true,
        dots:false,
        responsive:[        
            {
                breakpoint: 769,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            
        ]
    });

    $(".read").click(function(){	
        if($(this).next().is(":visible"))
		{
			$(this).next().stop().slideUp(500);
			$(this).text("자세히보기");
		}else{

			$(".readCont").stop().slideUp(500);
			$(this).next().stop().slideDown(500);
			$(this).text("닫기");
		};
    });    

});

