document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.small.text-muted').forEach(function (el) {
		el.classList.remove('small', 'text-muted');
		el.classList.add('uk-text-meta', 'uk-margin-small-bottom');
	});

	document.querySelectorAll('.form-control-feedback').forEach(function (el) {
		el.classList.remove('form-control-feedback');
		el.classList.add('uk-text-small', 'uk-text-danger');
	});
});
