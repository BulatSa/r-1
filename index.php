<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("1С-Битрикс: Управление сайтом");
?>

<section class="header-sec minified">
	<div class="wrapper">
		<div class="header">
			<div class="row row--center">
				<div class="grid-3 grid-tabvert-1 grid-phone-3">
					<div class="header__logo">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/logo-top.png" alt="">
						<span>Академеия cмешанных и ударных единоборств России</span>
					</div>
				</div>
				<div class="grid-7 grid-tabvert-8 header__nav-wrap">
					<ul class="header__nav">
						<li><a href="#">Тренеры</a></li>
						<li><a href="#">Преимущества</a></li>
						<li><a href="#">Кейсы</a></li>
						<li><a href="#">Абонементы</a></li>
						<li><a href="#">Контакты</a></li>
					</ul>
				</div>
				<div class="grid-2 grid-tabvert-3 grid-phone-9">
					<div class="header__call">
						<a href="tel:84951323661" class="header__call-phone">+7 (495) 132-36-61</a><br>
						<a href="#call-back" class="btn btn--white btn--mini" data-fancybox>ОБРАТНЫЙ ЗВОНОК</a>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- header-sec -->

<section class="head-top-sec">
	<div class="wrapper">
		<div class="head-top">
			<div class="row">
				<div class="grid-8 grid-phone-12">
					<div class="head-top__title">
						<h1>
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => "/includes/main-title.php"
							));?>
						</h1>
						<span>
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => "/includes/main-title-descr.php"
							));?>
						</span>
					</div>
					<div class="head-top__garant">
						<span>100%</span>
						<p><b>гарантия результата</b>Готовим чемпионов мира по боксу, кикбоксингу, мма при усердной работе.
						</p>
					</div>
					<div class="head-top__form">
						<p class="form-title form-title--white">Запишитесь на пробное занятие сейчас</p>
						<form class="ajax-form">
							<input type="text" class="input-text input-text--half input-text--white" placeholder="Ваше имя" data-req="true">
							<input type="text" class="input-text input-text--half input-text--white" placeholder="Ваш телефон" data-req="true">
							<button class="btn btn--full">Записаться на пробное занятие</button>
							<label class="style-checkbox style-checkbox--white">
								<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked>
								<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- head-top-sec -->

