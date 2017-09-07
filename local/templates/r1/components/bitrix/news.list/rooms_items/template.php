<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<? if (!empty($arResult["ITEMS"])) : ?>

		<?
		$img = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 257, "height" => 164), BX_RESIZE_IMAGE_EXACT, true);
		?>


		<div class="rooms__all-nav">
			<? foreach($arResult["ITEMS"] as $key=>$arValue): ?>
				<a href="#" <?if ($key==0) :?>class="active"<?endif;?>data-room="<?=$arValue["CODE"]?>"><?=$arValue["NAME"]?></a>
			<? endforeach; ?>
		</div>

		<div class="rooms__big-imgs">
			<? foreach($arResult["ITEMS"] as $key=>$arValue): ?>
				<div class="rooms__big-img <?if ($key==0) :?>active<?endif;?>" data-room="<?=$arValue["CODE"]?>">
					<?
						$img = CFile::ResizeImageGet($arValue["PREVIEW_PICTURE"], array("width" => 1192, "height" => 425), BX_RESIZE_IMAGE_EXACT, true);
					?>
					<img src="<?=$img["src"]?>" alt="">
				</div>
			<? endforeach; ?>
		</div>

		<div class="rooms__items">
			<? foreach($arResult["ITEMS"] as $key=>$arItem): ?>

				<div class="rooms__item row <?if ($key==0) :?>active<?endif;?>" id="<?=$arItem["CODE"]?>">
					<div class="rooms__slider grid-7 grid-tabvert-12">
						<? foreach ( $arItem["DISPLAY_PROPERTIES"]["PHOTOS"]["VALUE"] as $item) : ?>
							<?
								$img = CFile::ResizeImageGet($item, array("width" => 730, "height" => 548), BX_RESIZE_IMAGE_EXACT, true);
							?>
							<div class="rooms__slide">
								<img src="<?=$img["src"]?>" alt="">
							</div>
						<? endforeach; ?>
					</div>
					<div class="rooms__info grid-5 grid-tabvert-12">
						<div class="rooms__info-nav nav-wrap">
							<a href="#" class="nav-prev"></a>
							<a href="#" class="nav-next"></a>
						</div>
						<div class="rooms__info-descr user-content">
							<p><?=$arItem["PREVIEW_TEXT"]?></p>
						</div>
						<div class="rooms__info-form">
							<p class="form-title">Запишитесь на пробное занятие сейчас</p>
							<form class="ajax-form">
								<input type="hidden" name="form_subject" value="Пробное занятие" data-label="Пробное занятие">
								<input type="text" class="input-text input-text--half input-text--white" placeholder="Ваш имя" data-label="Имя" name="Имя">
								<input type="tel" class="input-text input-text--half input-text--white" placeholder="Ваш телефон*" data-label="Телефон" data-req="true" name="Телефон">
								<button class="btn btn--full btn--bordered">Записаться на пробное занятие</button>
								<label class="style-checkbox">
									<input type="checkbox" name="user_agree" value="yes" data-label="Пользователь согласился с условиями" data-req="true" checked="">
									<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="#" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
								</label>
							</form>
						</div>
					</div>
				</div>
			<? endforeach; ?>
		</div>


<? endif; ?>
