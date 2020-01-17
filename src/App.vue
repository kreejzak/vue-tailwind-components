<template>
    <div id="app">
        <VtcNavbar
            class="py-2"
            unscrolledClass="bg-white"
            scrolledClass="bg-blue-100 shadow"
            mobileBreakpoint="md"
            burgerColor="red-500"
            :scrolledThreshold="100"
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
                    :class="[
                        vtcClass,
                        {
                            'bg-blue-100 md:bg-transparent': showMobileMenu
                        }
                    ]"
                >
                    <div class="container mx-auto px-4 md:px-0">
                        <ul class="flex flex-col md:flex-row justify-end -mx-4">
                            <li class="px-4">item 1</li>
                            <li class="px-4">item 2</li>
                            <li class="px-4">item 3</li>
                            <li class="px-4">item 4</li>
                        </ul>
                    </div>
                </div>
            </template>
        </VtcNavbar>
        <div class="container px-4 mx-auto pt-32">
            <div class="flex justify-between mb-16">
                <VtcBurger color="red-500" v-model="openMobileMenu" />
                <VtcBurger color="green-500" v-model="openMobileMenu" />
                <VtcBurger color="blue-500" v-model="openMobileMenu" />
                <VtcBurger color="pink-500" v-model="openMobileMenu" />
                <VtcBurger v-model="openMobileMenu" />
            </div>

            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
            <p>long content, scroll down</p>
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
