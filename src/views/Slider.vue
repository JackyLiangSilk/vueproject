<template>
	<v-carousel :show-arrows="true"  >
		<v-carousel-item v-for="item in Gallery" :key="item.index" :src="item.src" transition="fade-transition" reverse-transition="fade-transition"></v-carousel-item>
	</v-carousel>
</template>
<script type="text/javascript">
	export default{
		name: 'Slider',
		data() {
		return{
			Gallery: [
					{
						src: require("@/assets/cold-day-time.jpg"),
					},
					{
						src: require("@/assets/cold-night-time.jpg"),
					},
					{
						src: require("@/assets/warm-day-time.jpg")
					},
					{
						src: require("@/assets/warm-night-time.jpg")
					}
				]
			}
		}
	}
	
</script>