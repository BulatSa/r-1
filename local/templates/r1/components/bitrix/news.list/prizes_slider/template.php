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
	<div class="trainers__prizes">
		<div class="trainers__prize">
			<?foreach($arResult["ITEMS"] as $key => $arItem):?>
				<?
				$img = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array("width" => 240, "height" => 240), BX_RESIZE_IMAGE_EXACT, true);
				?>

				<img src="<?=$img["src"]?>" alt="<?=$arItem["NAME"]?>">
				<? if ( ((($key +1) %2) == 0) && ($key+1 < count($arResult["ITEMS"])) ): ?>
					</div>
					<div class="trainers__prize">
				<? endif; ?>
			<?endforeach;?>
		</div>
	</div><!-- trainers__prizes -->
<? endif; ?>
