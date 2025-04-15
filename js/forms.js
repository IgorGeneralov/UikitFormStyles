document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.form-control').forEach(function (el) {
		el.classList.remove('form-control');
		el.classList.add('uk-input', 'uk-width-medium', 'uk-margin-right');
	});

	document.querySelectorAll('.controls').forEach(function (el) {
		el.classList.remove('controls');
		el.classList.add('uk-form-controls');
	});

	document.querySelectorAll('.control-label').forEach(function (el) {
		el.classList.remove('control-label');
		el.classList.add('uk-form-label');
	});

	document.querySelectorAll('.form-select').forEach(function (el) {
		el.classList.remove('form-select');
		el.classList.add('uk-select', 'uk-width-medium');
	});

	document.querySelectorAll('.form-check-input').forEach(function (el) {
		el.classList.remove('form-check-input');
		el.classList.add('uk-radio');
	});
	
	document.querySelectorAll('.input-group').forEach(function (el) {
		el.classList.remove('input-group');
		el.classList.add('input-group', 'uk-margin-small-bottom');
	});
	
	document.querySelectorAll('.com-users-profile__core, .com-users-profile__params, .users-profile-custom-actionlogs').forEach(function (el) {
		el.classList.add('uk-fieldset');
		el.classList.forEach(function (className) {
			if (['com-users-profile__core', 'com-users-profile__params', 'users-profile-custom-actionlogs'].includes(className)) {
				el.classList.remove(className);
			}
		});
	});
});