<section class="trainers-sec def-sec">
	<div class="wrapper">
		<div class="trainers">
			<div class="block-title block-title--center h1">Профессиональный тренерский состав</div>
			<div class="trainers__facts">
				<div class="trainers__fact">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-ring.png" alt="">
					<span>Тренеры готовят профессиональных бойцов R-1</span>
				</div>
				<div class="trainers__fact">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-glove.png" alt="">
					<span>Обучено более 600 человек</span>
				</div>
				<div class="trainers__fact">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-man.png" alt="">
					<span>Опыт тренерства всех тренеров в сумме: более 100 лет</span>
				</div>
				<div class="trainers__fact">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-ring-2.png" alt="">
					<span>Обучено более 600 человек</span>
				</div>
			</div><!-- trainers__facts -->
			<div class="trainers__slider">
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>РУСЛАН СУНОВАРОВ</h4>
						<span>Тренер по кикбоксингу</span>
						<p>Бронзовый призер Чемпионата Мира. Промоутер профессиональных боев, был наставником таких бойцов, как: Анатолий Носорев (абсолютный Чемпион мира) Александр Липовой (3-кратный Чемпион мира) Мурад Шарифов (победитель Кубка Мира)</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>РУСТАМ СУНОВАРОВ</h4>
						<span>Тренер по кикбоксингу</span>
						<p>Победитель боя R-ONE SELECTION по смешанным ударным единоборствам среди профессионалов. Чемпион Всероссийской спартакиады по кикбоксингу, Серебряный призер Кубка Мира по кикбоксингу</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>МУРАД ШАРИФОВ</h4>
						<span>Тренер по боксу</span>
						<p>Мастер спорта по боксу, 3х кратный Чемпион Южного Федерального округа по боксу, Победитель Кубка Мира по кикбоксингу, Чемпион World Association R-ONE по смешанным ударным единоборствам среди профессионалов</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>ЕВГЕНИЙ ЗЕЛЕНСКИЙ</h4>
						<span>Тренер по боксу</span>
						<p>Мастер спорта по боксу Тренер чемпиона Мира Бату Хасикова (кик-боксинг) Тренер Али Багаутинова (ММА) Тренер-консультант Рахима Чахкиева (профессиональный бокс). Личные дружеские связи с профессиональным промоутером Вадимом Корниловым и многими ...</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>РУСЛАН СУНОВАРОВ</h4>
						<span>Тренер по кикбоксингу</span>
						<p>Бронзовый призер Чемпионата Мира. Промоутер профессиональных боев, был наставником таких бойцов, как: Анатолий Носорев (абсолютный Чемпион мира) Александр Липовой (3-кратный Чемпион мира) Мурад Шарифов (победитель Кубка Мира)</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>РУСТАМ СУНОВАРОВ</h4>
						<span>Тренер по кикбоксингу</span>
						<p>Победитель боя R-ONE SELECTION по смешанным ударным единоборствам среди профессионалов. Чемпион Всероссийской спартакиады по кикбоксингу, Серебряный призер Кубка Мира по кикбоксингу</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>МУРАД ШАРИФОВ</h4>
						<span>Тренер по боксу</span>
						<p>Мастер спорта по боксу, 3х кратный Чемпион Южного Федерального округа по боксу, Победитель Кубка Мира по кикбоксингу, Чемпион World Association R-ONE по смешанным ударным единоборствам среди профессионалов</p>
					</div>
				</div>
				<div class="trainers__slide">
					<div class="trainers__slide-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/trainer-man-1.jpg" alt="">
					</div>
					<div class="trainers__slide-info">
						<h4>ЕВГЕНИЙ ЗЕЛЕНСКИЙ</h4>
						<span>Тренер по боксу</span>
						<p>Мастер спорта по боксу Тренер чемпиона Мира Бату Хасикова (кик-боксинг) Тренер Али Багаутинова (ММА) Тренер-консультант Рахима Чахкиева (профессиональный бокс). Личные дружеские связи с профессиональным промоутером Вадимом Корниловым и многими ...</p>
					</div>
				</div>
			</div><!-- trainers__slider -->
			<div class="center-btn trainers__callback">
				<a href="#free-lesson" class="btn btn--full" data-fancybox>Записаться</a>
			</div>
			<div class="trainers__about">
				<div class="row">
					<div class="grid-6 grid-phonemini-12">
						<div class="trainers__about-info">
							<h3>В нашей команде работают тренеры:</h3>
							<div class="user-content">
								<ul>
									<li>Высоко&shy;квалифицированный тренерский состав:</li>
									<li>Дипломированные специалисты.</li>
									<li>В прошлом спортсмены не ниже мастеров спорта</li>
									<li>Участники боев R-1</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="grid-6 grid-phonemini-12">
						<div class="trainers__about-info">
							<h3>Тренеры имеют такие заслуги как:</h3>
							<div class="user-content">
								<ul>
									<li>Награды от Министерством Российской Федерации по</li>
									<li>физической культуре и спорта</li>
									<li>Награды от правительства.</li>
									<li>Педагогические заслуги</li>
									<li>Благотворительность</li>
									<li>Многократные призеры</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="trainers__prizes">
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
				<div class="trainers__prize">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/trainers-prize-1.jpg" alt="">
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- trainers-sec -->

