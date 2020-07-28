<template>
	<div>
		<v-app-bar class="top-nav d-flex primary" 
		app
		dark 
		fixed>
			<v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
			<v-toolbar-title>
				<v-list-item router :to="headerLinks[0].route">
					<img :src="logo" :alt="logoAlt" height="30px" class="d-block" >
				</v-list-item>
			</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer app v-model="menu" class="primary">
			<!-- <div class="header-link" v-for="(link, index) in headerLinks" :key="index">
				<router-link 
				class="pa-4 d-block white--text text-decoration-none text-uppercase font-weight-bold" 
				:to="link.route">{{link.title}}</router-link>
			</div> -->
			<v-list>
				<v-list-item v-for="link in headerLinks" :key="link.route" router :to="link.route" >
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
				logoAlt: 'Welcome to HelloWorld',
				menu: false,
				headerLinks: [
					{
						route: '/',
						title: 'Home'
					},
					{
						route: '/about',
						title: 'About'
					},
					{
						route: '/gallery',
						title: 'Gallery'
					},
					{
						route: '/tabs',
						title: 'Tabs'
					},
					{
						route: '/slider',
						title: 'Slider'
					}
				]
			}
		}
	}
</script>