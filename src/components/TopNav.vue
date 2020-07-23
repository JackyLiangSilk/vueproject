<template>
	<div>
		<v-app-bar class="top-nav d-flex" 
		app
		dark 
		fixed
		color="#183B59">
			<v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
			<v-toolbar-title>
				<img :src="logo" width="30px" class="d-block">
			</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer app v-model="menu" color="#183B59">
			<div class="header-link" v-for="(link, index) in headerLinks" :key="index">
				<router-link 
				class="pa-4 d-block white--text text-decoration-none text-uppercase font-weight-bold" 
				:to="link.url">{{link.title}}</router-link>
			</div>
		</v-navigation-drawer>
	</div>
</template>
<script type="text/javascript">
	export	default{
		name: 'Logo',
		data(){
			return{
				logo: require('../assets/logo-hello.png'),
				menu: false,
				headerLinks: [
					{
						url: '/',
						title: 'Home'
					},
					{
						url: '/about',
						title: 'About'
					}
				]
			}
		}
	}
</script>