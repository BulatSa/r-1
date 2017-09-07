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
	<?foreach($arResult["ITEMS"] as $arItem):?>
		<?
		$img = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 257, "height" => 164), BX_RESIZE_IMAGE_EXACT, true);
		?>
		<div class="abonements__item row">
			<div class="abonements__item-img grid-4 grid-tab-3 grid-phone-5 grid-phonemini-12 grid-phone-5 grid-phonemini-12">
				<img src="<?=$img["src"]?>" alt="<?=$arItem["NAME"]?>">
			</div>
			<div class="abonements__item-benefits grid-3 grid-tab-4 grid-phone-7 grid-phonemini-12 grid-phone-7 grid-phonemini-12">
				<? foreach ($arItem[PROPERTIES][SOSTAV][VALUE] as $key => $arValue) : ?>
					<div class="abonements__item-benefit">
						<span><?=$arItem[PROPERTIES][SOSTAV][DESCRIPTION][$key]?></span>
						<p><?=$arValue?></p>
					</div>
				<? endforeach; ?>

			</div>
			<div class="abonements__item-info grid-5 grid-phone-12 grid-phone-12">
				<div class="user-content">
					<h3><?=$arItem["NAME"]?></h3>
					<p><?=$arItem["PREVIEW_TEXT"]?></p>
				</div>
				<a href="#free-lesson" class="btn btn--full btn--bordered" data-fancybox>Оставить заявку</a>
			</div>
		</div>
	<?endforeach;?>
<? endif; ?>
