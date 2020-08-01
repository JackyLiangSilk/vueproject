<template>
	<div class="home pa-0">
		<v-layout row wrap style="position: relative;">
			<v-flex xs12 sm12>
				<v-parallax :src="bg"  height="1500">
					<v-layout column align-center justify-center>
						<h1 class="text-md-h3 text-sm-h4 text-uppercase font-weight-bold " style="letter-spacing: 4px !important">Hello World</h1>
					</v-layout>
				</v-parallax>
			</v-flex>
			<div class="triangle-container d-flex align-center justify-center">
				<div class="triangle-item pt-left"></div>
				<div class="triangle-item pt-right"></div>
			</div>
		</v-layout>
		
		<v-card flat>
			<Tabs />
		</v-card>
		<v-card flat>
			<Slider />
		</v-card>
	</div>
    
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/views/Slider.vue';
import Tabs from '@/views/Tabs.vue';
	export default {
		name: 'Home',
		components: {
			Slider,
			Tabs
		},
		data(){
			return{
				bg: require('@/assets/cold-night-time.jpg')
			}
		}
	}
</script>
<style>
	.pt-left{
		width: 0;
		height: 0;
		border-bottom: 100px solid #fff;
		border-right: 50vw solid transparent;
	}
	.pt-right {
		width: 0;
		height: 0;
		border-bottom: 100px solid #fff;
		border-left: 50vw solid transparent;
	}
	.triangle-container{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
