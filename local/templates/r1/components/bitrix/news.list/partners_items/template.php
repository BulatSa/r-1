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
	<div class="partners__items">
		<?foreach($arResult["ITEMS"] as $key => $arItem):?>
			<div class="partners__item">
				<?
				$img = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 150, "height" => 150), BX_RESIZE_IMAGE_EXACT, true);
				?>
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arItem["NAME"]?>">
			</div>
		<?endforeach;?>
	</div><!-- partners__items -->
<? endif; ?>
