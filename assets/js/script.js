
function step()
{
	$('.active .block-step__item').each(function(index) {
		$(this).delay(400*index).fadeIn(1000);
	});
}


$(document).ready(function() {
	/*Dropdown Menu*/
		let $dropdown = $('.nav__dropdown')
			$dropdownMenu = $('.nav__dropdown__menu')
			$arrowDropdown = $('.nav__dropdown__arrow')

		$dropdown.on('click', function() {
			$dropdownMenu.toggleClass('show')
			$dropdown.toggleClass('active')
			$arrowDropdown.toggleClass('active')
		});

	/*Menu nav toggle*/
	$("#burger").on("click", function() {

		$(this).toggleClass("active");
		$(".header__menu_mobile").toggleClass("show");
		$('body').toggleClass("hidden");
	});

	/*Fixed Header*/
	let $header = $("#header")
		$introH = $("#intro").innerHeight()
		$scrollOffset = $(window).scrollTop();


	checkScroll($scrollOffset);

	$(window).on("scroll", function() {
		$scrollOffset = $(this).scrollTop();

		checkScroll($scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if( $scrollOffset >= $introH ) {
			$header.addClass("fixed");
		} else {
			$header.removeClass("fixed");
		}
	};

	/*Fullpage*/
	if($(window).width() > 1024) { 
		new fullpage('#fullpage', { 
			scrollBar: true, 
			navigation: false, 
			navigationPosition: 'right', 
			v2compatible: false, 
			lazyLoading: true,
	});
	}

});


	/*Step*/
	$(window).on('load', function () {
		setTimeout( function() { step(); } ,500)
		if($(window).width() <= 1024) { 
		$('.block-step__item').each(function(index) {
			$(this).delay(400*index).fadeIn(1000);
		});
		}
	});

	$(window).scroll(function() {
		step();
	});

