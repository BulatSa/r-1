<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Академия смешанных и ударных единоборств России");
?>

<section class="header-sec ">
	<div class="wrapper">
		<div class="header">
			<div class="row row--center">
				<div class="grid-3 grid-tabvert-2 grid-phone-5">
					<div class="header__logo">
						<img src="<?=SITE_TEMPLATE_PATH?>/img/logo-top.png" alt="">
					</div>
				</div>
				<div class="grid-7 grid-tabvert-7 header__nav-wrap">
					<ul class="header__nav">
						<li><a href="#trainers" class="scrollto">Тренеры</a></li>
						<li><a href="#facts" class="scrollto">Преимущества</a></li>
						<li><a href="#keys" class="scrollto">Кейсы</a></li>
						<li><a href="#abonements" class="scrollto">Абонементы</a></li>
						<li><a href="#contact" class="scrollto">Контакты</a></li>
					</ul>
				</div>
				<div class="grid-2 grid-tabvert-3 grid-phone-7">
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
						<h1 class="fade-top">
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => "/includes/main-title.php"
							));?>
						</h1>
						<span class="fade-top">
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => "/includes/main-title-descr.php"
							));?>
						</span>
					</div>
					<div class="head-top__garant fade-top">
						<span>100%</span>
						<p><b>гарантия результата</b>Готовим чемпионов мира по боксу, кикбоксингу, мма при усердной работе.
						</p>
					</div>
					<div class="head-top__form fade-top">
						<p class="form-title form-title--white">Запишитесь на пробное занятие сейчас</p>
						<form class="ajax-form">
							<input type="hidden" name="form_subject" value="Пробное занятие" data-label="Пробное занятие">
							<input type="text" class="input-text input-text--half input-text--white" placeholder="Ваше имя" data-label="Имя" name="Имя">
							<input type="tel" class="input-text input-text--half input-text--white" placeholder="Ваш телефон*" data-label="Телефон" data-req="true" name="Телефон">
							<button class="btn btn--full">Записаться на пробное занятие</button>
							<label class="style-checkbox style-checkbox--white">
								<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked>
								<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="/politics.rtf" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- head-top-sec -->

<section class="trainers-sec def-sec" id="trainers">
	<div class="wrapper">
		<div class="trainers">
			<div class="block-title block-title--center h1 fade-top">
				<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/trainers-title.php"
				));?>
			</div>
			<div class="trainers__facts">
				<div class="trainers__fact fade-top">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-ring.png" alt="">
					<span>
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/trainers-fact-1.php"
						)); ?>
					</span>
				</div>
				<div class="trainers__fact fade-top">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-glove.png" alt="">
					<span>
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/trainers-fact-2.php"
						)); ?>
					</span>
				</div>
				<div class="trainers__fact fade-top">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-box-man.png" alt="">
					<span>
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/trainers-fact-3.php"
						)); ?>
					</span>
				</div>
				<div class="trainers__fact fade-top">
					<img src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-prizes-3.png" alt="">
					<span>
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/trainers-fact-4.php"
						)); ?>
					</span>
				</div>
			</div><!-- trainers__facts -->
			<?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"trainers_slider",
				Array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "Y",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "N",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array("",""),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "1",
					"IBLOCK_TYPE" => "site_info",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "20",
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "Новости",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array("DOLJNOST",""),
					"SET_BROWSER_TITLE" => "N",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "N",
					"SET_META_KEYWORDS" => "N",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "N",
					"SHOW_404" => "N",
					"SORT_BY1" => "SORT",
					"SORT_BY2" => "ACTIVE_FROM",
					"SORT_ORDER1" => "ASC",
					"SORT_ORDER2" => "DESC",
					"STRICT_SECTION_CHECK" => "N"
				)
			);?>
			
			<div class="center-btn trainers__callback fade-top">
				<a href="#free-lesson" class="btn btn--full" data-fancybox>Записаться</a>
			</div>
			<div class="trainers__about">
				<div class="row">
					<div class="grid-6 grid-phonemini-12">
						<div class="trainers__about-info fade-top">
							<div class="user-content">
								<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
									"AREA_FILE_SHOW" => "file",
									"PATH" => "/includes/trainers-about-info-1.php"
								)); ?>
							</div>
						</div>
					</div>
					<div class="grid-6 grid-phonemini-12">
						<div class="trainers__about-info fade-top">
							<div class="user-content">
								<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
									"AREA_FILE_SHOW" => "file",
									"PATH" => "/includes/trainers-about-info-2.php"
								)); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"prizes_slider",
				Array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "Y",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "N",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array("",""),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "2",
					"IBLOCK_TYPE" => "site_info",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "20",
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "Новости",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array("",""),
					"SET_BROWSER_TITLE" => "N",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "N",
					"SET_META_KEYWORDS" => "N",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "N",
					"SHOW_404" => "N",
					"SORT_BY1" => "SORT",
					"SORT_BY2" => "ACTIVE_FROM",
					"SORT_ORDER1" => "ASC",
					"SORT_ORDER2" => "DESC",
					"STRICT_SECTION_CHECK" => "N"
				)
			);?>
		</div>
	</div><!-- wrapper -->
