<template>
	<header class="menu">
		<div class="container">
			<div class="menu--flex">
				<a href="/"  class="menu__logo">
					<div href="/"><img src="/img/logo.svg" alt="" class="logo__img"></div>
					<span class="menu__logo--title">Чистый дом</span>
				</a>
				<ul class="menu__list">
					<li class="menu__list--title"><a href="/reviews/" class="menu__list--title--link">Отзывы</a></li>
					<li class="menu__list--title"><a href="/orders/" class="menu__list--title--link">Заказать</a></li>
				</ul>
			</div>
		</div>
	</header>
</template>
<style>
	*	
	{
		font-family: 'Monaco';
		margin: 0;
		padding: 0;
	}
	a:hover
	{
		color: pink!importent;
	}
	input:focus
	{
		outline:none;
		border: 3px solid pink;
	}
	button
	{
		outline:none;
	}
	.container
	{
		width: 100%;
	}
	/*header*/
	.menu
	{
		background: #333333;
		padding: 0 80px;
		margin-bottom: 80px;
	}
	.menu--flex
	{
		display: flex;
		justify-content: space-between;
	}
	.menu__logo
	{
		display: flex;
		align-items: center;
	}
	.logo__img{margin-right: 20px;}
	.menu__logo--title
	{
		color: #fff;
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		line-height: 50px;
	}
	.menu__list
	{
		list-style-type: none;
		display: flex;
	}
	.menu__list--title
	{
		padding-top: 10px;
		color: #fff;
		margin-right: 25px;
	}
	.menu__list--title--link
	{
		color:#fff;
		text-decoration: none;
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		line-height: 50px;
	}
	.menu__list--title--link:hover
	{
		color:pink;
	}
	@media (max-width: 686px)
	{
		.menu__logo--title
		{
			display: none;
		}
	}
	@media (max-width: 489px)
	{
		.menu
		{
			margin-bottom: 40px;
		}
		.menu,.under-menu 
		{
			padding: 0 20px;
		}
	}
	@media (max-width: 409px)
	{
		.menu__list--title--link
		{
			font-size: 18px;
		}
	}
	@media (max-width: 361px)
	{
		.menu__logo 
		{
			width: 40px;
		}
	}
</style>
