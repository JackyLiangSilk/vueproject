<template>
	<div class="tabs pa-4">
		<v-card-title class="text-center justify-center pa-4">
			<h1 class="font-weight-bold display-3">Tabs</h1>
		</v-card-title>
		<v-tabs v-model="tab" background-color="transparent" color="info" grow>
			<v-tab v-for="item in items" :key="item.index">
				{{item.title}}
			</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tab">
			<v-tab-item v-for="item in items" :key="item.index">
				<v-card flat>
					<v-card-text>
						{{item.description}} more info: <a :href="item.source">Wiki</a>
					</v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'Tabs',
		data() {
			return {
				tab: null,
				items: [
					{
						title: 'Appetizers',
						description: "An hors d'oeuvre, appetiser or starter is a small dish served before a meal in European cuisine. Some hors d'oeuvres are served cold, others hot. Hors d'oeuvres may be served at the dinner table as a part of the meal, or they may be served before seating, such as at a reception or cocktail party",
						source: "https://en.wikipedia.org/wiki/Hors_d'oeuvre"
					},
					{
						title: 'Entrees',
						description: "An entrée in modern French table service and that of much of the English-speaking world is a dish served before the main course of a meal. Outside North America, it is generally synonymous with the terms hors d'oeuvre, appetizer or starter.",
						source: "https://en.wikipedia.org/wiki/Entr%C3%A9e"
					},
					{
						title: 'Desserts',
						description: "Dessert. Dessert is a course that concludes a meal. The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, sweet soups, and tarts.",
						source: "https://en.wikipedia.org/wiki/Dessert"
					}
				]
			}
		}
	}
</script>