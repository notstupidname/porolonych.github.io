/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				speed: 300
			});

		// Off-Canvas Navigation.

			// Navigation Toggle.
				$(
					'<div id="navToggle">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navToggle, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});
	
	$(".ajax-form").validate({
		rules: {
			name: {
			required: true,
			minlength: 2
			},
			email: {
			required: true,
			email: true
			},
			message: {
			required: true,
			minlength: 5
			}
		},
		messages: {
			name: "Please specify your name",
			email: {
			  required: "We need your email address to contact you",
			  email: "Your email address must be in the format of name@domain.com"
			}
		},
		// errorPlacement: function(error, element) {
		// },
		submitHandler: function(form) {
			$.ajax({
				dataType: "jsonp",
				url: "http://getsimpleform.com/messages/ajax?form_api_token=de9720bd366aac7b944cd1e046e0cda9",
				data: $(".ajax-form").serialize() 
				}).done(function() {
				//callback which can be used to show a thank you message
				//and reset the form
				$(".ajax-form").hide();
				$(".form-thank-you").fadeIn("400");
			});
			return false; //to stop the form from submitting
		}
	});

})(jQuery);