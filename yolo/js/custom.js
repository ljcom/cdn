
//============================== RS-SLIDER =========================
jQuery(document).ready(function() {
	jQuery('.bannerV1 .fullscreenbanner').revolution({
		delay: 5000,
		startwidth: 1170,
		startheight: 500,
		fullWidth: "on",
		fullScreen: "off",
		hideCaptionAtLimit: "",
		dottedOverlay: "twoxtwo",
		navigationStyle: "preview4",
		fullScreenOffsetContainer: "",
		hideTimerBar:"on",
	});

	jQuery('.bannerV4 .fullscreenbanner').revolution({
		delay: 5000,
		startwidth: 835,
		startheight: 470,
		fullWidth: "off",
		fullScreen: "off",
		hideCaptionAtLimit: "",
		dottedOverlay: "twoxtwo",
		navigationStyle: "preview4",
		fullScreenOffsetContainer: "",
		hideTimerBar:"on",
		onHoverStop:"on",
	});
});

//============================== OWL-CAROUSEL =========================
jQuery(document).ready(function() {
	"use strict";
	var owl = $('.owl-carousel.featuredProductsSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:2000,
		  autoplayHoverPause:true,
		  nav:true,
		  moveSlides: 4,
		  dots: false,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:3
			  },
			  992:{
			  	items:4
			  }
		  }
	  });
	var owl = $('.owl-carousel.partnersLogoSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:3000,
		  autoplayHoverPause:true,
		  nav:true,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 3,
				  items:3
			  },
			  992:{
			  	slideBy: 5,
				  items:5
			  }
		  }
	  });

	var owl = $('.owl-carousel.featuredCollectionSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  autoplayHoverPause:true,
		  nav:true,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 2,
				  items:2
			  },
			  992:{
			  	slideBy: 2,
			  	items:2
			  }
		  }
	  });

	  var owl = $('.owl-carousel.dealSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 3,
				  items:3
			  },
			  992:{
			  	slideBy: 3,
			  	items:3
			  }
		  }
	  });

	  var owl = $('.owl-carousel.testimonialSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:4000,
		  autoplayHoverPause:true,
		  smartSpeed:1000,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:1
			  },
			  992:{
			  	items:1
			  }
		  }
	  });

	  var owl = $('.owl-carousel.categorySlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  smartSpeed:1000,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:1
			  },
			  992:{
			  	items:1
			  }
		  }
	  });

	var owl = $('.owl-carousel.bannerV3');
	  owl.owlCarousel({
		  loop:true,
		  autoplay:true,
		  autoplayTimeout:4000,
		  autoplayHoverPause:true,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  margin: 15,
		  items: 1,
		  responsive:{
			  320:{
				  items:1,
				  stagePadding: 20
			  },
			  768:{
				  items:1,
				  stagePadding: 100,
				  margin: 50
			  },
			  992:{
			  	items:1,
			  	stagePadding: 250,
			  	 margin: 50
			  }
		  }
	  });

});