
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

$('div').magnificPopup({
  delegate: 'a',
  gallery:{
    enabled:true},
    callbacks: {

    buildControls: function() {
      // re-appends controls inside the main container
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }

  }
  //   arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
 	//   tPrev: 'Previous (Left arrow key)', // title for left button
  //   tNext: 'Next (Right arrow key)', // title for right button
  //   tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
  // }
});