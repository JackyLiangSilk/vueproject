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
			<div class="triangle-container d-flex align-center justify-center" style="bottom: 0">
				<div class="triangle-item pt-left"></div>
				<div class="triangle-item pt-right"></div>
			</div>
		</v-layout>
		
		<v-card flat class="rounded-0">
			<Tabs />
		</v-card>
		<v-card flat class="rounded-0">
			<Slider />
		</v-card>
		<v-card flat class="rounded-0">
			<v-card-text class="headline mx py-16 px-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere mauris eget mi gravida, quis vehicula tortor ornare. Etiam metus lorem, aliquet et nulla at, commodo auctor felis. Donec ac tincidunt lacus. Curabitur malesuada laoreet mi sit amet condimentum. Proin eget libero egestas nibh ultrices accumsan in at est. Nulla in malesuada nulla, eget rhoncus elit. Fusce quis nisl eget ex commodo ultrices. Sed sed sapien a justo rutrum hendrerit non nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eu pharetra velit, sit amet efficitur lectus.
			</v-card-text>
		</v-card>
		<v-layout row wrap style="position: relative;">
			<div class="triangle-container d-flex align-center justify-center" style="top: 0">
				<div class="triangle-item pt-left-rvt"></div>
				<div class="triangle-item pt-right-rvt"></div>
				
			</div>
			<v-flex xs12 sm12>
				<v-parallax :src="bg2"  height="800">
					<v-layout column align-center justify-center>
						<h1 class="text-md-h3 text-sm-h4 text-uppercase font-weight-bold " style="letter-spacing: 4px !important">Thank You</h1>
					</v-layout>
				</v-parallax>
			</v-flex>
		</v-layout>
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
				bg: require('@/assets/cold-night-time.jpg'),
				bg2: require('@/assets/adrian-FrSEEdYr418-unsplash.jpg')
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
	.pt-left-rvt{
		width: 0;
		height: 0;
		border-top: 100px solid #fff;
		border-right: 50vw solid transparent;	
	}
	.pt-right-rvt{
		width: 0;
		height: 0;
		border-top: 100px solid #fff;
		border-left: 50vw solid transparent;
	}
	.triangle-container{
		position: absolute;
		left: 0;
		right: 0;
		z-index: 10;
	}
</style>
