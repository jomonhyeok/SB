$(document).ready(function () { 
    //initialize swiper when document ready 
    var mySwiper = new Swiper ('.swiper-container', { 
        // Optional parameters 
        loop: true,
        autoplay: {
            delay: 2000,
          },
          speed : 2000,
          pagination : { // 페이징 설정
			el : '.swiper-pagination',
			clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
		},
    })
    $('div.container').click(function(){
        $(this).toggleClass('active');
    })
    $('div.footer div.wrap div.footer_Top div.footer_left > ul li').click(function(){
        if($('div.footer div.wrap div.footer_Top div.footer_left ul li span').eq($(this).index()).hasClass('active')){
            $('div.footer div.wrap div.footer_Top div.footer_left ul li span').removeClass('active');
        }else{
            $('div.footer div.wrap div.footer_Top div.footer_left ul li span').removeClass('active');
            $('div.footer div.wrap div.footer_Top div.footer_left ul li span').eq($(this).index()).toggleClass('active');
        }//빨간원

        if($('div.footer div.wrap div.footer_Top div.footer_left ol > li').eq($(this).index()).hasClass('active')){
            $('div.footer div.wrap div.footer_Top div.footer_left ol > li').removeClass('active');
        }else{
            $('div.footer div.wrap div.footer_Top div.footer_left ol > li').removeClass('active');
            $('div.footer div.wrap div.footer_Top div.footer_left ol > li').eq($(this).index()).toggleClass('active');
        }//footer menu
    });

    $('div.footer i').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
        alert('');
    });

    $('#full-page').fullpage({
        navigation: true,
        navigationTooltips:['Home','Value', 'Story', 'Menu', 'Reserve'],
        // sectionsColor : ['transparent', 'transparent', '#123456', '#234561'],
        scrollingSpeed: 500,
        onLeave: function(origin, destination, direction, index){
            console.log('스크롤이 시작하면 실행/ origin원래 section, destination이동한 setion');
            console.log(origin.index);
            if(destination.index == 5){
                $('#fp-nav').hide();
            }
            if(!(destination.index == 5)){
                $('#fp-nav').show();
            }
            if(origin.index== 1 && destination.index==0){
                $('header nav ul li a').removeClass('silde2'); //black제거 
            }
            if(origin.index == 0){
                $('#fp-nav ul li').addClass('active');
            }
        },
        afterLoad: function(origin, destination, direction, index){
            if(destination.index == 1){
                $('header nav ul li a').addClass('silde2');
                $('#fp-nav ul li span:last-of-type').addClass('active'); //navigation 색깔
                $('#fp-nav ul li .fp-tooltip.fp-right').addClass('active'); //navigation 글씨
            }
            if(destination.index>1){
                $('header nav ul li a').removeClass('silde2'); //black 제거
            }
            if(destination.index == 0){
                $('#fp-nav ul li').addClass('active'); //margin값 감소
            }
        },
    });
    $(document).scroll(function(){
        console.log($(document).scrollTop());
    });
})