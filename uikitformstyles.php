<?php

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
			$document = Factory::getDocument();
			$pluginPath = URI::base() . 'plugins/system/uikitformstyles/uikitformstyles.js';
			$document->addScript($pluginPath);
		}
	}
}
