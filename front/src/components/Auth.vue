<template>
	<form v-on:submit="onSubmit($event)">
		<input v-model="email" type="text" placeholder="Введите E-mail"/><br/>
		<input v-model="password" type="password" placeholder="Введите пароль"/><br/>
		<br>
		<button type="submit">Войти</button>
		<p>{{message}}</p>
	</form>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import VueAxios from 'vue-axios';
	import md5 from 'js-md5';

	Vue.use(VueAxios, axios);
	export default {
		name: "Auth",
		data: function () {
			return {
				email: "",
				password: "",
				message: ""
			}
		},
		methods: {
			onSubmit: function (event) {
				event.preventDefault();
				this.message = "";

				if (this.email == "")
					this.message += "Веедите E-mail. "
				if (this.password == "")
					this.message += "Веедите пароль. "
				axios
					.post('http://localhost:3001/api/user_auth',{email: this.email, password: md5(this.password)})
					.then(response => {
						if(response.data.result){
							this.message = "Вы успешно вошли!"
						}else if(response.data.error != undefined){
							this.message = response.data.error;
						}
					});
			}
		}


	}
</script>

<style scoped>

</style>