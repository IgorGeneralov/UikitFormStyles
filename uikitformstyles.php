<?php

;/**
; * @version    1.0
; * @package    UIKIT form styles
; * @author     Igor Generalov https://generalov.net
; * @copyright  Copyright (c) 2005 - 2025 Igor Generalov. All rights reserved..
; * @license    GNU/GPL: https://gnu.org/licenses/gpl.html
; */

defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\Factory;
use Joomla\CMS\URI\URI;

class PlgSystemUikitFormStyles extends CMSPlugin
{
	public function onBeforeCompileHead()
	{
		$app = Factory::getApplication();

		if ($app->isClient('site')) {
			$params = $this->params;
			$document = Factory::getDocument();
			$baseUri = URI::base() . 'plugins/system/uikitformstyles/js/';

			$scriptMap = [
				'enable_forms' => 'forms.js',
				'enable_buttons' => 'buttons.js',
				'enable_modal' => 'modal.js',
				'enable_text' => 'text.js',
			];

			foreach ($scriptMap as $paramName => $scriptFile) {
				if ($params->get($paramName, 1) && file_exists(JPATH_ROOT . '/plugins/system/uikitformstyles/js/' . $scriptFile)) {
					$document->addScript($baseUri . $scriptFile);
				}
			}
		}
	}
}
