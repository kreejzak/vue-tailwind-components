<template>
    <div id="app">
        <VtcNavbar
            class="py-2 bg-white shadow"
            mobile-breakpoint="md"
            burger-color="red-500"
            :value="openMobileMenu"
        >
            <template #logo="{ showMobileMenu }">
                <div
                    class="font-bold uppercase py-2"
                    :class="{
                        'text-red-500 md:text-black': showMobileMenu
                    }"
                >
                    logo
                </div>
            </template>
            <template #menu="{ showMobileMenu, vtcClass }">
                <div
                    class="container mx-auto"
                    :class="[
                        vtcClass,
                        {
                            'bg-blue-100 md:bg-transparent': showMobileMenu
                        }
                    ]"
                >
                    <ul class="flex flex-col md:flex-row justify-end -mx-2">
                        <li class="px-2">item 1</li>
                        <li class="px-2">item 2</li>
                        <li class="px-2">item 3</li>
                        <li class="px-2">item 4</li>
                    </ul>
                </div>
            </template>
        </VtcNavbar>
        <div class="container px-4 mx-auto pt-32">
            <div class="flex justify-between">
                <VtcBurger color="red-500" v-model="openMobileMenu" />
                <VtcBurger color="green-500" v-model="openMobileMenu" />
                <VtcBurger color="blue-500" v-model="openMobileMenu" />
                <VtcBurger color="pink-500" v-model="openMobileMenu" />
                <VtcBurger v-model="openMobileMenu" />
            </div>
        </div>
    </div>
</template>

<script>
import { VtcNavbar, VtcBurger } from './components'
export default {
    data() {
        return {
            openMobileMenu: false
        }
    },
    components: {
        VtcNavbar,
        VtcBurger
    }
}
</script>