<section class="training-sec def-sec">
	<div class="wrapper">
		<div class="training">
			<div class="training__items">
				<div class="block-title h1">Виды <br>тренировок</div>
				<div class="row">
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">бокс</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">кикбоксинг</p>
								<p class="training__item-descr">Пришла в зал в 14 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">Грэпплинг</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>

					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">тайский Бокс</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">ММА</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">дзюдо</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>

					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">Кроссфит</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">Персональные <br> тренировки</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6 grid-phone-12">
						<div class="training__item-cons">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/bg-training-cons.jpg" alt="">
							<div class="training__item-cons-info">
								<p class="training__item-cons-title">Пробное занятие с консультацией тренера</p>
								<p class="training__item-cons-descr">Акция действует только 5 дней</p>
								<a href="#free-lesson" class="btn btn--white btn--full" data-fancybox>Записаться на пробное занятие</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="training__items">
				<div class="block-title h1">групповые <br>тренировки</div>
				<div class="row">
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">тайбо</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">стретчинг</p>
								<p class="training__item-descr">Пришла в зал в 14 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">йога</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>

					<div class="grid-4 grid-tabvert-6">
						<a class="training__item" href="#training-item-more" data-fancybox>
							<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
							<div class="training__item-info">
								<p class="training__item-title">пилатес</p>
								<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
							</div>
						</a>
					</div>
				</div>
			</div>
			
		</div>
		<div class="training__item-more-wrap" id="training-item-more">
			<div class="training__item-more">
				<div class="training__item-more-info">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
					<div class="training__item-info">
						<p class="training__item-title">тайский Бокс</p>
						<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
					</div>
				</div>
				<div class="training__item-more-form">
					<p class="form-title">Оставить заявку</p>
					<form class="ajax-form">
						<input type="text" class="input-text" placeholder="Ваше имя" data-req="true">
						<input type="tel" class="input-text" placeholder="Ваш телефон" data-req="true">
						<input type="hidden" value="Заявка на обучение" name="form_subject">
						<input type="hidden" value="Бокс" name="learn-class">
						<button class="btn btn--full">Отправить</button>
						<label class="style-checkbox">
							<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked>
							<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
						</label>
					</form>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- training-sec -->

<section class="students-wins-sec">
	<div class="wrapper">
		<div class="students-wins def-sec">
			<h2 class="h1">Достижения наших учеников</h2>
			<div class="students-wins__slider">
				<div class="students-wins__slide">
					<div class="students-wins__slide-info">
						<div class="students-wins__slide-img">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/students-wins-girl-1.jpg" alt="">
						</div>
						<div class="students-wins__slide-text user-content">
							<b>Александра Сорокина</b>
							<p>Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p>
						</div>
					</div>
					<div class="students-wins__slide-after">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/students-wins-girl-1-after.jpg" alt="">
					</div>
				</div>
				<div class="students-wins__slide">
					<div class="students-wins__slide-info">
						<div class="students-wins__slide-img">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/students-wins-girl-1.jpg" alt="">
						</div>
						<div class="students-wins__slide-text user-content">
							<b>Александра Сорокина</b>
							<p>Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p>
						</div>
					</div>
					<div class="students-wins__slide-after">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/students-wins-girl-1-after.jpg" alt="">
					</div>
				</div>
				<div class="students-wins__slide">
					<div class="students-wins__slide-info">
						<div class="students-wins__slide-img">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/students-wins-girl-1.jpg" alt="">
						</div>
						<div class="students-wins__slide-text user-content">
							<b>Александра Сорокина</b>
							<p>Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p>
						</div>
					</div>
					<div class="students-wins__slide-after">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/students-wins-girl-1-after.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="students-wins__nav nav-wrap">
				<a href="#" class="nav-prev"></a>
				<a href="#" class="nav-next"></a>
			</div>
		</div><!-- students-wins -->
	</div><!-- wrapper -->
</section><!-- students-wins-sec -->

