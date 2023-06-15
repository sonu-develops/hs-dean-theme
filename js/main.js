
$(function() {

    /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled');
    
    /* Mobile button with three lines icon */
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');
        
    /* Uncomment for mobile button that says 'MENU' 
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */
    
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });

});
// faq section js start
	var $titleTab = $('.title_tab');
	$('.Accordion_item:eq(0)').find('.title_tab').addClass('active').next().stop().slideDown(300);
	$('.Accordion_item:eq(0)').find('.inner_content').find('p').addClass('show');
	$titleTab.on('click', function(e) {
	e.preventDefault();
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).next().stop().slideUp(500);
			$(this).next().find('p').removeClass('show');
		} else {
			$(this).addClass('active');
			$(this).next().stop().slideDown(500);
			$(this).parent().siblings().children('.title_tab').removeClass('active');
			$(this).parent().siblings().children('.inner_content').slideUp(500);
			$(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
			$(this).next().find('p').addClass('show');
		}
	});
// end js


// slider Module js Start
$('#test-slider').owlCarousel({
    loop:true,
    margin:10,
  autoplay:true,
    autoplayTimeout:3000,
    nav:false,
  dot:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

// end
// 


jQuery(document).ready(function() {                                                                          
  jQuery(tocList).empty();	    
  var prevH2List = jQuery();
  var prevH2Item = jQuery();
  var index = 0;                                                                    
  jQuery(".section.post-body h2,.section.post-body h3").each(function() { 
    //insert an anchor to jump to, from the TOC link.            
    var anchor = "<a id='title_" + index + "'></a>";
    jQuery(this).before(anchor);
    var $class = ''; 
    
    if(jQuery(this).is("h2")){
      $class = 'h2';
    }
    if(jQuery(this).is("h3")){
      $class = 'h3';
    }
    
    var li = "<li class='jumplink-blog-box__item " + $class + "'  ><a id='head_" + index + "' href='#title_" + index + "' href='#" + index + "'>" + jQuery(this).text() + "</a></li>";
    if( jQuery(this).is("h2") ){                                     
      prevH2List = jQuery("<ul></ul>");      
      prevH2Item = jQuery(li);
      prevH2Item.append(prevH2List);      
      prevH2Item.appendTo("#tocList");
    } else {
      
      prevH2List.append(li);
    }
    index++;
  });
});                                                                                                     



    //  menu fixed js start

    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky + 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }


