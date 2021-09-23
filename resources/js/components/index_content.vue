<template>
	<section class="section-welcome">
		<div class="container">
			<h1 class="welcome--title">Добро пожаловать в наш сервисный центр</h1>
		</div>
		<div class="section-welcome__img">
			<img src="img/hlgirl.png" class="section-welcome__img--photo">
		</div>
		<section class="info-block">
			<div class="container">
				<div class="info-block__flex">
					<div class="info-block__img">
						<img src="img/maidgrl.png" alt="" class="info-block__img-girl">
					</div>
					<div class="info-block__text">
						<span class="info-block__text--title">Почему мы вам точно нужны?</span>
						<div class="info-block__description">Наши горничные способны не просто очесть весь дом, но и согреть вашу душу!</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>
<style>
	.welcome--title
	{
		box-sizing: border-box;
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		color: #333333;
		text-align: center;
		border-bottom: 5px solid #333;
		margin: 80px;
	}
	.section-welcome__img
	{
		text-align: center;
		margin-bottom: -4px;
	}

	/*section info-block*/

	.info-block
	{
		background: #333333;
	}
	.info-block__flex
	{
		display: flex;
		justify-content: space-around;
	}
	.info-block__text
	{
		padding-top: 100px;
	}
	.info-block__text--title
	{
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 50px;
		color: #FFFFFF;
		border-bottom:5px solid #fff;
	}
	.info-block__description
	{
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 50px;
		color: #FFFFFF;
		padding-top: 40px;
	}
	@media (max-width: 885px)
	{
		.welcome--title
		{
			font-size: 35px;
		}
	}
	@media (max-width: 800px)
	{
		.info-block__text--title, .info-block__description
		{
			font-size: 35px;
		}
		.welcome--title
		{
			font-size: 30px;
		}
	}
	@media (max-width: 752px)
	{
		.welcome--title,.info-block__text--title, .info-block__description,	.more-info__text--title, .more-info__description
		{
			font-size: 20px;
		}
		.info-block__description
		{
			padding-top: 10px;
		}
		.info-block__description
		{
			line-height: 25px;
		}
		.info-block__text--title
		{
			line-height: 30px;
		}
	}
	@media (max-width: 676px)
	{
		.info-block__text--title, .info-block__description
		{
			font-size: 15px;
		}
		.info-block__img-girl
		{
			width: 340px;
		}
		.info-block__description
		{
			padding-top: 10px;
		}
		.info-block__text
		{
			padding-top: 40px;
		}
	}
	@media (max-width: 613px)
	{
		.welcome--title
		{
			font-size: 10px;
		}
		.info-block__img-girl
		{
			width: 260px;
		}
	}
	@media (max-width: 547px)
	{
		.info-block__text--title, .info-block__description, .more-info__text--title, .more-info__description
		{
			font-size: 18px;
		}
		.menu__logo--title
		{
			display: none;
		}
	}
	@media (max-width: 440px)
	{
		.info-block__text
		{
			margin-left: 10px;
			margin-bottom: 20px;
		}
		.info-block__img
		{
			display: none;
		}
		.welcome--title
		{
			margin: 10px;
		}
		.info-block__img-girl
		{
			width: 210px;
		}
	}
	@media (max-width: 400px)
	{
		.info-block__text--title, .info-block__description, .more-info__text--title, .more-info__description
		{
			font-size: 16px;
		}
		.section-welcome__img--photo
		{
			width: 230px;
		}
		.welcome--title
		{
			font-size: 16px;
		}
		.info-block__img-girl
		{
			width: 156px;
		}
		.info-block__text
		{
			padding-top: 44px;
		}
	}
</style>