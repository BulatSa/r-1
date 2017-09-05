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
	<div class="trainers__slider">
		<?foreach($arResult["ITEMS"] as $arItem):?>
			<?
			$img = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 310, "height" => 275), BX_RESIZE_IMAGE_EXACT, true);
			?>
			<div class="trainers__slide">
				<div class="trainers__slide-img">
					<img src="<?=$img["src"]?>" alt="<?=$arItem["NAME"]?>">
				</div>
				<div class="trainers__slide-info">
					<h4><?=$arItem["NAME"]?></h4>
					<span><?=$arItem["PROPERTIES"]["DOLJNOST"]["VALUE"]?></span>
					<div class="user-content"><?=$arItem["PREVIEW_TEXT"]?></div>
				</div>
			</div>
		<?endforeach;?>
	</div><!-- trainers__slider -->
<? endif; ?>
