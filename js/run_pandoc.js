$(document).ready(function() {
	$('#get_pdf').on('click', function() {
		$.ajax({
			url : '/layouts/partials/run_pandoc.php'
		}).done(function(data) {
			console.log(data);
		});
	});
});
