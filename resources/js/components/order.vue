<template>
	<section class="order-form">
		<div class="container">
			<div class="order-form-flex">
				<div class="order-form__from">
					<div class="review-form__form">
						<form action="" class="review-form__form--flex">
							<input v-model="name" type="text" placeholder="Тут имя" class="order-form__input">
							<input v-model="phone" type="tel" placeholder="А тут номер телефона"  class="order-form__input-rew" name="tel" pattern=""> 
							<div class="order--second-flex">
								<input v-model="date" type="date" value="" class="order-date">
								<input v-model="time" type="number" id="order-number" name="tentacles" min="1" max="8" class="order-number" value="1">
							</div>
							<span class="order-text">Цена веселья<span class="order-price">{{price}}</span></span>
							<div class="order-form__btn">
								<button @click="formPost" class="order-form__btn--style">ЖМИ МЕНЯ!
								</button>
							</div>
						</form>
					</div>
				</div>
				<div class="order-form__img">
					<img src="/img/clgirl.png" alt="" class="order-form__img-cl">
				</div>
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
				name: '',
				phone: '',
				date: '',
				time: 1,
				constPrice: 300,
				price: 300
			}
		},
		watch:
		{
			time()
			{
				if(this.time <= 0)
					this.time = 1;
				this.priceUpdate();
			}
		},
		methods: {
			formPost(e)
			{
				e.preventDefault();
				
				if(!this.name || !this.phone || !this.date || !this.time)
				{
					alert('Есть пустые поля');
					return
				}
				let patt = new RegExp('8[0-9]{10}');
				if(!patt.test(this.phone))
				{
					alert('не корректный номер телефона')
					return;
				}
				axios.post('/orders/form/', {
					name: this.name,
					phone: Number(this.phone),
					date: this.date,
					time: this.time,
					price: this.price
				})
				.then(response => {
					this.name = '';
					this.phone = '';
					this.date = '';
					this.time = 1;
					this.price = this.constPrice;
					alert('Заказ принят');
				})
				.catch(e => {
					console.log(e);
				})
			},
			priceUpdate()
			{
				this.price = this.time * this.constPrice;
			}
		}
	}
</script>
<style type="text/css">
	.order-price
	{
		color: pink;
	}
	.order-form__img-cl
	{
		margin-bottom: -5px;
	}
	.order-form-flex
	{
		display: flex;
		justify-content: space-around;
	}
	.review-form
	{
		background:#333;
	}
	.order-form__input
	{
		width: 452px;
		height: 51px;
		border:3px solid #333;
		background-color: #fff;
		color:#333;
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
	.order-form__input-rew
	{
		width: 452px;
		height: 51px;
		border:3px solid #333;
		background-color: #fff;
		color:#333;
		font-size: 24px;
		margin-bottom: 30px;
		padding: 0px 10px;
	}
	.order-form__btn
	{
		text-align: end;
	}
	.order-form__btn--style
	{
		border:3px solid #333;
		border-radius: 15px;
		background:#fff;
		color:#333;
		font-size: 24px;
		padding: 10px 80px;
		cursor: pointer;
	}
	.order-form__btn--style:hover
	{
		background-color: pink;
		border-color: #fff;
		color: #fff;
	}
	.order--second-flex
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.order-date
	{
		border: 3px solid;
	    width: 47px;
	    height: 74px;
	    padding-right: 29px;
	    border-radius: 100px;
	    margin-bottom: 20px;
	}
	.order-number
	{
		width: 50px;
	    margin-bottom: 20px;
	    height: 30px;
	    border: 3px solid #333;
	}
	.order-text
	{
		font-size: 24px;
		text-align:end;
		margin-bottom: 20px;
	}
	.order-price
	{
		margin-left: 20px;
	}
	@media (max-width: 952px)
	{
		.digrama__info-line, .order-form__img-cl
		{
			width: 400px;
		}
	}
	@media (max-width: 880px)
	{
		 .order-form__img-cl
		 {
		 	display: none;
		 }
		 .review-form__form--flex
		 {
		 	padding-bottom: 30px;
		 }
	}
	@media (max-width: 506px)
	{
		.review-form__form--flex
		{
			padding-top: 0;
		}
	}
	@media (max-width: 489px)
	{
		.order-form__input, .order-form__input-rew
		{
			width: 331px;
		}
	}
	@media (max-width: 409px)
	{
		.digrama__info-line, .order-form__img-cl
		{
			width: 300px;
		}
	}
	@media (max-width: 361px)
	{
		.order-form__input, .order-form__input-rew
		{
			width: 293px;
		}
	}
</style>