</section><!-- trainers-sec -->

<section class="training-sec def-sec">
	<div class="wrapper">
		<div class="training">
			<div class="training__items">
				<div class="block-title h1 fade-top">
					<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => "/includes/training-items-title-1.php"
					)); ?>
				</div>
				<div class="row">
					<?$APPLICATION->IncludeComponent(
						"bitrix:news.list",
						"training_items",
						Array(
							"ACTIVE_DATE_FORMAT" => "d.m.Y",
							"ADD_SECTIONS_CHAIN" => "Y",
							"AJAX_MODE" => "N",
							"AJAX_OPTION_ADDITIONAL" => "",
							"AJAX_OPTION_HISTORY" => "N",
							"AJAX_OPTION_JUMP" => "N",
							"AJAX_OPTION_STYLE" => "N",
							"CACHE_FILTER" => "N",
							"CACHE_GROUPS" => "Y",
							"CACHE_TIME" => "36000000",
							"CACHE_TYPE" => "A",
							"CHECK_DATES" => "Y",
							"DETAIL_URL" => "",
							"DISPLAY_BOTTOM_PAGER" => "Y",
							"DISPLAY_DATE" => "Y",
							"DISPLAY_NAME" => "Y",
							"DISPLAY_PICTURE" => "Y",
							"DISPLAY_PREVIEW_TEXT" => "Y",
							"DISPLAY_TOP_PAGER" => "N",
							"FIELD_CODE" => array("",""),
							"FILTER_NAME" => "",
							"HIDE_LINK_WHEN_NO_DETAIL" => "N",
							"IBLOCK_ID" => "5",
							"IBLOCK_TYPE" => "site_info",
							"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
							"INCLUDE_SUBSECTIONS" => "Y",
							"MESSAGE_404" => "",
							"NEWS_COUNT" => "20",
							"PAGER_BASE_LINK_ENABLE" => "N",
							"PAGER_DESC_NUMBERING" => "N",
							"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
							"PAGER_SHOW_ALL" => "N",
							"PAGER_SHOW_ALWAYS" => "N",
							"PAGER_TEMPLATE" => ".default",
							"PAGER_TITLE" => "Новости",
							"PARENT_SECTION" => "",
							"PARENT_SECTION_CODE" => "",
							"PREVIEW_TRUNCATE_LEN" => "",
							"PROPERTY_CODE" => array("",""),
							"SET_BROWSER_TITLE" => "N",
							"SET_LAST_MODIFIED" => "N",
							"SET_META_DESCRIPTION" => "N",
							"SET_META_KEYWORDS" => "N",
							"SET_STATUS_404" => "N",
							"SET_TITLE" => "N",
							"SHOW_404" => "N",
							"SORT_BY1" => "SORT",
							"SORT_BY2" => "ACTIVE_FROM",
							"SORT_ORDER1" => "DESC",
							"SORT_ORDER2" => "ASC",
							"STRICT_SECTION_CHECK" => "N"
						)
					);?>
					<div class="grid-4 grid-tabvert-6 grid-phone-12 fade-top">
						<div class="training__item-cons">
							<img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/bg-training-cons.jpg" alt="">
							<div class="training__item-cons-info">
								<p class="training__item-cons-title">Пробное занятие с&nbsp;консультацией тренера</p>
								<p class="training__item-cons-descr">Акция действует только 5 дней</p>
								<a href="#free-lesson" class="btn btn--white btn--full" data-fancybox>Записаться на пробное занятие</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="training__items">
				<div class="block-title h1 fade-top">
					<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => "/includes/training-items-title-2.php"
					)); ?>
				</div>
				<div class="row">
					<?$APPLICATION->IncludeComponent(
						"bitrix:news.list",
						"training_group_items",
						Array(
							"ACTIVE_DATE_FORMAT" => "d.m.Y",
							"ADD_SECTIONS_CHAIN" => "Y",
							"AJAX_MODE" => "N",
							"AJAX_OPTION_ADDITIONAL" => "",
							"AJAX_OPTION_HISTORY" => "N",
							"AJAX_OPTION_JUMP" => "N",
							"AJAX_OPTION_STYLE" => "N",
							"CACHE_FILTER" => "N",
							"CACHE_GROUPS" => "Y",
							"CACHE_TIME" => "36000000",
							"CACHE_TYPE" => "A",
							"CHECK_DATES" => "Y",
							"DETAIL_URL" => "",
							"DISPLAY_BOTTOM_PAGER" => "Y",
							"DISPLAY_DATE" => "Y",
							"DISPLAY_NAME" => "Y",
							"DISPLAY_PICTURE" => "Y",
							"DISPLAY_PREVIEW_TEXT" => "Y",
							"DISPLAY_TOP_PAGER" => "N",
							"FIELD_CODE" => array("",""),
							"FILTER_NAME" => "",
							"HIDE_LINK_WHEN_NO_DETAIL" => "N",
							"IBLOCK_ID" => "6",
							"IBLOCK_TYPE" => "site_info",
							"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
							"INCLUDE_SUBSECTIONS" => "Y",
							"MESSAGE_404" => "",
							"NEWS_COUNT" => "20",
							"PAGER_BASE_LINK_ENABLE" => "N",
							"PAGER_DESC_NUMBERING" => "N",
							"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
							"PAGER_SHOW_ALL" => "N",
							"PAGER_SHOW_ALWAYS" => "N",
							"PAGER_TEMPLATE" => ".default",
							"PAGER_TITLE" => "Новости",
							"PARENT_SECTION" => "",
							"PARENT_SECTION_CODE" => "",
							"PREVIEW_TRUNCATE_LEN" => "",
							"PROPERTY_CODE" => array("",""),
							"SET_BROWSER_TITLE" => "N",
							"SET_LAST_MODIFIED" => "N",
							"SET_META_DESCRIPTION" => "N",
							"SET_META_KEYWORDS" => "N",
							"SET_STATUS_404" => "N",
							"SET_TITLE" => "N",
							"SHOW_404" => "N",
							"SORT_BY1" => "SORT",
							"SORT_BY2" => "ACTIVE_FROM",
							"SORT_ORDER1" => "DESC",
							"SORT_ORDER2" => "ASC",
							"STRICT_SECTION_CHECK" => "N"
						)
					);?>
				</div>
			</div>
			
		</div>
		<div class="training__item-more-wrap" id="training-item-more">
			<div class="training__item-more">
				<div class="training__item-more-info">
					<img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/training-item-kickbox.jpg" alt="">
					<div class="training__item-info">
						<p class="training__item-title">тайский Бокс</p>
						<p class="training__item-descr">Пришла в зал в 12 лет с подружкой, из любопытства. Уже через 2 месяца начала показывать выдающиеся результаты. Победительница всероссийских турниров и победительница Кубка мира по кикбоксингу</p> 
					</div>
				</div>
				<div class="training__item-more-form">
					<p class="form-title">Оставить заявку</p>
					<form class="ajax-form">
						<input type="text" class="input-text" placeholder="Ваше имя" data-label="Имя" name="Имя">
						<input type="tel" class="input-text" placeholder="Ваш телефон*" data-label="Телефон" data-req="true" name="Телефон">
						<input type="hidden" value="Заявка на обучение" name="form_subject">
						<input type="hidden" value="Бокс" name="learn-class" data-label="Занятие">
						<button class="btn btn--full">Отправить</button>
						<label class="style-checkbox">
							<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked>
							<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="/politics.rtf" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
						</label>
					</form>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- training-sec -->

