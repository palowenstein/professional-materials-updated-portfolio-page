(function($) {
	
	
	"use strict";
	
	
	
	
	/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

	if ( $('.b-pagepiling').length ) {
		$('.b-pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			sectionsColor: ['#131d27', '#131d27', '#131d27', '#131d27', '#131d27', '#131d27'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'left',
				'tooltips': ['Home Section', 'Profile Section', 'Skills Section', 'Portfolio Section', 'Code Vault Section', 'Contact Section']
			},
			afterRender: function(){
				$('#pp-nav').addClass('custom');
			},
			afterLoad: function(anchorLink, index){
				if(index>1){
					$('#pp-nav').removeClass('custom');
				}else{
					$('#pp-nav').addClass('custom');
				}
			},
			onLeave: function(){
				$('.a-progressbar .progress-bar').each(function() {
					if ($('.slide-skills').hasClass('active')) {
						$(this).width($(this).attr('aria-valuenow') + '%');
					} else {
						$(this).width('0');
					}
				});

			}
		});
	}
	
	
	
	
	
		
	

})(window.jQuery);