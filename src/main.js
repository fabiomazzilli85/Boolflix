import { createApp } from 'vue'
import App from './App.vue'


// Qui inizia il lavoro di importazione da FontAwesome.
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
	faStar,
	// faStarOfLife,
	// faPlay,
	// faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarReg)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')