document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.btn-toolbar').forEach(function (el) {
		el.classList.remove('btn-toolbar');
		el.classList.add('uk-list');
	});

	document.querySelectorAll('.btn.btn-secondary').forEach(function (el) {
		el.classList.remove('btn', 'btn-secondary');
		el.classList.add('uk-button', 'uk-button-default');
	});

	document.querySelectorAll('.btn.btn-primary').forEach(function (el) {
		el.classList.remove('btn', 'btn-primary');
		el.classList.add('uk-button', 'uk-button-primary');
	});

	document.querySelectorAll('.btn.btn-outline-primary.btn-sm').forEach(function (el) {
		el.classList.remove('btn', 'btn-outline-primary', 'btn-sm');
		el.classList.add('uk-button', 'uk-button-default');
	});

	document.querySelectorAll('.btn.btn-danger').forEach(function (el) {
		el.classList.remove('btn', 'btn-danger');
		el.classList.add('uk-button', 'uk-button-danger', 'uk-margin-left');
	});

	document.querySelectorAll('.icon-edit').forEach(function (el) {
		el.classList.remove('icon-edit');
		el.classList.add('uk-icon');
		el.setAttribute('uk-icon', 'file-edit');
	});
	
	document.querySelectorAll('.icon-calendar').forEach(function (el) {
		el.classList.remove('icon-calendar');
		el.classList.add('uk-icon');
		el.setAttribute('uk-icon', 'calendar');
	});
});
