<template>
	<section class="more-info">
		<div class="container">
			<div class="more-info__flex">
				<div class="more-info__first">
					<span class="more-info__text--title">{{reviews[0].name}}</span>
					<div class="more-info__description">{{reviews[0].review}}</div>
				</div>
				<div class="more-info__second">
					<span class="more-info__text--title">{{reviews[1].name}}</span>
					<div class="more-info__description">{{reviews[1].review}}</div>
				</div>
			</div>
			<div class="more-info__btn">
				<a href="/reviews/" class="more-info__btn--style">Все отзывы!</a>
			</div>
		</div>
	</section>
</template>
<script>
	export default
	{
		data()
		{
			return {
				reviews: []
			}
		},
		methods: {
			getReviews()
			{
				axios.post('/reviews/index/')
				.then(response => {
					this.reviews = response.data.slice().reverse();

				})
				.catch(e => {
					console.log(e);
				})
			}
		},
		beforeMount(){
			this.getReviews();
		}
	}
</script>
<style>	
	.more-info__first
	{
		width: 45%;
		margin-bottom: 20px;
	}
	.more-info__second
	{
		width: 45%;
	}
	.more-info
	{
		padding: 0 80px;
		margin-bottom: 70px;
	}
	.more-info__flex
	{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-bottom: 120px;
	}
	.more-info__text--title
	{
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 50px;
		color: #000;
		border-bottom:5px solid #000;
	}
	.more-info__description
	{
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 50px;
		color: #000;
	}
	.more-info__btn
	{
		text-align: center;
	}
	.more-info__btn--style
	{
		text-decoration: none;
		background: #fff;
		border:3px solid #000;
		border-radius: 15px;
		padding: 12px 133px;
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 50px;
		color: #000000;
		cursor: pointer;
	}
	.more-info__btn--style:hover
	{
		background-color:#f8f8f8;
	}
	@media (max-width: 1000px)
	{
		.more-info__text--title, .more-info__description
		{
			font-size: 30px;
		}
		.more-info__first
		{
			width: 100%;
		}
		.more-info__second
		{
			width: 100%;
		}
	}
	@media (max-width: 752px)
	{
		.welcome--title,.info-block__text--title, .info-block__description,	.more-info__text--title, .more-info__description
		{
			font-size: 20px;
		}
		.more-info__description
		{
			line-height: 20px;
		}
	
	}
	@media (max-width: 676px)
	{
		.more-info__btn--style
		{
			font-size: 20px;
			padding: 1px 60px;
		}
	}
	@media (max-width: 547px)
	{
		.more-info
		{
			padding: 0 20px;
		}
	}
	@media (max-width: 440px)
	{
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
		.more-info__flex
		{
			flex-direction: column;
			align-items: center;
			margin-bottom: 30px;
		}
	}
</style>