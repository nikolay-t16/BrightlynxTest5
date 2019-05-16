<template>
	<div>
	<div class="row" v-for="item in users">
		<!-- не понял почему в item попадает элемент вида [{}] вместо {} -->
		Id:{{item[0].id}}; Имя: {{item[0].name}} E-mail: {{item[0].name}}
	</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'

	Vue.use(VueAxios, axios);
	export default {
		name: "List",
		data: function () {
			this.getList();
			return {users:{}}
		},
		methods: {
			getList: function(){
				//Получение и вывод списка пользователей
				axios
					.get('http://localhost:3001/api/user_list')
					.then(response => {this.users = response.data});
			}
		}
	}
</script>

<style scoped>

</style>