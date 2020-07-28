<template>
	<div class="gallery pa-4">
		<div>
			<h2 class="h1 text-center text-uppercase">Flex box</h2>
			<v-container>
				<v-layout row align-stretch>
					<v-flex xs12 md6 lg4 pa-4 v-for="image in Gallery" v-bind:key="image.id">
						<v-card class="pa-4 rounded-0 align-stretch" style="height: 100%">
							<img :src="image.thumbnailUrl" class="d-block mx-auto" />
							<v-card-title class="pa-0">{{image.title}}</v-card-title>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
		

	</div>
</template>
<script type="text/javascript">
	export default{
		name: "Gallery",
		data() {
			return {
				Gallery: [
					{
					"albumId": 1,
					"id": 1,
					"title": "accusamus beatae ad facilis cum similique qui sunt",
					"url": "https://via.placeholder.com/600/92c952",
					"thumbnailUrl": "https://via.placeholder.com/300/92c952"
					},
					{
					"albumId": 1,
					"id": 2,
					"title": "reprehenderit est deserunt velit ipsam",
					"url": "https://via.placeholder.com/600/771796",
					"thumbnailUrl": "https://via.placeholder.com/300/771796"
					},
					{
					"albumId": 1,
					"id": 3,
					"title": "officia porro iure quia iusto qui ipsa ut modi",
					"url": "https://via.placeholder.com/600/24f355",
					"thumbnailUrl": "https://via.placeholder.com/300/24f355"
					},
					{
					"albumId": 1,
					"id": 4,
					"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
					"url": "https://via.placeholder.com/600/d32776",
					"thumbnailUrl": "https://via.placeholder.com/300/d32776"
					},
					{
					"albumId": 1,
					"id": 5,
					"title": "natus nisi omnis corporis facere molestiae rerum in",
					"url": "https://via.placeholder.com/600/f66b97",
					"thumbnailUrl": "https://via.placeholder.com/300/f66b97"
					},
					{
					"albumId": 1,
					"id": 6,
					"title": "accusamus ea aliquid et amet sequi nemo",
					"url": "https://via.placeholder.com/600/56a8c2",
					"thumbnailUrl": "https://via.placeholder.com/300/56a8c2"
					},
					{
					"albumId": 1,
					"id": 7,
					"title": "officia delectus consequatur vero aut veniam explicabo molestias",
					"url": "https://via.placeholder.com/600/b0f7cc",
					"thumbnailUrl": "https://via.placeholder.com/300/b0f7cc"
					},
					{
					"albumId": 1,
					"id": 8,
					"title": "aut porro officiis laborum odit ea laudantium corporis",
					"url": "https://via.placeholder.com/600/54176f",
					"thumbnailUrl": "https://via.placeholder.com/300/54176f"
					},
					{
					"albumId": 1,
					"id": 9,
					"title": "qui eius qui autem sed",
					"url": "https://via.placeholder.com/600/51aa97",
					"thumbnailUrl": "https://via.placeholder.com/300/51aa97"
					},
					{
					"albumId": 1,
					"id": 10,
					"title": "beatae et provident et ut vel",
					"url": "https://via.placeholder.com/600/810b14",
					"thumbnailUrl": "https://via.placeholder.com/300/810b14"
					},
					{
					"albumId": 1,
					"id": 11,
					"title": "nihil at amet non hic quia qui",
					"url": "https://via.placeholder.com/600/1ee8a4",
					"thumbnailUrl": "https://via.placeholder.com/300/1ee8a4"
					},
					{
					"albumId": 1,
					"id": 12,
					"title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
					"url": "https://via.placeholder.com/600/66b7d2",
					"thumbnailUrl": "https://via.placeholder.com/300/66b7d2"
					},
					{
					"albumId": 1,
					"id": 13,
					"title": "repudiandae iusto deleniti rerum",
					"url": "https://via.placeholder.com/600/197d29",
					"thumbnailUrl": "https://via.placeholder.com/300/197d29"
					},
					{
					"albumId": 1,
					"id": 14,
					"title": "est necessitatibus architecto ut laborum",
					"url": "https://via.placeholder.com/600/61a65",
					"thumbnailUrl": "https://via.placeholder.com/300/61a65"
					}
				]
			}
		}
	}
</script>