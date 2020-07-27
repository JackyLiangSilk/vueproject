//import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // fontawesome
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'fa',
	},
	theme: {
		light: true,
		themes: {
			light: {
				primary: '#355070',
				secondary: '#6D597A',
				accent: '#EAAC8B',
				error: '#ff2200',
				info: '#44A6A6',
				success: '#E56B6F',
				warning: '#FFC107',
			},
			dark: {
				primary: '#355070',
				secondary: '#6D597A',
				accent: '#EAAC8B',
				error: '#ff2200',
				info: '#44A6A6',
				success: '#E56B6F',
				warning: '#FFC107',
			}
		}
	}
});
/* Color Theme Swatches in Hex */


