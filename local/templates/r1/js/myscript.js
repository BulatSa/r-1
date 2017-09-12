var windowWidth, windowHeight;
function windowSize() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
}

$(window).on('ready', function() {
	windowSize();
});; // при загрузке
$(window).on("resize",function(){ // при изменении размеров
	windowSize();
});

$(document).ready(function() {

/***********************
 Прокрутка к секциям BEGIN
 ***********************/
	var topMenuHeight = $('.header-sec').outerHeight();
	$(window).on("resize", function(){
		topMenuHeight = $('.header-sec').outerHeight();
	})
	$('.scrollto').on("click", function () {
		if($(this).closest(".header__nav")) {
			topMenuHeight = $('.header-sec').addClass('.minified').outerHeight();
		}
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - topMenuHeight;
		$('html,body').stop().animate({scrollTop:destination}, 1000);
		return false;
	});
/***********************
 Прокрутка к секциям END
 ***********************/


/**************************************************
  Flickity
***************************************************/
	if ($('.trainers__slider').length) {
		var trainersCount = $('.trainers__slider .trainers__slide').length;
		var trainersSlide = $('.trainers__slider .trainers__slide');
		function setTrainersSlideHeight() {
			var trainersSlideHeight = 0;
			if ($(window).width() > 420) {
				trainersSlide.css('height', 'auto');
				trainersSlide.each(function () {
					if (trainersSlideHeight < $(this).outerHeight()) {
						trainersSlideHeight = $(this).outerHeight();
					}
				});
				trainersSlide.height(trainersSlideHeight);
			} else {
				trainersSlide.css('height', 'auto');
			}
		}

		setTrainersSlideHeight();
		$(window).on('resize', function () {
			setTimeout(function(){
				setTrainersSlideHeight();
			}, 1000);
		});
		
		if ($(window).width() > 1024 && trainersCount < 5) {
			$('.trainers__slider').flickity({
				contain: true,
				imagesLoaded: true,
				groupCells: true,
				lazyLoad: 2,
				adaptiveHeight: true,
				prevNextButtons: false,
				dragThreshold: 20,
				arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
			});
		} else {
			$('.trainers__slider').flickity({
				contain: true,
				imagesLoaded: true,
				groupCells: true,
				lazyLoad: 2,
				adaptiveHeight: true,
				dragThreshold: 20,
				arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
			});
		}
	}

	if ($('.trainers__prizes').length) {
		var prizesCount = $('.trainers__prizes .trainers__prize').length;
		if ($(window).width() > 768 && prizesCount < 6) {
			$('.trainers__prizes').flickity({
				contain: true,
				imagesLoaded: true,
				groupCells: true,
				lazyLoad: 2,
				pageDots: false,
				prevNextButtons: false,
				adaptiveHeight: true,
				dragThreshold: 20,
				arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
			});
		} else {
			$('.trainers__prizes').flickity({
				contain: true,
				imagesLoaded: true,
				groupCells: true,
				lazyLoad: 2,
				pageDots: false,
				adaptiveHeight: true,
				dragThreshold: 20,
				arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
			});
		}
	}

	if ($('.students-wins__slider').length) {
		var studentsWinsSlider = $('.students-wins__slider').flickity({
			contain: true,
			imagesLoaded: true,
			prevNextButtons: false,
			lazyLoad: 2,
			pageDots: false,
			adaptiveHeight: true,
			dragThreshold: 20,
			selectedAttraction: 0.15,
			friction: 0.8
		});

		var studentsWinsFlkty = studentsWinsSlider.data('flickity')
		var $studentWinsPrev = $('.students-wins__nav .nav-prev');
		var $studentWinsNext = $('.students-wins__nav .nav-next');

		studentsWinsSlider.on('select.flickity', function(event) {
			if (studentsWinsFlkty.selectedIndex == studentsWinsFlkty.cells.length - 1) {
				$studentWinsNext.addClass('ended');
			} else {
				$studentWinsNext.removeClass('ended');
			}
			if (studentsWinsFlkty.selectedIndex == 0) {
				$studentWinsPrev.addClass('ended');
			} else {
				$studentWinsPrev.removeClass('ended');
			}
		});

		$studentWinsPrev.on( 'click', function(event) {
			event.preventDefault();
			$('.students-wins__slider').flickity('previous');
		});
		$studentWinsNext.on( 'click', function(event) {
			event.preventDefault();
			$('.students-wins__slider').flickity('next');
		});
	}

	if ($('.rooms__slider').length) {
		var arrRoomsSlider = [];
		$(".rooms__slider").each(function(indx, element){
			arrRoomsSlider.push($(element));
		});

		arrRoomsSlider.forEach(function(el, indx) {
			var thisRoomsSlider = el.flickity({
				contain: true,
				imagesLoaded: true,
				lazyLoad: 2,
				prevNextButtons: false,
				pageDots: false,
				dragThreshold: 20,
				adaptiveHeight: true
			});

			var roomsFlkty = thisRoomsSlider.data('flickity');
			var $roomsPrev = thisRoomsSlider.siblings('.rooms__info').find('.rooms__info-nav .nav-prev');
			var $roomsNext = thisRoomsSlider.siblings('.rooms__info').find('.rooms__info-nav .nav-next');

			thisRoomsSlider.on('select.flickity', function(event) {
				if (roomsFlkty.selectedIndex == roomsFlkty.cells.length - 1) {
					$roomsNext.addClass('ended');
				} else {
					$roomsNext.removeClass('ended');
				}
				if (roomsFlkty.selectedIndex == 0) {
					$roomsPrev.addClass('ended');
				} else {
					$roomsPrev.removeClass('ended');
				}
			});

			$roomsPrev.on( 'click', function(event) {
				event.preventDefault();
				el.flickity('previous');
			});
			$roomsNext.on( 'click', function(event) {
				event.preventDefault();
				el.flickity('next');
			});

		});
	}

	if ($('.partners__items').length) {
		var prizesCount = $('.partners__items .partners__item').length;
		if ($(window).width() > 768 && prizesCount < 9) {
			$('.partners__items').flickity({
				contain: true,
				imagesLoaded: true,
				groupCells: true,
				lazyLoad: 2,
				pageDots: false,
				autoPlay: true,
				dragThreshold: 20,
				prevNextButtons: false,
				arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
			});
		} else {
			$('.partners__items').flickity({
				contain: true,
				imagesLoaded: true,
				groupCells: true,
				lazyLoad: 2,
				pageDots: false,
				autoPlay: true,
				dragThreshold: 20,
				prevNextButtons: false,
				arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
			});
		}
	}
/**************************************************
  End Flickity
***************************************************/


/**************************************************
	Show Visible Elements
***************************************************/
	/**
		 * Проверяет элемент на попадание в видимую часть экрана.
		 * Для попадания достаточно, чтобы верхняя или нижняя границы элемента были видны.
		 */
	function isVisible(elem) {
		var coords = elem.getBoundingClientRect();
		var windowHeight = document.documentElement.clientHeight + 40;

		// верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
		var topVisible = coords.top > 0 && coords.top < windowHeight;
		var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

		return topVisible || bottomVisible;
	}

	function isVisibleLazy(elem) {
		var coords = elem.getBoundingClientRect();
		var windowHeight = document.documentElement.clientHeight * 1.8;

		// верхняя граница elem в пределах видимости 1 экрана ИЛИ нижняя граница видима
		var topVisible = coords.top > 0 && coords.top < windowHeight;
		var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

		return topVisible || bottomVisible;
	}

	function showVisible() {
		var elements = document.querySelectorAll('.fade-top');
		var elementsLazy = document.querySelectorAll('[data-src]');

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			if (isVisible(element)) {
				if (!($(element).hasClass('fade-top--active'))) {
					var thisClass = element.getAttribute('class');
					element.setAttribute( 'class', thisClass + ' fade-top--active');
				}
				
			}
		}

		for (var i = 0; i < elementsLazy.length; i++) {
			var element = elementsLazy[i];
			if (isVisibleLazy(element)) {
				if (!($(element).hasClass('lazy-load--active'))) {
					var thisSrc = element.getAttribute('data-src');
					element.setAttribute( 'src', thisSrc);
				}
			}
		}
	}

	window.onscroll = showVisible;
	showVisible();
/**************************************************
	End Show Visible 
***************************************************/

var topMenu = $('.header-sec');
var topMenuHeight = topMenu.outerHeight();

$(window).on('scroll', function () {
	if ($(window).scrollTop() > topMenuHeight*1.5) {
		topMenu.addClass('minified');
	} else {
		topMenu.removeClass('minified');
	}
})


/**************************************************
 Masked Input
 ***************************************************/
	$("input[type='tel']").mask("+7 (999) 999-99-99", {autoclear: false});
/**************************************************
 Masked Input
 ***************************************************/


/**************************************************
  Rooms Tabs
***************************************************/
	if($('.rooms__all-nav').length) {
		function changeRoom(id, $roomEl) {
			$roomEl.removeClass('active');
			$('#'+id).addClass('active');
		}
		function changeRoomImg(id, $roomEl) {
			$roomEl.removeClass('active');
			$('.rooms__big-img[data-room='+id+']').addClass('active');
		}
		$('.rooms__all-nav a').on('click',  function(event) {
			event.preventDefault();
			var thisRoomId = $(this).data('room');
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			changeRoom(thisRoomId, $('.rooms__item'));
			changeRoomImg(thisRoomId, $('.rooms__big-img'));
		});
	}
/**************************************************
  End Rooms Tabs
***************************************************/


/**************************************************
  FancyBox
***************************************************/
	$('.training__item').on('click', function(){
		$('.training__item').removeClass('active');
		$(this).addClass('active');
	});

	$(".training__item[data-fancybox]").fancybox({
		animationEffect : "zoom",
		lang : 'ru',
		i18n : {
			'ru' : {
					CLOSE       : 'Закрыть',
					NEXT        : 'Дальше',
					PREV        : 'Назад',
					ERROR       : 'Не удается загрузить. <br/> Попробуйте позднее.',
					PLAY_START  : 'Начать слайдшоу',
					PLAY_STOP   : 'Остановить слайдшоу',
					FULL_SCREEN : 'На весь экран',
					THUMBS      : 'Превью'
			}
		},
		beforeLoad: function(instance, current) {
			console.log(instance, current);
			var $thisLinkSrc = $('.training__item.active');
			var $thisItemModal = $('#training-item-more .training__item-more');
			var $thisItemModalInfo = $thisItemModal.find('.training__item-more-info');
			var $thisItemModalForm = $thisItemModal.find('form');

			$thisItemModalInfo.children().remove();
			$thisItemModalInfo.append($thisLinkSrc.children().clone());

			$thisItemModalForm.find('[name=learn-class]').attr('value', $thisItemModalInfo.find('.training__item-title').text());
		},
		beforeClose: function () {
			$('.training__item.active').removeClass('active');
		}
	});
/**************************************************
  End FancyBox
***************************************************/


/**************************************************
	Google Maps
***************************************************/
	// gmaps
	if ($('#googlemap').length) { //если карта существует
		$(document).ready(function(){

			google.maps.event.addDomListener(window, 'load', initMap);

			function initMap() {
				var latLng= {};
				latLng.lat = 55.683998;
				if ($(window).width() < 740) {
					latLng.lng = 37.578508;
				} else {
					latLng.lng = 37.574309;
				}
				var mapOptions = {
					zoom: 16,
					scrollwheel: false,
					mapTypeControl: false,
					zoomControlOptions: {
						position: google.maps.ControlPosition.LEFT_CENTER
					},
					center: new google.maps.LatLng(latLng.lat, latLng.lng)
				};

				var mapElement = document.getElementById('googlemap');

				var map = new google.maps.Map(mapElement, mapOptions);

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(55.683998, 37.578309),
					map: map,
					title: 'г. Москва, ул. Дмитрия Ульянова 30 к2',
					icon: '/local/templates/r1/img/map-bubble.png'
				});
			}
		});
	}
/**************************************************
	End Google Maps
***************************************************/


/**************************************************
	Ajax Mail
***************************************************/

	var form = $(".ajax-form");
	form.on("submit", function(event) {
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function(){
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')){
				if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')){
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		$(this).find("[data-req='true']").on('focus', function(){
			$(this).removeClass('error');
		})

		var form_data = new FormData(this);
		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label');
			form_data.append(input_label__name,input_label__value);
		});

		btn = $(this).find('.btn');

		if (send == true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData:false,
				data: form_data,
				success: (function(result) {
					console.log(result);
					$.fancybox.close();
					$.fancybox.open({src  : '#modal-thanks'});
					setTimeout(function() {$.fancybox.close();},4500);
					form[0].reset();
				})
			});
		}
	});
/**************************************************
	End Ajax Mail
***************************************************/
});