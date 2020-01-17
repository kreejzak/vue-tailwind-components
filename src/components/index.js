import Vue from 'vue'
import VtcBurger from './Burger.vue'
import VtcNavbar from './Navbar.vue'

const Components = {
    VtcBurger,
    VtcNavbar
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