<section class="about-facts-sec">
	<div class="wrapper">
		<div class="about-facts def-sec">
			<h2 class="block-title block-title--white h1">Факты о нас</h2>
			<div class="about-facts__items">
				<div class="about-facts__item about-facts__item--big" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-1.jpg')">
					<span>Большое разнообразие занятий с квалифицированным тренерским составом</span>
				</div>
				<div class="about-facts__item about-facts__item--long" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-2.jpg')">
					<span>Персональный тренинг</span>
				</div>
				<div class="about-facts__item" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-3.jpg')">
					<span>Высокий уровень сервиса и комфорта</span>
				</div>
				<div class="about-facts__item" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-4.jpg')">
					<span>Ионная вентиляция</span>
				</div>
				<div class="about-facts__item" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-5.jpg')">
					<span>Собственная парковка</span>
				</div>
				<div class="about-facts__item" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-6.jpg')">
					<span>VIP предложения</span>
				</div>
				<div class="about-facts__item" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-7.jpg')">
					<span>Детская комната</span>
				</div>
				<div class="about-facts__item" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-8.jpg')">
					<span>Удачное расположение</span>
				</div>
			</div>
		</div><!-- about-facts -->
	</div><!-- wrapper -->
</section><!-- about-facts-sec -->

<section class="rooms-sec def-sec">
	<div class="wrapper">
		<div class="rooms">
			<h2 class="block-title h1">Высоко&shy;эффективные тренировки в профес&shy;сиональных залах</h2>
			<div class="rooms__all-nav">
				<a href="#" class="active" data-room="joga">Зал йоги</a>
				<a href="#" data-room="box">Зал бокса</a>
				<a href="#" data-room="crossfit">Зал кроссфита</a>
			</div>
			<div class="rooms__items">
				<div class="rooms__item row" id="joga">
					<div class="rooms__slider grid-7 grid-tabvert-12">
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
					</div>
					<div class="rooms__info grid-5 grid-tabvert-12">
						<div class="rooms__info-nav nav-wrap">
							<a href="#" class="nav-prev"></a>
							<a href="#" class="nav-next"></a>
						</div>
						<div class="rooms__info-descr user-content">
							<p>Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. lorem</p>
						</div>
						<div class="rooms__info-form">
							<p class="form-title">Запишитесь на пробное занятие сейчас</p>
							<form class="ajax-form">
								<input type="text" class="input-text input-text--half" placeholder="Ваше имя" data-req="true">
								<input type="text" class="input-text input-text--half" placeholder="Ваш телефон" data-req="true">
								<button class="btn btn--full">Записаться на пробное занятие</button>
								<label class="style-checkbox">
									<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked="">
									<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
								</label>
							</form>
						</div>
					</div>
				</div>

				<div class="rooms__item row" id="box">
					<div class="rooms__slider grid-7 grid-tabvert-12">
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
					</div>
					<div class="rooms__info grid-5 grid-tabvert-12">
						<div class="rooms__info-nav nav-wrap">
							<a href="#" class="nav-prev"></a>
							<a href="#" class="nav-next"></a>
						</div>
						<div class="rooms__info-descr user-content">
							<p>Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. lorem</p>
						</div>
						<div class="rooms__info-form">
							<p class="form-title">Запишитесь на пробное занятие сейчас</p>
							<form class="ajax-form">
								<input type="text" class="input-text input-text--half" placeholder="Ваше имя" data-req="true">
								<input type="text" class="input-text input-text--half" placeholder="Ваш телефон" data-req="true">
								<button class="btn btn--full">Записаться на пробное занятие</button>
								<label class="style-checkbox">
									<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked="">
									<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
								</label>
							</form>
						</div>
					</div>
				</div>

				<div class="rooms__item row" id="crossfit">
					<div class="rooms__slider grid-7 grid-tabvert-12">
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
						<div class="rooms__slide">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/rooms-item-1.jpg" alt="">
						</div>
					</div>
					<div class="rooms__info grid-5 grid-tabvert-12">
						<div class="rooms__info-nav nav-wrap">
							<a href="#" class="nav-prev"></a>
							<a href="#" class="nav-next"></a>
						</div>
						<div class="rooms__info-descr user-content">
							<p>Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. lorem</p>
						</div>
						<div class="rooms__info-form">
							<p class="form-title">Запишитесь на пробное занятие сейчас</p>
							<form class="ajax-form">
								<input type="text" class="input-text input-text--half" placeholder="Ваше имя" data-req="true">
								<input type="text" class="input-text input-text--half" placeholder="Ваш телефон" data-req="true">
								<button class="btn btn--full">Записаться на пробное занятие</button>
								<label class="style-checkbox">
									<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked="">
									<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- rooms-sec -->