<section class="students-wins-sec" id="keys">
	<div class="wrapper">
		<div class="students-wins def-sec">
			<h2 class="h1 fade-top">
				<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/students-wins-title.php"
				)); ?>
			</h2>
			<?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"students-wins-slider",
				array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "Y",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "N",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array(
						0 => "DETAIL_PICTURE",
						1 => "",
					),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "3",
					"IBLOCK_TYPE" => "site_info",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "20",
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "Новости",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array(
						0 => "NAME",
						1 => "",
					),
					"SET_BROWSER_TITLE" => "N",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "N",
					"SET_META_KEYWORDS" => "N",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "N",
					"SHOW_404" => "N",
					"SORT_BY1" => "SORT",
					"SORT_BY2" => "ACTIVE_FROM",
					"SORT_ORDER1" => "ASC",
					"SORT_ORDER2" => "DESC",
					"STRICT_SECTION_CHECK" => "N",
					"COMPONENT_TEMPLATE" => "students-wins-slider"
				),
				false
			);?>
			<div class="students-wins__nav nav-wrap">
				<a href="#" class="nav-prev"></a>
				<a href="#" class="nav-next"></a>
			</div>
		</div><!-- students-wins -->
	</div><!-- wrapper -->
</section><!-- students-wins-sec -->

