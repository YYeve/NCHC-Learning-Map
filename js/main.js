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
		$(".item-plante3").hide();
		$(".item-star1").hide();
		$(".item-star2").hide();
		$(".item-star3").hide();
   },  
   // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {//set delay and display animation
		var width, height;
		width=$(window).width();
		height=$(window).height();
		if(height<1080){
			var eh=height/8;
			eh=eh+"px"
			$(".astronomy").css("padding-top",eh);

			$(".atmosphere").css("width","60%");

			$(".geology_title").css({"position":"inherit","z-index":"1"});
			$(".geology_title table").css({"background-color":"rgba(250,250,200,0.5)"});

			if(height<=900){
				var frame_h=height/10*9;
				var frame_w=frame_h*0.78;
				frame_h=frame_h+"px"
				frame_w=frame_w+"px"
				
				$(".item-frame").css({"height":frame_h,"width":frame_w,"background-size":"100%"});
				$(".item-satellite").css({"width":"99%","background-size":"100%","height":"18%"});
				$(".item-light").css({"width":"99%","background-size":"100%","height":"19%"});
				$(".item-comet").css({"width":"99%","background-size":"100%","height":"19%"});
				$(".item-O3").css({"width":"99%","background-size":"100%","height":"19%"});
				$(".item-cloud").css({"width":"99%","background-size":"100%","height":"23%"});
				$(".item-line").css({"width":"70%","margin-right":"15%","margin-left":"15%"});

				if(height<=800){
					$(".atmosphere").css({"width":"65%"});
					$(".atmosphere_left").css({"width":"50%"});
					$(".item-sun").css({"background-size":"auto 100%"});
					$(".item-boy").css({"background-size":"auto 100%","margin-top":"5%"});
					$(".global-earth_title").css({"padding-top":"22%"});
					
				}
			}
			

			

		}

		if(width<=1200){
			if(width<=1024){
				$(".atmosphere").css("width","80%");
			}
			else{
				$(".atmosphere").css("width","70%");
				
			}
		
		}

		$(".icons").addClass('wow bounce animated').delay(1000).queue(function(){
			$(this).removeClass("wow bounce animated").dequeue();
		});
		
		//星星1
		setTimeout( function() {
			$(".item-star1").show();
			$(".item-star1").addClass('wow bounceIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceIn animated").dequeue();
  			});
		},500);
		
		//星星2
		setTimeout( function() {
			$(".item-star2").show();
			$(".item-star2").addClass('wow bounceIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceIn animated").dequeue();
  			});
		},1000);
		
		//星星3
		setTimeout( function() {
			$(".item-star3").show();
			$(".item-star3").addClass('wow bounceIn animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow bounceIn animated").dequeue();
  			});
		},1500);
		
		//plante1 黃星球
		setTimeout( function() {
			$(".item-plante1").show();
			$(".item-plante1").addClass('wow rubberBand animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow rubberBand animated").dequeue();
  		});
		},600);
		
		//plante2 綠星球
		setTimeout( function() {
			$(".item-plante2").show();
			$(".item-plante2").addClass('wow rubberBand animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow rubberBand animated").dequeue();
  		});
		},1500);
		
		//plante3 菊星球
		setTimeout( function() {
			$(".item-plante3").show();
			$(".item-plante3").addClass('wow rubberBand animated').delay(1000).queue(function(){
				 $(this).removeClass("wow rubberBand animated").dequeue();
			});
		},2400);
		
		//plante2 紫星球
		setTimeout( function() {
			$(".item-plante4").show();
			$(".item-plante4").addClass('wow rubberBand animated').delay(1000).queue(function(){
  			 $(this).removeClass("wow rubberBand animated").dequeue();
  		});
		},800);
		
		//ET
		setTimeout( function(){
			$(".item-ET").show();
			$(".item-ET").addClass('wow rollIn animated').delay(1000).queue(function(){
				 $(this).removeClass("wow rollIn animated").dequeue();
			});}, 1000);
			
		//astronomy	
		setTimeout( function(){
		$(".astronomy_english").show();
		$(".astronomy_english").addClass('wow fadeInDown animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInDown animated").dequeue();
  		});
		},500);
		
		//天文	
		setTimeout( function(){
		$(".astronomy_title").show();
		$(".astronomy_title").addClass('wow fadeInUp animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInUp animated").dequeue();
  		});
		},1000);
		
		//天文icon	
		setTimeout( function(){
		$(".astronomy_icon").show();
		$(".astronomy_icon").addClass('wow fadeInRight animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeInRight animated").dequeue();
  		});
		},1500);
		
		//天文介紹文字	
		setTimeout( function(){
		$(".astronomy_intro").show();
		$(".astronomy_intro").addClass('wow fadeIn animated').delay(1000).queue(function(){
  		 $(this).removeClass("wow fadeIn animated").dequeue();
  		});
		},2000);
			
			
		
	   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


});
