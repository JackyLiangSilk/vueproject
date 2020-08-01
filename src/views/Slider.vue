<template>
	<v-carousel :show-arrows="true" >
		<v-carousel-item v-for="item in Gallery" :key="item.index" :src="item.src" transition="fade-transition" reverse-transition="fade-transition">
			
		</v-carousel-item>
	</v-carousel>
</template>
<script type="text/javascript">
	export default{
		name: 'Slider',
		data() {
		return{
			Gallery: [
					{
						src: require("@/assets/danyu-wang-sR7_ImYvt1Q-unsplash.jpg"),
					},
					{
						src: require("@/assets/dave-hoefler-PDfe7H5GJR0-unsplash.jpg"),
					},
					{
						src: require("@/assets/pine-watt-2Hzmz15wGik-unsplash.jpg")
					},
					{
						src: require("@/assets/sergey-pesterev-JV78PVf3gGI-unsplash.jpg")
					}
				]
			}
		}
	}
	
</script>