<section class="abonements-sec">
	<div class="wrapper">
		<div class="abonements">
			<h2 class="block-title h1"><span class="red">Абонементы</span> на занятия в&nbsp;нашем клубе</h2>
			<div class="abonements__items">
				<div class="abonements__item row">
					<div class="abonements__item-img grid-4 grid-tab-3 grid-phone-5 grid-phonemini-12 grid-phone-5 grid-phonemini-12">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/abonement-item-1.png" alt="">
					</div>
					<div class="abonements__item-benefits grid-3 grid-tab-4 grid-phone-7 grid-phonemini-12 grid-phone-7 grid-phonemini-12">
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>месяц</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Посещение всех программ по расписанию</p>
						</div>
						<div class="abonements__item-benefit">
							<span>9</span>
							<p>занятий</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Свободное посещение клуба</p>
						</div>
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>Вводный инструктаж</p>
						</div>
					</div>
					<div class="abonements__item-info grid-5 grid-phone-12 grid-phone-12">
						<div class="user-content">
							<h3>Black (1 месяц)</h3>
							<p>В течение месяца Вы можете посещать все занятия по расписанию или тренироваться в клубе самостоятельно в любое удобное для Вас время. Хороший вариант для людей с непредсказуемым графиком. А также для тех, кто хочет попробовать разные курсы тренировок или приехал в Москву ненадолго.</p>
						</div>
						<a href="#free-lesson" class="btn btn--full btn--bordered" data-fancybox>Оставить заявку</a>
					</div>
				</div>

				<div class="abonements__item row">
					<div class="abonements__item-img grid-4 grid-tab-3 grid-phone-5 grid-phonemini-12">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/abonement-item-1.png" alt="">
					</div>
					<div class="abonements__item-benefits grid-3 grid-tab-4 grid-phone-7 grid-phonemini-12">
						<div class="abonements__item-benefit">
							<span>3</span>
							<p>месяца</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Посещение всех программ по расписанию</p>
						</div>
						<div class="abonements__item-benefit">
							<span>27</span>
							<p>занятий</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Свободное посещение клуба</p>
						</div>
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>Вводный инструктаж</p>
						</div>
					</div>
					<div class="abonements__item-info grid-5 grid-phone-12">
						<div class="user-content">
							<h3>Red (3 месяца)</h3>
							<p>В течение трех месяцев Вы сможете как тренироваться в группах, так и заниматься индивидуально. Хороший вариант для клиентов, которые хотят попробовать несколько программ у различных тренеров или самостоятельно заниматься в клубе в любое удобное время.</p>
						</div>
						<a href="#free-lesson" class="btn btn--full btn--bordered" data-fancybox>Оставить заявку</a>
					</div>
				</div>

				<div class="abonements__item row">
					<div class="abonements__item-img grid-4 grid-tab-3 grid-phone-5 grid-phonemini-12">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/abonement-item-1.png" alt="">
					</div>
					<div class="abonements__item-benefits grid-3 grid-tab-4 grid-phone-7 grid-phonemini-12">
						<div class="abonements__item-benefit">
							<span>6</span>
							<p>месяцев</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Посещение всех программ по расписанию</p>
						</div>
						<div class="abonements__item-benefit">
							<span>54</span>
							<p>занятия</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Свободное посещение клуба</p>
						</div>
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>Вводный инструктаж</p>
						</div>
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>гостевой визит</p>
						</div>
					</div>
					<div class="abonements__item-info grid-5 grid-phone-12">
						<div class="user-content">
							<h3>Silver (Полгода)</h3>
							<p>В течение полугода Вы сможете тренироваться как в группах, так и заниматься индивидуально. Карта подходит для клиентов, которые хотят заниматься у различных тренеров или самостоятельно в любое удобное время.</p>
						</div>
						<a href="#free-lesson" class="btn btn--full btn--bordered" data-fancybox>Оставить заявку</a>
					</div>
				</div>

				<div class="abonements__item row">
					<div class="abonements__item-img grid-4 grid-tab-3 grid-phone-5 grid-phonemini-12">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/abonement-item-1.png" alt="">
					</div>
					<div class="abonements__item-benefits grid-3 grid-tab-4 grid-phone-7 grid-phonemini-12">
						<div class="abonements__item-benefit">
							<span>12</span>
							<p>месяцев</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Посещение всех программ по расписанию</p>
						</div>
						<div class="abonements__item-benefit">
							<span>108</span>
							<p>занятий</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Свободное посещение клуба</p>
						</div>
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>Вводный инструктаж</p>
						</div>
						<div class="abonements__item-benefit">
							<span>3</span>
							<p>гостевых визит</p>
						</div>
						<div class="abonements__item-benefit">
							<span>30</span>
							<p>дней заморозки</p>
						</div>
						<div class="abonements__item-benefit">
							<span>1</span>
							<p>персональная тренировка с тренером</p>
						</div>
					</div>
					<div class="abonements__item-info grid-5 grid-phone-12">
						<div class="user-content">
							<h3>Gold (годовая)</h3>
							<p>В течении года Вы сможете тренироваться, как в группах с тренерами, так и индивидуально. Приобретая карту gold, клиент совершает выгодную покупку,т.к экономит свои денежные средства и получает дополнительные привилегии.</p>
						</div>
						<a href="#free-lesson" class="btn btn--full btn--bordered" data-fancybox>Оставить заявку</a>
					</div>
				</div>

				<div class="abonements__item row">
					<div class="abonements__item-img grid-4 grid-tab-3 grid-phone-5 grid-phonemini-12">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/abonement-item-1.png" alt="">
					</div>
					<div class="abonements__item-benefits grid-3 grid-tab-4 grid-phone-7 grid-phonemini-12">
						<div class="abonements__item-benefit">
							<span>12</span>
							<p>месяцев</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Посещение всех программ по расписанию</p>
						</div>
						<div class="abonements__item-benefit">
							<span>108</span>
							<p>занятий</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Свободное посещение клуба</p>
						</div>
						<div class="abonements__item-benefit">
							<span>100</span>
							<p>персональных тренировок</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Личный шкафчик и полотенце и тапочки</p>
						</div>
						<div class="abonements__item-benefit">
							<span>60</span>
							<p>дней заморозки</p>
						</div>
						<div class="abonements__item-benefit">
							<p>Личное парковочное место</p>
						</div>
					</div>
					<div class="abonements__item-info grid-5 grid-phone-12">
						<div class="user-content">
							<h3>Platinum (вип-карта)</h3>
							<p>Годовая карта, предназначенная для клиентов, которые высоко ценят свое время и хотят заниматься индивидуально. Приобретая карту PLATINUM, клиент получает массу привилегий и может совместно с тренером составить вой индивидуальный график занятий.</p>
						</div>
						<a href="#free-lesson" class="btn btn--full btn--bordered" data-fancybox>Оставить заявку</a>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- abonements-sec -->

