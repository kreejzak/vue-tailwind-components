import Vue from 'vue'
import Burger from './Burger.vue'
import Navbar from './Navbar.vue'

const Components = {
    Burger,
    Navbar
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export const VtcBurger = Burger
export const VtcNavbar = Navbar
