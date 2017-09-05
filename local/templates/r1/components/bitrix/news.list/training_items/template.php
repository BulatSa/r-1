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
			$img = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 413, "height" => 236), BX_RESIZE_IMAGE_EXACT, true);
			?>
			<div class="grid-4 grid-tabvert-6">
				<a class="training__item" href="#training-item-more" data-fancybox>
					<img src="<?=$img["src"]?>" alt="<?=$arItem["NAME"]?>">
					<div class="training__item-info">
						<p class="training__item-title"><?=$arItem["NAME"]?></p>
						<p class="training__item-descr"><?=$arItem["PREVIEW_TEXT"]?></p>
					</div>
				</a>
			</div>
		<?endforeach;?>
<? endif; ?>
