import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Auth from '../components/Auth';
import List from '../components/List';
import Reg from '../components/Reg';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/auth',
			name: 'Auth',
			component: Auth
		},
		{
			path: '/list',
			name: 'List',
			component: List
		},
		{
			path: '/reg',
			name: 'Reg',
			component: Reg
		},

	]
});
