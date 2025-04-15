document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.joomla-modal.modal.fade').forEach(function (el) {
		el.classList.remove('joomla-modal', 'modal', 'fade');
		el.classList.add('uk-modal');
	});
});