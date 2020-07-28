<template>
	<div class="home pa-0">
		<v-parallax :src="bg" height="1500">
			<v-card color="transparent" background-color="transparent" flat >
				<v-card-title style="font-size: 50px" class="h1 font-weight-bold justify-center white--text">Home page</v-card-title>
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
