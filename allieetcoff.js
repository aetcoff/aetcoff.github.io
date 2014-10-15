
$('.inline-popups').magnificPopup({
	delegate: 'a',
	removalDelay: 300,
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},

	mainClass: 'mfp-fade',

	midClick: true
});

// FOR RETINA DISPLAY
// $('.image-link').magnificPopup({
//   type: 'image',

//   retina: {
//     ratio: 2 // can also be function that should retun this number
//   }

// });

// FOR GALLERY ITEM

$('.gallery').magnificPopup({
  delegate: 'image',
  gallery:{
    enabled:true},
    callbacks: {

    buildControls: function() {
      // re-appends controls inside the main container
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }

  }
});

$('.project-image').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});