<section class="about-facts-sec" id="facts">
	<div class="wrapper">
		<div class="about-facts def-sec">
			<h2 class="block-title block-title--white h1 fade-top">
				<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/about-facts-title.php"
				)); ?>
			</h2>
			<div class="about-facts__items">
				<div class="about-facts__item about-facts__item--big fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-1.jpg')">
					<span>Большое разнообразие занятий с квалифицированным тренерским составом</span>
				</div>
				<div class="about-facts__item about-facts__item--long fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-2.jpg')">
					<span>Персональный тренинг</span>
				</div>
				<div class="about-facts__item fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-3.jpg')">
					<span>Высокий уровень сервиса и комфорта</span>
				</div>
				<div class="about-facts__item fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-4.jpg')">
					<span>Ионная вентиляция</span>
				</div>
				<div class="about-facts__item fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-5.jpg')">
					<span>Собственная парковка</span>
				</div>
				<div class="about-facts__item fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-6.jpg')">
					<span>Персональное VIP–обслуживание</span>
				</div>
				<div class="about-facts__item fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-7.jpg')">
					<span>Детская комната</span>
				</div>
				<div class="about-facts__item fade-top" style="background-image: url('<?=SITE_TEMPLATE_PATH?>/img/about-facts-item-8.jpg')">
					<span>5 минут пешком от метро Академическая</span>
				</div>
			</div>
		</div><!-- about-facts -->
	</div><!-- wrapper -->
</section><!-- about-facts-sec -->

<section class="rooms-sec def-sec-top">
	<div class="wrapper">
		<div class="rooms">
			<h2 class="block-title h1 fade-top">
				<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/rooms-title.php"
				)); ?>
			</h2>
			<?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"rooms_items",
				array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "Y",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "N",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array(
						0 => "DETAIL_PICTURE",
						1 => "",
					),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "8",
					"IBLOCK_TYPE" => "site_info",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "20",
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "Новости",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array(
						0 => "PHOTOS",
						1 => "",
					),
					"SET_BROWSER_TITLE" => "N",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "N",
					"SET_META_KEYWORDS" => "N",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "N",
					"SHOW_404" => "N",
					"SORT_BY1" => "SORT",
					"SORT_BY2" => "ACTIVE_FROM",
					"SORT_ORDER1" => "ASC",
					"SORT_ORDER2" => "DESC",
					"STRICT_SECTION_CHECK" => "N",
					"COMPONENT_TEMPLATE" => "students-wins-slider"
				),
				false
			);?>

		</div>
	</div><!-- wrapper -->
</section><!-- rooms-sec -->