<section class="pluses-sec">
	<div class="wrapper">
		<div class="pluses">
			<div class="pluses__item row row--ng row--center pluses__item--trainer">
				<div class="pluses__item-info grid-5 grid-tab-7 grid-phone-12">
					<div class="user-content user-content--white">
						<h3>Пробное занятие с тренером</h3>
						<p>Описание что входит в абонемент, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </p>
					</div>
					<a href="#free-lesson" class="btn" data-fancybox>Записаться на пробное занятие</a>
				</div>
			</div>
			<div class="pluses__item row row--ng row--center pluses__item--personal">
				<div class="pluses__item-info grid-5 grid-tab-7 grid-phone-12">
					<div class="user-content user-content--white">
						<h3>Персональные тренировки</h3>
						<p>Описание что входит в абонемент, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </p>
					</div>
					<a href="#free-lesson" class="btn" data-fancybox>Записаться на пробное занятие</a>
				</div>
			</div>
			<div class="pluses__item row row--ng row--center pluses__item--result">
				<div class="pluses__item-info grid-7 grid-phone-12">
					<div class="user-content user-content--white">
						<h3>100% гарантия достижения результата</h3>
						<p class="big-descr">Ученики нашего клуба получают знания и навыки от профессиональных титуллованных тренеров, а также имею преимущество в виде развития профессиональной карьеры!</p>
						<p>Мы поможем пройти путь от самого начала до получения высоких мировых титулов</p>
					</div>
				</div>
			</div>
			<div class="pluses__mini-list row">
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-1.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<h4>Для чего нужна индивидуальная тренировка</h4>
						<p>Президент Всемирной Федерации смешанных ударных единоборств R-1, промоутер профессиональных боев, Бронзовый призер Кубка Мира по кикбоксингу</p>
					</div>
				</div>
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-2.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<h4>Работа с психо&shy;логическими барьерами</h4>
						<p>Президент Всемирной Федерации смешанных ударных единоборств R-1, промоутер профессиональных боев, Бронзовый призер Кубка Мира по кикбоксингу</p>
					</div>
				</div>
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-3.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<h4>Выезд на соревнования</h4>
						<p>Президент Всемирной Федерации смешанных ударных единоборств R-1, промоутер профессиональных боев, Бронзовый призер Кубка Мира по кикбоксингу</p>
					</div>
				</div>
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-4.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<h4>Для чего нужен профессионально оборудованный зал?</h4>
						<p>Президент Всемирной Федерации смешанных ударных единоборств R-1, промоутер профессиональных боев, Бронзовый призер Кубка Мира по кикбоксингу</p>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- pluses-sec -->

