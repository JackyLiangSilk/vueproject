<template>
	<div class="home pa-0">
		<v-parallax :src="bg" height="1500">
			<v-card color="transparent" background-color="transparent" flat >
				<v-hover v-slot:default="{hover}" close-delay="200">
					<v-card-title style="font-size: 50px" class=" home-title h1 font-weight-bold justify-center white--text" :class="{'accent--text' : hover}">Home page</v-card-title>
				</v-hover>
			</v-card>
		</v-parallax>
	</div>
    
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'Home',
		data(){
			return{
				bg: require('@/assets/cold-night-time.jpg')
			}
		}
	}
</script>
<style>
	.home-title.on-hover{
		color: #E56B6F;
	}
</style>
