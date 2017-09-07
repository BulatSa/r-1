<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title><?$APPLICATION->ShowTitle()?></title>

	<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
	<link rel="manifest" href="/favicons/manifest.json">
	<link rel="shortcut icon" href="/favicons/favicon.ico">
	<meta name="msapplication-config" content="/favicons/browserconfig.xml">
	<meta name="theme-color" content="#000000">

	<!-- og -->
	<meta property="og:title" content="<?$APPLICATION->ShowTitle()?>">
	<meta property="og:description" content='<?=$APPLICATION->ShowProperty("description");?>'/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content='<?=$APPLICATION->ShowProperty("ogimage",SITE_TEMPLATE_PATH."/img/og.jpg");?>' />
	<!-- og -->

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?
		use Bitrix\Main\Page\Asset;
		Asset::getInstance()->addString('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
		Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/assets.js");
		Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/myscript.js");
		Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/css/style.css");
	?>

	<? $APPLICATION->ShowHead();?>
</head>
<body>
<div id="panel"><?$APPLICATION->ShowPanel();?></div>