<section class="abonements-sec def-sec-top" id="abonements">
	<div class="wrapper">
		<div class="abonements">
			<h2 class="block-title h1 fade-top">
				<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/abonements-title.php"
				)); ?>
			</h2>

			<div class="abonements__items">
				<?$APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"abonement_items",
					array(
						"ACTIVE_DATE_FORMAT" => "d.m.Y",
						"ADD_SECTIONS_CHAIN" => "Y",
						"AJAX_MODE" => "N",
						"AJAX_OPTION_ADDITIONAL" => "",
						"AJAX_OPTION_HISTORY" => "N",
						"AJAX_OPTION_JUMP" => "N",
						"AJAX_OPTION_STYLE" => "N",
						"CACHE_FILTER" => "N",
						"CACHE_GROUPS" => "Y",
						"CACHE_TIME" => "36000000",
						"CACHE_TYPE" => "A",
						"CHECK_DATES" => "Y",
						"DETAIL_URL" => "",
						"DISPLAY_BOTTOM_PAGER" => "Y",
						"DISPLAY_DATE" => "Y",
						"DISPLAY_NAME" => "Y",
						"DISPLAY_PICTURE" => "Y",
						"DISPLAY_PREVIEW_TEXT" => "Y",
						"DISPLAY_TOP_PAGER" => "N",
						"FIELD_CODE" => array(
							0 => "DETAIL_PICTURE",
							1 => "",
						),
						"FILTER_NAME" => "",
						"HIDE_LINK_WHEN_NO_DETAIL" => "N",
						"IBLOCK_ID" => "7",
						"IBLOCK_TYPE" => "site_info",
						"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
						"INCLUDE_SUBSECTIONS" => "Y",
						"MESSAGE_404" => "",
						"NEWS_COUNT" => "20",
						"PAGER_BASE_LINK_ENABLE" => "N",
						"PAGER_DESC_NUMBERING" => "N",
						"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
						"PAGER_SHOW_ALL" => "N",
						"PAGER_SHOW_ALWAYS" => "N",
						"PAGER_TEMPLATE" => ".default",
						"PAGER_TITLE" => "Новости",
						"PARENT_SECTION" => "",
						"PARENT_SECTION_CODE" => "",
						"PREVIEW_TRUNCATE_LEN" => "",
						"PROPERTY_CODE" => array(
							0 => "NAME",
							1 => "",
						),
						"SET_BROWSER_TITLE" => "N",
						"SET_LAST_MODIFIED" => "N",
						"SET_META_DESCRIPTION" => "N",
						"SET_META_KEYWORDS" => "N",
						"SET_STATUS_404" => "N",
						"SET_TITLE" => "N",
						"SHOW_404" => "N",
						"SORT_BY1" => "SORT",
						"SORT_BY2" => "ACTIVE_FROM",
						"SORT_ORDER1" => "ASC",
						"SORT_ORDER2" => "DESC",
						"STRICT_SECTION_CHECK" => "N",
						"COMPONENT_TEMPLATE" => "students-wins-slider"
					),
					false
				);?>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- abonements-sec -->

<section class="pluses-sec">
	<div class="wrapper">
		<div class="pluses">
			<div class="pluses__item row row--ng row--center pluses__item--trainer fade-top">
				<div class="pluses__item-info grid-5 grid-tab-7 grid-phone-12">
					<div class="user-content user-content--white">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-item-1.php"
						)); ?>
					</div>
					<a href="#free-lesson" class="btn" data-fancybox>Записаться на пробное занятие</a>
				</div>
			</div>
			<div class="pluses__item row row--ng row--center pluses__item--personal fade-top">
				<div class="pluses__item-info grid-5 grid-tab-7 grid-phone-12">
					<div class="user-content user-content--white">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-item-2.php"
						)); ?>
					</div>
					<a href="#free-lesson" class="btn" data-fancybox>Записаться на пробное занятие</a>
				</div>
			</div>
			<div class="pluses__item row row--ng row--center pluses__item--result fade-top">
				<div class="pluses__item-info grid-7 grid-phone-12">
					<div class="user-content user-content--white">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-item-3.php"
						)); ?>
					</div>
				</div>
			</div>
			<div class="pluses__mini-list row fade-top">
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-1.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-mini-item-1.php"
						)); ?>
					</div>
				</div>
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-2.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-mini-item-2.php"
						)); ?>
					</div>
				</div>
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-3.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-mini-item-3.php"
						)); ?>
					</div>
				</div>
				<div class="pluses__mini-item grid-3 grid-tabvert-6 grid-phonemini-12">
					<div class="pluses__mini-item-img">
						<img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/pluses-mini-4.jpg" alt="">
					</div>
					<div class="pluses__mini-item-info">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => "/includes/pluses-mini-item-4.php"
						)); ?>
					</div>
				</div>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- pluses-sec -->

