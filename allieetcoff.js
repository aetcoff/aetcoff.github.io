
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