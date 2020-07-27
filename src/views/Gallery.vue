<template>
	<div class="gallery">
		<v-container>
			<v-layout row>
				<v-flex xs12 md6 lg4 pa-1 v-for="image in Gallery" v-bind:key="image.position">
					<v-card class="pa-4 rounded-0">
						{{image.title}}
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: "Gallery",
		data() {
			return {
				Gallery: [
					{
					"position": 1,
					"photo_name": "Ash_Grey_Living_Room.jpg",
					"title": "Ash Grey Living Room",
					"walls_color": "Ash Grey"
					},
					{
					"position": 2,
					"photo_name": "Broccoli_Brown_Office.jpg",
					"title": "Broccoli Brown Office",
					"walls_color": "Brocolli Brown"
					},
					{
					"position": 3,
					"photo_name": "Crimson_Red_Brick_and_Bar.jpg",
					"title": "Crimson Red Brick and Bar",
					"walls_color": "Crimson Red"
					},
					{
					"position": 4,
					"photo_name": "Deep_Reddish_Brown_Living_Room.jpg",
					"title": "Deep Reddish Brown Living Room",
					"walls_color": "Deep Reddish Brown"
					},
					{
					"position": 5,
					"photo_name": "Duck_Green_Entryway.jpg",
					"title": "Duck Green Entryway",
					"walls_color": "Duck Green"
					},
					{
					"position": 6,
					"photo_name": "Dutch_Orange_Window_Seat.jpg",
					"title": "Dutch Orange Window Seat",
					"walls_color": "Dutch Orange"
					},
					{
					"position": 7,
					"photo_name": "Emerald_Green_Kitchen.jpg",
					"title": "Emerald Green Kitchen",
					"walls_color": "Emerald Green"
					},
					{
					"position": 8,
					"photo_name": "Imperial_Purple_Sitting_Room.jpg",
					"title": "Imperial Purple Sitting Room",
					"walls_color": "Imperial Purple"
					},
					{
					"position": 9,
					"photo_name": "Lake_Red_Living_Room.jpg",
					"title": "Lake Red Living Room",
					"walls_color": "Lake Red"
					},
					{
					"position": 10,
					"photo_name": "Sap_Green_Dining_Area.jpg",
					"title": "Sap Green Dining Area",
					"walls_color": "Sap Green"
					},
					{
					"position": 11,
					"photo_name": "Scotch_Blue_Living_Room.jpg",
					"title": "Scotch Blue Living Room",
					"walls_color": "Scotch Blue"
					},
					{
					"position": 12,
					"photo_name": "Snow_White_Stairs.jpg",
					"title": "Snow White Stairs",
					"walls_color": "Snow White"
					},
					{
					"position": 13,
					"photo_name": "Ultra_Marine_Blue_Bedroom.jpg",
					"title": "Ultra Marine Blue Bedroom",
					"walls_color": "Ultra Marine Blue"
					},
					{
					"position": 14,
					"photo_name": "Verdigris_Green_Kids_Room.jpg",
					"title": "Verdigris Green Kids Room",
					"walls_color": "Verdigris Green"
					}
				]
			}
		}
	}
</script>