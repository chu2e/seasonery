

/*header-nav-sub*/

$(function(){
  $(".nav>li:nth-child(1)").mouseenter(function(){
    $(".sub1").stop().slideDown(300);
  });
  $(".nav>li:nth-child(1)").mouseleave(function(){
    $(".sub1").stop().slideUp(300);
  });
});
$(function(){
  $(".nav>li:nth-child(2)").mouseenter(function(){
    $(".sub2").stop().slideDown(300);
  });
  $(".nav>li:nth-child(2)").mouseleave(function(){
    $(".sub2").stop().slideUp(300);
  });
});


/*header-menubar*/

$(function(){
  $(".menu").mouseenter(function(){
    $(".menubar_sub").stop().slideDown(300);
  });
  $(".menu").mouseleave(function(){
    $(".menubar_sub").stop().slideUp(300);
  });
});



/*con2 사계절 이미지 hover*/

$(function(){ /*여름*/
  $(".con1_img2").mouseenter(function(){
    $(".con1_img2 img:nth-child(2)").stop().fadeIn(250);
  });
  $(".con1_img2").mouseleave(function(){
    $(".con1_img2 img:nth-child(2)").stop().fadeOut(250);
  });
});

$(function(){ /*가을*/
  $(".con1_po").mouseenter(function(){
    $(".con1_position2").stop().fadeIn(250);
  });
  $(".con1_po").mouseleave(function(){
    $(".con1_position2").stop().fadeOut(250);
  });
});

$(function(){ /*겨울*/
  $(".con1_img4").mouseenter(function(){
    $(".con1_img4 img:nth-child(2)").stop().fadeIn(250);
  });
  $(".con1_img4").mouseleave(function(){
    $(".con1_img4 img:nth-child(2)").stop().fadeOut(250);
  });
});

$(function(){ /*봄*/
  $(".con1_img1").mouseenter(function(){
    $(".con1_img1 img:nth-child(2)").stop().fadeIn(250);
  });
  $(".con1_img1").mouseleave(function(){
    $(".con1_img1 img:nth-child(2)").stop().fadeOut(250);
  });
});



/*con4 장바구니 hover*/

$(function(){
  $(".sec2_img_wrap>div:nth-child(1) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(1) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(1) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(1) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".sec2_img_wrap>div:nth-child(2) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(2) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(2) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(2) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".sec2_img_wrap>div:nth-child(3) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(3) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(3) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(3) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".sec2_img_wrap>div:nth-child(4) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(4) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(4) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(4) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".sec2_img_wrap>div:nth-child(5) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(5) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(5) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(5) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".sec2_img_wrap>div:nth-child(6) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(6) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(6) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(6) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});

$(function(){
  $(".sec2_img_wrap>div:nth-child(7) .con1_cart").mouseenter(function(){
    $(".sec2_img_wrap>div:nth-child(7) .con1_cart img:nth-child(2)").stop().fadeIn(200);
  });
  $(".sec2_img_wrap>div:nth-child(7) .con1_cart").mouseleave(function(){
    $(".sec2_img_wrap>div:nth-child(7) .con1_cart img:nth-child(2)").stop().fadeOut(200);
  });
});



/*con4 화살표 hover*/

$(function(){
  $(".sec2_left").mouseenter(function(){
    $(".hover_circle").stop().fadeIn();
  });
  $(".sec2_left").mouseleave(function(){
    $(".hover_circle").stop().fadeOut();
  });
});

$(function(){
  $(".sec2_right").mouseenter(function(){
    $(".hover_circle2").stop().fadeIn();
  });
  $(".sec2_right").mouseleave(function(){
    $(".hover_circle2").stop().fadeOut();
  });
});




/*con4 상품 슬라이드*/


$(document).ready(function(){


  //sec2 slide
  var b=0;
  $('.sec2_right').click(function(){
      b++;
      if(b>3){
          b=3;
      }

      $('.sec2_img_wrap').stop().animate({
          left:-409*b
      },
      );
      
      
  });
  
  $('.sec2_left').click(function(){
      b--;
       if(b<0){
           b=-1;
       }
       
       $('.sec2_img_wrap').stop().animate({
          left:-409*b 
       });
      
 });












});//




$(function(){
  AOS.init({
    duration: 1200
  });
});