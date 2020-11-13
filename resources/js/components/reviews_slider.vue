<template>
	<section class="review-slider">
		<div class="container">
			<div class="review-slider__flex">
				<div class="review-slider__slider">
					<div class="overflow--review-slider">
						<div class="overflow--review-slider_item" v-for="review in reviews.slice().reverse()">
							<h3 class="overflow--review-slider_item_text overflow--review-slider_item_title">{{review.name}}</h3>
							<p class="overflow--review-slider_item_text overflow--review-slider_item_description">{{review.review}}</p>
						</div>
					</div>
				</div>
				<div class="review-slider__girls">
					<img src="/img/girls.png" alt="" class="review-slider__girls--img">
				</div>
			</div>
		</div>
		<section class="review-form">
			<div class="container">
				<div class="review-form__flex">
					<div class="review-form__girls">
						<img src="/img/neko.png" alt="" class="review-form__girls--img">
					</div>
					<div class="review-form__form">
						<form action="" class="review-form__form--flex">
							<input v-model="name" type="text" placeholder="Ваше имя" class="review-form__input">
							<input v-model="reviewForm" type="text" placeholder="Ваш отзыв" class="review-form__input-rew">
							<div class="review-form__btn">
								<button @click="formPost" class="review-form__btn--style">Пуш!</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>
<script>
	export default
	{
		data()
		{
			return {
				name: '',
				reviewForm: '',
				info: '',
				reviews: []
			}
		},
		methods: {
			getReviews()
			{
				axios.post('/reviews/index/')
				.then(response => {
					this.reviews = response.data;
				})
				.catch(e => {
					console.log(e);
				})
			},
			formPost(e)
			{
				e.preventDefault();
				
				if(!this.name || !this.reviewForm)
				{
					alert('есть пустые поля');
					return;
				}

				axios.post('/reviews/form/', {
					name: this.name,
					review: this.reviewForm
				})
				.then(response => {
					this.reviews.push({'name': this.name, 'review': this.reviewForm});
					this.reviewForm = '';
					this.name = '';
					alert('отзыв оставлен');
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
	.overflow--review-slider_item
	{
		box-sizing: border-box;
		width: 100%;
		border-radius: 10px;
		padding: 10px;
		margin-bottom: 20px;
		-webkit-box-shadow: 0px 0px 15px -4px pink; 
		box-shadow: 0px 0px 15px -4px pink;
	}
	.overflow--review-slider_item_text
	{
		color: #333;
	}
	.overflow--review-slider_item_title
	{
		font-size: 25px;

	}
	.overflow--review-slider_item_description
	{
		font-size: 20px;
	}
	.review-slider__flex
	{
		display: flex;
		justify-content: space-around;
	}
	.review-slider__slider
	{
		padding-top: 70px;
		overflow: hidden;
	}
	.overflow--review-slider
	{
		overflow: auto;
		box-sizing: border-box;
		width: 542px;
		height: 300px;
		border-top:5px solid #333;
		padding: 10px;
		overflow-x: hidden;
	}
	@media (max-width: 1000px)
	{
		.overflow--review-slider
		{
			width: 330px;
		}
	}
	@media (max-width: 772px)
	{
		.review-slider__girls--img
		{
			width: 300px;
		}
		.review-slider__slider
		{
			padding-top: 30px; 

		}
		.overflow--review-slider_item_title
		{
			font-size: 20px;

		}
		.overflow--review-slider_item_description
		{
			font-size: 15px;
		}
	}
	@media (max-width: 633px)
	{
		.overflow--review-slider
		{
			width: 247px;
		}
		.review-slider__slider
		{
			padding-top: 10px; 
			height: 250px;
		}
	}
	@media (max-width: 597px)
	{
		.review-slider__girls--img
		{
			width: 250px;
		}
	}
	@media (max-width:520px)
	{
		.overflow--review-slider
		{
			width: 200px;
		}
		.review-slider__girls--img
		{
			width: 212px;
		}
	}
	@media (max-width: 414px)
	{
		.review-slider__girls--img
		{
			width: 163px;
		}
		.review-slider__slider
		{
			padding-top: 0px; 
			height: 200px;
		}
	}
	@media (max-width: 362px)
	{	
		.review-slider__girls--img
		{
			display: none;
		}
		.review-slider__flex
		{
			padding-bottom: 20px;
		}
		.review-slider__slider
		{
			padding-top: 0;
		}
		.overflow--review-slider
		{
			width: 80%; 
		}
	}
</style>
<style type="text/css">
	.review-form
	{
		background:#333;
	}
	.review-form__girls--img
	{
		margin-bottom: -5px;
	}
	.review-form__input
	{
		width: 452px;
		height: 51px;
		border:3px solid #fff;
		background-color: #333;
		color:#fff;
		font-size: 24px;
		padding: 0px 10px;
		margin-bottom: 35px;
	}
	.review-form__flex
	{
		display: flex;
		justify-content: space-around;
	}
	.review-form__form--flex
	{
		display: flex;
		flex-direction: column;
		padding-top: 118px;
	}
	.review-form__input-rew
	{
		width: 452px;
		height: 80px;
		border:3px solid #fff;
		background-color: #333;
		color:#fff;
		font-size: 24px;
		margin-bottom: 30px;
		padding: 0px 10px;
	}
	.review-form__btn
	{
		text-align: end;
	}
	.review-form__btn--style
	{
		border:3px solid #fff;
		border-radius: 15px;
		background:#333;
		color:#fff;
		font-size: 24px;
		padding: 10px 80px;
		cursor: pointer;
	}
	.review-form__btn--style:hover
	{
		background-color: pink;
	}
	@media (max-width: 1000px)
	{
		.review-form__input, .review-form__input-rew
		{
			width: 370px;
		}
		.review-form__girls--img
		{
			width: 330px;
		}
	}
	@media (max-width: 772px)
	{
		.review-form__input, .review-form__input-rew 
		{
			width: 270px;
		}
	}
	@media (max-width: 633px)
	{
		.review-form__girls--img
		{
			width: 284px;
		}
		.review-form__form--flex
		{
			padding-top: 40px;
		}
	}
	@media (max-width: 597px)
	{
		.review-form__input, .review-form__input-rew
		{
			width: 240px;
		}
		.review-form__girls--img
		{
			width: 225px;
		}
	}
	@media (max-width:520px)
	{
		.review-form__girls--img
		{
			display: none;
		}
		.review-form__flex
		{
			justify-content: center;
			padding-bottom: 20px;
		}
	}
</style>