<?php
defined('B_PROLOG_INCLUDED') || die;

use Bitrix\Main\Page\Asset;

CJSCORE::RegisterExt(
    'custom_user_btn_safe',
    array(
        'js' => '/local/js/custom_user_btn_safe.js',
        'css' => '/local/css/custom_user_btn_safe.css',
        'rel' => array('popup', 'sidepanel'),
    )
);

// Подключение зарегистрированного расширения
CJSCORE::Init('custom_user_btn_safe');

$asset = Asset::getInstance();
$asset->addString('<script>BX.ready( function(){ BX.CustomUserBtn.addSaveBtn(); });</script>');
