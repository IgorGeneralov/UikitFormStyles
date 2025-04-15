document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.form-control').forEach(function (el) {
		el.classList.remove('form-control');
		el.classList.add('uk-input', 'uk-width-medium');
	});

	document.querySelectorAll('.controls').forEach(function (el) {
		el.classList.remove('controls');
		el.classList.add('uk-form-controls');
	});

	document.querySelectorAll('.control-label').forEach(function (el) {
		el.classList.remove('control-label');
		el.classList.add('uk-form-label');
	});

	document.querySelectorAll('.btn.btn-secondary').forEach(function (el) {
		el.classList.remove('btn', 'btn-secondary');
		el.classList.add('uk-button', 'uk-button-default', 'uk-margin');
	});

	document.querySelectorAll('.form-select').forEach(function (el) {
		el.classList.remove('form-select');
		el.classList.add('uk-select', 'uk-width-medium');
	});

	document.querySelectorAll('.form-check-input').forEach(function (el) {
		el.classList.remove('form-check-input');
		el.classList.add('uk-radio');
	});

	document.querySelectorAll('.joomla-modal.modal.fade').forEach(function (el) {
		el.classList.remove('joomla-modal', 'modal', 'fade');
		el.classList.add('uk-modal');
	});

	document.querySelectorAll('.small.text-muted').forEach(function (el) {
		el.classList.remove('small', 'text-muted');
		el.classList.add('uk-text-meta');
	});
});