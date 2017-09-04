var windowWidth, windowHeight;
function windowSize() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
}

$(window).on('load', function() {
	windowSize();
});; // при загрузке
$(window).on("resize",function(){ // при изменении размеров
	windowSize();
});

$(document).ready(function() {

/**************************************************
	Прокрутка к секциям с Velocity.js
	По data-anchor="id"
***************************************************/
	$('body a[data-anchor]').click(function (event) {
		event.preventDefault();
		elementClick = "#" + $(this).data("anchor");
		destination = $(elementClick).offset().top;
		$('html').velocity( "scroll", { duration: 1000, easing: "easeInOutCubic", offset: destination, mobileHA: true });
		$('body').velocity( "scroll", { duration: 1000, easing: "easeInOutCubic", offset: destination, mobileHA: true });
		return false;
	});
/**************************************************
	End Прокрутка к секциям
***************************************************/


/**************************************************
  Flickity
***************************************************/
	if ($('.trainers__slider').length) {
		$('.trainers__slider').flickity({
			contain: true,
			imagesLoaded: true,
			groupCells: true,
			lazyLoad: true,
			adaptiveHeight: true,
			arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
		});
	}

	if ($('.trainers__prizes').length) {
		$('.trainers__prizes').flickity({
			contain: true,
			imagesLoaded: true,
			groupCells: true,
			lazyLoad: true,
			pageDots: false,
			adaptiveHeight: true,
			arrowShape: "M100 31.05H8.28l27.29-27.3L31.82 0 0 31.82l1.88 1.88L0 35.57 31.82 67.4l3.75-3.75-27.29-27.3H100v-5"
		});
	}

	if ($('.students-wins__slider').length) {
		var studentsWinsSlider = $('.students-wins__slider').flickity({
			contain: true,
			imagesLoaded: true,
			prevNextButtons: false,
			lazyLoad: true,
			pageDots: false,
			adaptiveHeight: true
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
				prevNextButtons: false,
				lazyLoad: true,
				pageDots: false,
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
/**************************************************
  End Flickity
***************************************************/

/**************************************************
  Rooms Tabs
***************************************************/
	if($('.rooms__all-nav').length) {
		function changeRoom(id, $roomEl) {
			$roomEl.removeClass('active');
			$('#'+id).addClass('active');
		}
		$('.rooms__all-nav a').on('click',  function(event) {
			event.preventDefault();
			var thisRoomId = $(this).data('room');
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			changeRoom(thisRoomId, $('.rooms__item'));
		});
	}
/**************************************************
  End Rooms Tabs
***************************************************/


/**************************************************
  FancyBox
***************************************************/
	$(".training__item[data-fancybox]").fancybox({
		animationEffect : "zoom",
		beforeLoad: function(instance, current) {
			var $thisLinkSrc = instance.$lastFocus;
			var $thisItemModal = $('#training-item-more .training__item-more');
			var $thisItemModalInfo = $thisItemModal.find('.training__item-more-info');
			var $thisItemModalForm = $thisItemModal.find('form');

			$thisItemModalInfo.children().remove();
			$thisItemModalInfo.append($thisLinkSrc.children().clone());

			$thisItemModalForm.find('[name=learn-class]').attr('value', $thisItemModalInfo.find('.training__item-title').text());
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
				if (windowWidth < 740) {
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
					title: 'г. Москва, ул. Новый Арбат, д.15, этаж 22, пом.1, ком.19',
					icon: '/img/map-bubble.png'
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
			form_data.append(input_label__name,input_label__value)
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
				data: form_data
			}).success(function(result) {
				console.log(result);
				$.fancybox($('#modal-thanks'), {padding: 0});
				form.find("input[type!='hidden']").val('');
				setTimeout(function() {$.fancybox.close();},4500);
			});
		}
	});
/**************************************************
	End Ajax Mail
***************************************************/
});