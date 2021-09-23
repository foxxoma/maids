<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Document</title>
</head>
<body>
	<div id="app">
		<header-component></header-component>
		<reviews_slider-component></reviews_slider-component>
		<footer-component></footer-component>
	</div>
	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>