<template>
	<footer class="under-menu">
 		<div class="container">
			<div class="menu--flex">
				<a href="/" class="menu__logo">
					<div><img src="/img/underlogo.svg" alt="" class="logo__img"></div>
					<span class="menu__logo--title _under--menu--title">Чистый дом</span>
				</a>
				<ul class="menu__list">
					<li class="menu__list--title"><a href="/reviews/" class="menu__list--title--link _under__link">Отзывы</a></li>
					<li class="menu__list--title"><a href="/orders/" class="menu__list--title--link _under__link">Заказать</a></li>
				</ul>
			</div>
		</div>
 	</footer>
</template>
<style>
	._under--menu--title, ._under__link
	{
		color:#333;
	}
	.under-menu
	{
		border-top: 3px solid #333;
		padding:0 80px;
	}
	.menu__logo img
	{
		margin-top: 3px;
	}
	.menu__logo 
	{
		text-decoration: none;
	}
	@media (max-width: 489px)
	{
		.menu, .under-menu
		{
		    padding: 0 20px;
		}
	}
</style>