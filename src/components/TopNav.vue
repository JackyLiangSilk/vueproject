<template>
	<v-app-bar class="top-nav d-flex" 
	app
	dark 
	fixed
	color="#183B59">
		<v-toolbar-title>
			<span class="font-weight-light">Vue</span><span class="text-uppercase font-weight-bold">Project</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<div class="header-link" v-for="(link, index) in headerLinks" :key="index">
			<router-link 
			class="pa-4 d-block white--text text-decoration-none text-uppercase font-weight-bold" 
			:to="link.url">{{link.title}}</router-link>
		</div>
    </v-app-bar>
</template>
<script type="text/javascript">
	export	default{
		name: 'Logo',
		data(){
			return{
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