<section class="partners-sec def-sec fade-top">
	<div class="wrapper">
		<div class="partners">
			<div class="block-title h1">
				<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/partners-title.php"
				)); ?>
			</div>
			<?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"partners_items",
				Array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "Y",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "N",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array("",""),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "4",
					"IBLOCK_TYPE" => "site_info",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
					"INCLUDE_SUBSECTIONS" => "Y",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "20",
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "Новости",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array("",""),
					"SET_BROWSER_TITLE" => "N",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "N",
					"SET_META_KEYWORDS" => "N",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "N",
					"SHOW_404" => "N",
					"SORT_BY1" => "SORT",
					"SORT_BY2" => "ACTIVE_FROM",
					"SORT_ORDER1" => "ASC",
					"SORT_ORDER2" => "DESC",
					"STRICT_SECTION_CHECK" => "N"
				)
			);?>
		</div>
	</div><!-- wrapper -->
</section><!-- partners-sec -->

<section class="map-sec fade-top" id="contact">
	<div class="wrapper">
		<div class="map">
			<div class="map__contact">
				<h3>Как к нам добраться</h3>
				<div class="user-content user-content--white">
					<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => "/includes/map-contact-adress.php"
					)); ?>
				</div>
				<a href="tel:84951323661" class="map__phone">+7 (495) 132 36 61</a>
				<div class="map__soc">
					<p>Следите за нами</p>
					<a href="http://instagram.com/akademiya_r_1" target="_blank"><img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-soc-insta.png" alt=""></a>
					<a href="https://www.facebook.com/%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F-%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D1%83%D0%B4%D0%B0%D1%80%D0%BD%D1%8B%D1%85-%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D0%B1%D0%BE%D1%80%D1%81%D1%82%D0%B2-R-ONE-1440008099411286/" target="_blank"><img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-soc-fb.png" alt=""></a>
					<a href="https://vk.com/club149533141" target="_blank"><img src="" data-src="<?=SITE_TEMPLATE_PATH?>/img/icons/icon-soc-vk.png" alt=""></a>
				</div>
			</div>
			<div id="googlemap"></div>
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQfEu_8-pHG14T3d1VrAhof5J4UWKe7PE" async>
			</script>
			
		</div>
	</div><!-- wrapper -->
</section><!-- map-sec -->

<section class="footer-sec">
	<div class="wrapper">
		<div class="footer row">
			<div class="grid-4 grid-phone-3 grid-phonemini-6 footer__info">
				<p>
					<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => "/includes/footer-descr.php"
					)); ?>
				</p>
			</div>
			<div class="grid-2 grid-phone-3 grid-phonemini-6 footer__info">
				<p>
					<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => "/includes/footer-law.php"
				)); ?>
				</p>
			</div>
			<div class="grid-4 grid-phone-3 grid-phonemini-6 footer__info footer__info--right">
				<a href="/politics.rtf" target="_blank" rel="nofollow">Политика конфиденциальности</a>
			</div>
			<div class="grid-2 grid-phone-3 grid-phonemini-6 footer__info footer__info--right">
				<a href="https://penbrain.ru/" target="_blank">Создано в Pen&Brain</a>
			</div>
		</div>
	</div><!-- wrapper -->
</section><!-- footer-sec -->

<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
		h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
		(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
	})(window,document.documentElement,'async-hide','dataLayer',4000,
		{'GTM-THGMLVL':true});</script>

<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-106137018-1', 'auto');
	ga('require', 'GTM-THGMLVL');
	ga('send', 'pageview');

</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>