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
					<li v-if="user" @click="logaut" class="menu__list--title">{{user.name}}</li>
					<li  @click="login" class="menu__list--title">login</li>
				</ul>
			</div>
		</div>
	</header>
</template>
<script>
	export default
	{
		data()
		{
			return {
				user: {},
				email: '',
				password: '',
				name: ''
			}
		},
		methods: {
			getUser()
			{
				fetch('/auth/checkUser',
				{
					method: 'POST',
					headers: {
						'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"_token": document.querySelector('meta[name=csrf-token]').content
					})
				})
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.user = data;
				})
				.catch(e => {
					alert('Зарегистрируйтесь')
					console.log(e);
				})
			},
			logaut()
			{
				fetch('/auth/logout',
				{
					method: 'POST',
					headers: {
						'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"_token": document.querySelector('meta[name=csrf-token]').content
					})
				})
				.then(response => {
					this.user = {};
				})
				.catch(e => {
					alert('Возникла ошибка')
					console.log(e);
				})
			},
			login()
			{
				e.preventDefault();
				
				if(!this.email || !this.password)
				{
					alert('Есть пустые поля');
					return
				}

				let patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!patt.test(this.email))
				{
					alert('не корректный email')
					return;
				}

				fetch('/auth/authenticate',
				{
					method: 'POST',
					headers: {
						'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"_token": document.querySelector('meta[name=csrf-token]').content,
						'email': this.email,
						'password': this.password
					})
				})
				.then(response => {
					return response.json();
				})
				.then(response => {
					this.name = '';
					this.email = '';
					this.password = ''
				})
				.catch(e => {
					alert('Возникла ошибка при авторизации')
					console.log(e);
				})
			},
			createUser(e)
			{
				e.preventDefault();
				
				if(!this.name || !this.email || !this.password)
				{
					alert('Есть пустые поля');
					return
				}

				let patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!patt.test(this.email))
				{
					alert('не корректный email')
					return;
				}

				fetch('/auth/createUser',
				{
					method: 'POST',
					headers: {
						'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						'_token': document.querySelector('meta[name=csrf-token]').content,
						'name': this.name,
						'email': this.date,
						'password': this.password
					})
				})
				.then(response => {
					this.name = '';
					this.email = '';
					this.password = ''
					alert('Вы зарегистрировались');
				})
				.catch(e => {
					alert('Возникла ошибка')
					console.log(e);
				})
			},
		},
		beforeMount(){
			this.getUser();
		}
	}
</script>
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
