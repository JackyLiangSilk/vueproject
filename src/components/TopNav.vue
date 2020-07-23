<template>
	<div>
		<v-app-bar class="top-nav d-flex" 
		app
		dark 
		fixed
		color="primary">
			<v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
			<v-toolbar-title>
				<img :src="logo" height="30px" class="d-block">
			</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer app v-model="menu" color="primary">
			<!-- <div class="header-link" v-for="(link, index) in headerLinks" :key="index">
				<router-link 
				class="pa-4 d-block white--text text-decoration-none text-uppercase font-weight-bold" 
				:to="link.route">{{link.title}}</router-link>
			</div> -->
			<v-list>
				<v-list-item v-for="link in headerLinks" :key="link.route" router :to="link.route">
					<v-list-item-content>
						<v-list-item-title class="pa-4 d-block white--text text-decoration-none text-uppercase font-weight-bold">{{link.title}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
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
						route: '/',
						title: 'Home'
					},
					{
						route: '/about',
						title: 'About'
					}
				]
			}
		}
	}
</script>