<section class="partners-sec def-sec">
	<div class="wrapper">
		<div class="partners">
			<div class="block-title h1">Партнеры</div>
			<div class="partners__items">
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-1.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-2.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-3.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-4.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-5.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-6.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-1.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-2.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-3.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-4.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-5.png" alt="">
				</div>
				<div class="partners__item">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/partners-item-6.png" alt="">
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- partners-sec -->

<section class="map-sec">
	<div class="wrapper">
		<div class="map">
			<div class="map__contact">
				<h3>Как к нам добраться</h3>
				<div class="user-content user-content--white">
					<h4>Федерация смешанных ударных единоборств России R-1 Россия, г. Москва,</h4>
					<p>ул. Новый Арбат, д.15, этаж 22, пом.1, ком.19</p>
				</div>
				<a href="tel:84951323661" class="map__phone">+7 (495) 132 36 61</a>
				<div class="map__soc">
					<p>Следите за нами</p>
					<a href="#"><img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-soc-twitter.png" alt=""></a>
					<a href="#"><img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-soc-fb.png" alt=""></a>
					<a href="#"><img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-soc-vk.png" alt=""></a>
				</div>
			</div>
			<div id="googlemap"></div>
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQfEu_8-pHG14T3d1VrAhof5J4UWKe7PE" async defer>
			</script>
			
		</div>
	</div><!-- wrapper -->
</section><!-- map-sec -->

<section class="footer-sec">
	<div class="wrapper">
		<div class="footer row">
			<div class="grid-4 grid-phone-3 grid-phonemini-6 footer__info">
				<p>Все права защищены, <br>2017 «Академия смешанных и ударных единоборств R -1»</p>
			</div>
			<div class="grid-2 grid-phone-3 grid-phonemini-6 footer__info">
				<p>ИНН: 90000000 <br>ОГРН 000000000</p>
			</div>
			<div class="grid-4 grid-phone-3 grid-phonemini-6 footer__info footer__info--right">
				<a href="#">Политика конфиденциальности</a>
			</div>
			<div class="grid-2 grid-phone-3 grid-phonemini-6 footer__info footer__info--right">
				<a href="https://penbrain.ru/" target="_blank">Создано в Pen&Brain</a>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- footer-sec -->

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>