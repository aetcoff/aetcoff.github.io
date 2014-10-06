
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
