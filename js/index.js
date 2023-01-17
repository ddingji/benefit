$(document).ready(function(){
  let count = 0;
  window.onresize = function(){
    document.location.reload();
  };
  if(matchMedia("screen and (min-width: 769px)").matches){
        //서브1페이지 슬라이드
        $(".btn_prev").click(function(e){
          e.preventDefault ()  
          count++;
          if(count>0){count=0;}
          $(".train").css("transform","translateX("+(-1532*count)+"px)");
      
          //네비버튼 활성화 기능
           $(".navi>li").removeClass("on");
           $(".navi>li").eq(count).addClass("on")
      
      
        });
        $(".btn_next").click(function(e){
          e.preventDefault()
          count--;
          if(count<1){count=1;}
          $(".train").css("transform","translateX("+(-1532*count)+"px)");
          $(".navi>li").removeClass("on");
          $(".navi>li").eq(count).addClass("on")
      
          //네비버튼 활성화 기능
        })
        $(".navi>li").click(function(){
          //클릭한 리스트의 순번에 맞게
          //해당하는 슬라이드의 내용이 보여질 수 있는 기능
      
          let idx = $(this).index();
          count = idx;
          // 이걸 넣어야 네비게이션을 누르고 버튼을 눌렀을 때 버그 없이 움직일 수 있다.
          $(".train").css("transform","translateX("+(-1532*idx)+"px)");
          $(".navi>li").removeClass("on");
          $(".navi>li").eq(idx).addClass("on")
      
        });
  }else{
            //서브1페이지 슬라이드
            $(".btn_prev").click(function(e){
              e.preventDefault ()  
              count--;
              if(count<0){count=0;}
              $(".train").css("transform","translateX("+((-100/8)*count)+"%)");
          
              //네비버튼 활성화 기능
               $(".navi>li").removeClass("on");
               $(".navi>li").eq(count).addClass("on")
          
          
            });
            $(".btn_next").click(function(e){
              e.preventDefault()
              count++;
              if(count>7){count=7;}
              $(".train").css("transform","translateX("+((-100/8)*count)+"%)");
              // $(".navi>li").removeClass("on");
              // $(".navi>li").eq(count).addClass("on")
          
              //네비버튼 활성화 기능
            })
  }



    // 서브5페이지 PC 슬라이드
   

      let count1 = 0;
    // $(".buttonL").click(function(e){
    //   e.preventDefault ()
    //   count1++;
    //   if(count1>0){count1=0;}
    //   $(".train").css("transform","translateX("+(-300*count1)+"px)");
  
    // })
    // $(".buttonR").click(function(e){
    //   e.preventDefault ()
    //   count1--;
    //   if(count1<1){count1=1;}
    //   $(".train").css("transform","translateX("+(-300*count1)+"px)");
    
    // })
    //서브5페이지 pc 스크롤 이벤트
    $(window).scroll(function(){
      let windowHight = $(window).height()*0.8
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".station6").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("on6")
          }else{
              $(this).removeClass("on6")
          }
      })

    })



    //메인페이지 스크롤이벤트

    $(window).scroll(function(){
      let windowHight = $(window).height()*0.9
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".scrolla,.scrollb").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("aon")
          }else{
              $(this).removeClass("aon")
          }
      })

    })

    $(window).scroll(function(){
      let windowHight = $(window).height()*0.7
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".scrollP").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("Pon")
          }else{
              $(this).removeClass("Pon")
          }
      })

    })

    //pc 4페이지 스크롤 자바
    
    $(window).scroll(function(){
      let windowHight = $(window).height()*0.3
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".sub4two.sub4text1.textmove").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("t1on")
          }else{
              $(this).removeClass("t1on")
          }
      })

    })

    $(window).scroll(function(){
      let windowHight = $(window).height()*0.7
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".scroll4three").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("con")
          }else{
              $(this).removeClass("con")
          }
      })

    })


    $(window).scroll(function(){
      let windowHight = $(window).height()*0.3
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".scrollR").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("Ron")
          }else{
              $(this).removeClass("Ron")
          }
      })

    })

    //pc 서브1페이지 스크롤 이벤트

    $(window).scroll(function(){
      let windowHight = $(window).height()*0.5
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".janesign").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("Jon")
          }else{
              $(this).removeClass("Jon")
          }
      })

    })
    $(window).scroll(function(){
      let windowHight = $(window).height()*0.8
      let scrolltop = $(window).scrollTop()
      // let tagTop = $(".a").offset().top


      $(".scrollS").each(function(){
          if(scrolltop+windowHight>$(this).offset().top){
              $(this).addClass("Son")
          }else{
              $(this).removeClass("Son")
          }
      })

    })
 
    //pc 서브 5페이지 헬로브로우
    $(window).scroll(function(){
        let windowHight = window.innerHeight*0.7
        let scrolltop = $(window).scrollTop()
        // let tagTop = $(".a").offset().top
        console.log(windowHight)

        $(".sub4text1").each(function(){
            if(scrolltop+windowHight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

      })

      //pc 서브5페이지 여자모델 사진
      $(window).scroll(function(){
        let windowHight = window.innerHeight*0.7
        let scrolltop = $(window).scrollTop()
        // let tagTop = $(".a").offset().top
        console.log(windowHight)

        $(".sub4service").each(function(){
            if(scrolltop+windowHight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

      })

      $(window).scroll(function(){
        let windowHight = window.innerHeight*0.7
        let scrolltop = $(window).scrollTop()
        // let tagTop = $(".a").offset().top
        console.log(windowHight)

        $(".sub4text2").each(function(){
            if(scrolltop+windowHight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

      })

      // 모바일 메뉴 열고 닫기
      $(".gnb1>figure").click(function(){
        $(".gnb2").removeClass("onn")
       
    })
    $(".gnb2>.mo_gnb>ul>li:nth-of-type(1)>p").click(function(){
      $(".gnb2").addClass("onn")
    })

    //모바일 5페이지 슬라이드
    var swiper = new Swiper(".liveS", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".buttonR",
        prevEl: ".buttonL",
      },
      
    });

    if(matchMedia("screen and (max-width: 768px)").matches){
      var swiper = new Swiper(".station6", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
    }

    
 


  });
  // 카운트에 -1이 들어가면 +1000이 된다. 그러면 트레인이 오른쪽으로 가니까 흰색배경만 보이게 됨. 따라서 if(count<0){count=0;}이거를 넣어주면 된다.
  
  // 앞에 선택한 태그의 0번째 1번째 등 eq
  // index 는 남겨지는 값이 태그가 아니고 숫자다.  0 1 등이 리턴.
