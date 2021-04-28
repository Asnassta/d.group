
function step()
{
	$('.active .block-step__item').each(function(index) {
		$(this).delay(400*index).fadeIn(1000);
	});
}

function showePowerBlocks()
{
	$('.active .block-power__decor').each(function(index) {
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
		$('.fullpage').toggleClass("active");
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

	/*Slider-clients*/
	$('.slider-trust_clients').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		prevArrow: $('.slider-clients__arrow-prev'),
		nextArrow: $('.slider-clients__arrow-next'),

		responsive: [
	{
		breakpoint: 1025,
			settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-clients__arrow-prev'),
			nextArrow: $('.slider-clients__arrow-next'),
		}
	},
	{
		breakpoint: 769,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-clients__arrow-prev'),
			nextArrow: $('.slider-clients__arrow-next'),
		}
	},
	{
		breakpoint: 547,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-clients__arrow-prev'),
			nextArrow: $('.slider-clients__arrow-next'),
		}
	},
	{
		breakpoint: 376,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-clients__arrow-prev'),
			nextArrow: $('.slider-clients__arrow-next'),
		}
	},
  ]
		});

	/*Slider-partners*/
	$('.slider-trust_partners').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		prevArrow: $('.slider-partners__arrow-prev'),
		nextArrow: $('.slider-partners__arrow-next'),

		responsive: [
	{
		breakpoint: 1025,
			settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-partners__arrow-prev'),
			nextArrow: $('.slider-partners__arrow-next'),
		}
	},
	{
		breakpoint: 769,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-partners__arrow-prev'),
			nextArrow: $('.slider-partners__arrow-next'),
		}
	},
	{
		breakpoint: 547,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-partners__arrow-prev'),
			nextArrow: $('.slider-partners__arrow-next'),
		}
	},
	{
		breakpoint: 376,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-partners__arrow-prev'),
			nextArrow: $('.slider-partners__arrow-next'),
		}
	},
  ]
		});

	/*Slider-certificates*/
	$('.slider-certificates').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $('.slider-certificates__arrow-prev'),
		nextArrow: $('.slider-certificates__arrow-next'),

		responsive: [
	{
		breakpoint: 1025,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-certificates__arrow-prev'),
			nextArrow: $('.slider-certificates__arrow-next'),
		}
	},
	{
		breakpoint: 769,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-certificates__arrow-prev'),
			nextArrow: $('.slider-certificates__arrow-next'),
		}
	},
	{
		breakpoint: 415,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			prevArrow: $('.slider-certificates__arrow-prev'),
			nextArrow: $('.slider-certificates__arrow-next'),
		}
	}

  ]
		});

	

});


window.addEventListener('scroll', function() {
	if(pageYOffset > 500){
		$(".block-create__letter").addClass('animated bounceIn')
	}

	if(pageYOffset > 1200){
		$(".block-create__letter").removeClass('animated bounceIn')
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

	/*showePowerBlocks*/
	$(window).on('load', function () {
		setTimeout( function() { showePowerBlocks(); } ,500)
		if($(window).width() <= 1024) { 
		$('.block-power__decor').each(function(index) {
			$(this).delay(400*index).fadeIn(1000);
		});
		}
	});

	$(window).scroll(function() {
		showePowerBlocks();
	});
