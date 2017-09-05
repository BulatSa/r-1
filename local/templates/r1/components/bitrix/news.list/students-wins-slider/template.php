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
	<div class="students-wins__slider">
		<?foreach($arResult["ITEMS"] as $arItem):?>
			<?
			$img_prev = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 310, "height" => 180), BX_RESIZE_IMAGE_EXACT, true);
			$img_detail = CFile::ResizeImageGet($arItem["DETAIL_PICTURE"], array("width" => 475, "height" => 585), BX_RESIZE_IMAGE_EXACT, true);
			?>
			<div class="students-wins__slide">
				<div class="students-wins__slide-info">
					<div class="students-wins__slide-img">
						<img src="<?=$img_prev["src"]?>" alt="<?=$arItem["NAME"]?>">
					</div>
					<div class="students-wins__slide-text user-content">
						<b><?=$arItem["NAME"]?></b>
						<p><?=$arItem["PREVIEW_TEXT"]?></p>
					</div>
				</div>
				<div class="students-wins__slide-after">
					<img src="<?=$img_detail["src"]?>" alt="">
				</div>
			</div>
		<?endforeach;?>
	</div><!-- students-wins__slider -->
<? endif; ?>
