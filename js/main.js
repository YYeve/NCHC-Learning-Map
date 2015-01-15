// JavaScript Document
$(function() {
	
	// 啟動 onepage_scroll plugin
  $(".main").onepage_scroll({
   sectionContainer: "section",     
   // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  
   // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             
   // AnimationTime let you define how long each section takes to animate
   pagination: true,                
   // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,           
        
   // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {
   	//hide all element
		$(".astronomy_english").hide();
		$(".astronomy_title").hide();
		$(".astronomy_icon").hide();
		$(".astronomy_intro").hide();
		$(".item-ET").hide();
		$(".item-plante1").hide();
		$(".item-plante2").hide();
		$(".item-plante4").hide();
		$(".item-star1").hide();
		$(".item-star2").hide();
		$(".item-star3").hide();
		$(".item-rocket").hide();

	 	$(".atmosphere_english").hide();
	 	$(".atmosphere_title").hide();
	 	$(".atmosphere_icon").hide();
	 	$(".atmosphere_intro").hide();
	 	$(".item-satellite").hide();
	 	$(".item-line").hide();
	 	$(".item-light").hide();
		$(".item-comet").hide();
		$(".item-O3").hide();
	 	$(".item-cloud").hide();


		$(".geology_english").hide();
	 	$(".geology_title2").hide();
	 	$(".geology_icon").hide();
	 	$(".geology_intro").hide();
		$(".item-baby").hide();
	 	$(".item-dad").hide();
	 	$(".item-mom").hide();
		$(".item-grand").hide();
		$(".item-grand1").hide();
	 	$(".item-grand2").hide();
     	$(".item-sea").hide();
		$(".item-mountain").hide();
		
		
		$(".ocean_english").hide();
	 	$(".ocean_title2").hide();
	 	$(".ocean_icon").hide();
	 	$(".ocean_intro").hide();
		$(".item-bear").hide();
	 	$(".item-ice").hide();
		$(".item-fish").hide();
	 	$(".item-Merman").hide();
		
		
		$(".global-earth_english").hide();
	 	$(".global-earth_title2").hide();
	 	$(".global-earth_icon").hide();
	 	$(".global-earth_intro").hide();
	 	$(".item-sun").hide();
		$(".item-boy").hide();

		
   },  
   // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {//set delay and display animation
		$(".icons").addClass('wow bounce animated').delay(1000).queue(function(){
			$(this).removeClass("wow bounce animated").dequeue();
		});

		
		//星星1
		setTimeout( function() {
			$(".item-star1").removeAttr("style").css({'visibility':"visible"});
			$(".item-star1").addClass('wow bounceIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceIn animated").dequeue();
  			});
		},500);
		
		//星星2
		setTimeout( function() {
			$(".item-star2").removeAttr("style").css({'visibility':"visible"});
			$(".item-star2").addClass('wow bounceIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceIn animated").dequeue();
  			});
		},1000);
		
		//星星3
		setTimeout( function() {
			$(".item-star3").removeAttr("style").css({'visibility':"visible"});
			$(".item-star3").addClass('wow bounceIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceIn animated").dequeue();
  			});
		},1500);
		
		//plante1 黃星球
		setTimeout( function() {
			$(".item-plante1").removeAttr("style").css({'visibility':"visible"});
			$(".item-plante1").addClass('wow rubberBand animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow rubberBand animated").dequeue();
  		});
		},600);
		
		//plante2 綠星球
		setTimeout( function() {
			$(".item-plante2").removeAttr("style").css({'visibility':"visible"});
			$(".item-plante2").addClass('wow rubberBand animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow rubberBand animated").dequeue();
  		});
		},1500);
		
		//plante3 菊星球
		setTimeout( function() {
			$(".item-plante3").removeAttr("style").css({'visibility':"visible"});
			$(".item-plante3").addClass('wow rubberBand animated').delay(1000).queue(function(){
				 $(this).removeClass("wow rubberBand animated").dequeue();
			});
		},2400);
		
		//plante2 紫星球
		setTimeout( function() {
			$(".item-plante4").removeAttr("style").css({'visibility':"visible"});
			$(".item-plante4").addClass('wow rubberBand animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow rubberBand animated").dequeue();
  		});
		},800);
		
		//ET
		setTimeout( function(){
			$(".item-ET").removeAttr("style").css({'visibility':"visible"});
			$(".item-ET").addClass('wow rollIn animated').delay(1000).queue(function(){
				 $(this).removeClass("wow rollIn animated").dequeue();
			});}, 2500);
			
		//火箭
		setTimeout( function(){
			$(".item-rocket").removeAttr("style").css({'visibility':"visible"});
			$(".item-rocket").addClass('wow fadeInUp animated').delay(1000).queue(function(){
				 $(this).removeClass("wow fadeInUp animated").dequeue();
			});}, 1600);
			
			
		//astronomy	
		setTimeout( function(){
		$(".astronomy_english").removeAttr("style").css({'visibility':"visible"});
		$(".astronomy_english").addClass('wow fadeInDown animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInDown animated").dequeue();
  		});
		},500);
		
		//天文	
		setTimeout( function(){
			$(".astronomy_title").removeAttr("style").css({'visibility':"visible"});
			$(".astronomy_title").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInUp animated").dequeue();
  			});
			},1000);
		
		//天文icon	
		setTimeout( function(){
			$(".astronomy_icon").removeAttr("style").css({'visibility':"visible"});
			$(".astronomy_icon").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInRight animated").dequeue();
  			});
			},1500);
		
		//天文介紹文字	
		setTimeout( function(){
			$(".astronomy_intro").removeAttr("style").css({'visibility':"visible"});
			$(".astronomy_intro").addClass('wow fadeIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeIn animated").dequeue();
  			});
			},2000);
			
		//atmosphere	
		setTimeout( function(){
		$(".atmosphere_english").removeAttr("style").css({'visibility':"visible"});
		$(".atmosphere_english").addClass('wow fadeInDown animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInDown animated").dequeue();
  		});
		},500);
		
		//大氣	
		setTimeout( function(){
			$(".atmosphere_title").removeAttr("style").css({'visibility':"visible"});
			$(".atmosphere_title").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInUp animated").dequeue();
  			});
			},1000);
		
		//大氣icon	
		setTimeout( function(){
			$(".atmosphere_icon").removeAttr("style").css({'visibility':"visible"});
			$(".atmosphere_icon").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInRight animated").dequeue();
  			});
			},1500);
		
		//大氣介紹文字	
		setTimeout( function(){
			$(".atmosphere_intro").removeAttr("style").css({'visibility':"visible"});
			$(".atmosphere_intro").addClass('wow fadeIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeIn animated").dequeue();
  			});
			},2000);
			

			
		
		//中間線	
		setTimeout( function(){
			$(".item-line").removeAttr("style").css({'visibility':"visible"});
			$(".item-line").addClass('wow flipInY animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow flipInY animated").dequeue();
  			});
			},2000);
		
		//第一層-雲	
		setTimeout( function(){
			$(".item-cloud").removeAttr("style").css({'visibility':"visible"});
			$(".item-cloud").addClass('wow flipInX animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow flipInX animated").dequeue();
  			});
			},3500);
		
		//第二層-臭氧	
		setTimeout( function(){
			$(".item-O3").removeAttr("style").css({'visibility':"visible"});
			$(".item-O3").addClass('wow flipInX animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow flipInX animated").dequeue();
  			});
			},3000);
			
		//第三層-隕石	
		setTimeout( function(){
			$(".item-comet").removeAttr("style").css({'visibility':"visible"});
			$(".item-comet").addClass('wow flipInX animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow flipInX animated").dequeue();
  			});
			},2500);
		
		//第四層-極光	
		setTimeout( function(){
			$(".item-light").removeAttr("style").css({'visibility':"visible"});
			$(".item-light").addClass('wow fadeIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeIn animated").dequeue();
  			});
			},2000);
			
		//第五層-衛星	
		setTimeout( function(){
			$(".item-satellite").removeAttr("style").css({'visibility':"visible"});
			$(".item-satellite").addClass('wow flipInX animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow flipInX animated").dequeue();
  			});
			},1500);
			
		//geology	
		setTimeout( function(){
		$(".geology_english").removeAttr("style").css({'visibility':"visible"});
		$(".geology_english").addClass('wow fadeInDown animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInDown animated").dequeue();
  		});
		},600);
		
		//地質	
		setTimeout( function(){
			$(".geology_title2").removeAttr("style").css({'visibility':"visible"});
			$(".geology_title2").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInUp animated").dequeue();
  			});
			},1600);
		
		//地質icon	
		setTimeout( function(){
			$(".geology_icon").removeAttr("style").css({'visibility':"visible"});
			$(".geology_icon").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInRight animated").dequeue();
  			});
			},2200);
		
		//地質介紹文字	
		setTimeout( function(){
			$(".geology_intro").removeAttr("style").css({'visibility':"visible"});
			$(".geology_intro").addClass('wow fadeIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeIn animated").dequeue();
  			});
			},3200);

		
		//第1層-baby	
		setTimeout( function(){
			$(".item-baby").removeAttr("style").css({'visibility':"visible"});
			$(".item-baby").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},100);
			
		//第2層-mom	
		setTimeout( function(){
			$(".item-mom").removeAttr("style").css({'visibility':"visible"});
			$(".item-mom").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},500);
			
		//第3層-dad	
		setTimeout( function(){
			$(".item-dad").removeAttr("style").css({'visibility':"visible"});
			$(".item-dad").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},1000);
			
		//第4層-grand	
		setTimeout( function(){
			$(".item-grand").removeAttr("style").css({'visibility':"visible"});
			$(".item-grand").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},1200);
			
		//第5層-grand1	
		setTimeout( function(){
			$(".item-grand1").removeAttr("style").css({'visibility':"visible"});
			$(".item-grand1").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},1300);
			
		//第6層-grand2	
		setTimeout( function(){
			$(".item-grand2").removeAttr("style").css({'visibility':"visible"});
			$(".item-grand2").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},1400);
			
		//第7層-海	
		setTimeout( function(){
			$(".item-sea").removeAttr("style").css({'visibility':"visible"});
			$(".item-sea").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},1500);
			
		//第8層-火山	
		setTimeout( function(){
			$(".item-mountain").removeAttr("style").css({'visibility':"visible"});
			$(".item-mountain").addClass('wow bounceInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceInUp animated").dequeue();
  			});
			},3000);
			
		//ocean	
		setTimeout( function(){
		$(".ocean_english").removeAttr("style").css({'visibility':"visible"});
		$(".ocean_english").addClass('wow fadeInDown animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInDown animated").dequeue();
  		});
		},600);
		
		//海洋title	
		setTimeout( function(){
			$(".ocean_title2").removeAttr("style").css({'visibility':"visible"});
			$(".ocean_title2").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInUp animated").dequeue();
  			});
			},1600);
		
		//海洋icon	
		setTimeout( function(){
			$(".ocean_icon").removeAttr("style").css({'visibility':"visible"});
			$(".ocean_icon").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInRight animated").dequeue();
  			});
			},2200);
		
		//海洋介紹文字	
		setTimeout( function(){
			$(".ocean_intro").removeAttr("style").css({'visibility':"visible"});
			$(".ocean_intro").addClass('wow fadeIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeIn animated").dequeue();
  			});
			},3200);
			
		//冰山	
		setTimeout( function(){
			$(".item-ice").removeAttr("style").css({'visibility':"visible"});
			$(".item-ice").addClass('wow fadeInRightBig animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeInRightBig animated").dequeue();
  			});
			},2200);
			
		//魚	
		setTimeout( function(){
			$(".item-fish").removeAttr("style").css({'visibility':"visible"});
			$(".item-fish").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeInRight animated").dequeue();
  			});
			},1200);
			
		//美人魚	
		setTimeout( function(){
			$(".item-Merman").removeAttr("style").css({'visibility':"visible"});
			$(".item-Merman").addClass('wow fadeInLeft animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeInLeft animated").dequeue();
  			});
			},1800);
			
		//熊	
		setTimeout( function(){
			$(".item-bear").removeAttr("style").css({'visibility':"visible"});
			$(".item-bear").addClass('wow fadeInRightBig animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeInRightBig animated").dequeue();
  			});
			},2300);
			
		//太陽	
		setTimeout( function(){
			$(".item-sun").removeAttr("style").css({'visibility':"visible"});
			$(".item-sun").addClass('wow zoomIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow zoomIn animated").dequeue();
  			});
			},500);
			
		//boy	
		setTimeout( function(){
			$(".item-boy").removeAttr("style").css({'visibility':"visible"});
			$(".item-boy").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeInUp animated").dequeue();
  			});
			},1000);
			
		//global-earth
		setTimeout( function(){
		$(".global-earth_english").removeAttr("style").css({'visibility':"visible"});
		$(".global-earth_english").addClass('wow fadeInDown animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInDown animated").dequeue();
  		});
		},600);
		
		//全球環境title	
		setTimeout( function(){
			$(".global-earth_title2").removeAttr("style").css({'visibility':"visible"});
			$(".global-earth_title2").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInUp animated").dequeue();
  			});
			},1600);
		
		//全球環境icon	
		setTimeout( function(){
			$(".global-earth_icon").removeAttr("style").css({'visibility':"visible"});
			$(".global-earth_icon").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  		 	$(this).removeClass("wow fadeInRight animated").dequeue();
  			});
			},2200);
		
		//全球環境介紹文字	
		setTimeout( function(){
			$(".global-earth_intro").removeAttr("style").css({'visibility':"visible"});
			$(".global-earth_intro").addClass('wow fadeIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow fadeIn animated").dequeue();
  			});
			},3200);


		
			
		
	   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


});
