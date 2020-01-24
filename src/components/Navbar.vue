<template>
    <nav
        class="fixed pin-t inset-x-0 z-50"
        :class="`${scrolled ? scrolledClass : unscrolledClass}`"
    >
        <div class="container px-4 mx-auto">
            <div class="flex items-center justify-between -mx-4">
                <div class="px-4 relative z-50">
                    <slot
                        name="logo"
                        :scrolled="scrolled"
                        :show-mobile-menu="showMobileMenu"
                    ></slot>
                </div>
                <div
                    class="px-4 flex-1 absolute h-screen inset-x-0 top-0 z-40"
                    :class="[
                        `${mobileBreakpoint}:block ${mobileBreakpoint}:relative ${mobileBreakpoint}:h-auto`,
                        {
                            block: showMobileMenu,
                            hidden: !showMobileMenu
                        }
                    ]"
                >
                    <slot
                        name="menu"
                        :vtc-class="
                            `absolute inset-0 ${mobileBreakpoint}:relative pt-20 ${mobileBreakpoint}:pt-0`
                        "
                        :show-mobile-menu="showMobileMenu"
                        :scrolled="scrolled"
                    ></slot>
                </div>
                <div
                    class="px-4 relative z-50"
                    :class="`${mobileBreakpoint}:hidden`"
                >
                    <slot
                        name="burger"
                        :scrolled="scrolled"
                        :show-mobile-menu="showMobileMenu"
                    >
                        <VtcBurger
                            :color="burgerColor"
                            v-model="showMobileMenu"
                        />
                    </slot>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import VtcBurger from './Burger'
export default {
    name: 'VtcNavbar',
    props: [
        'value',
        'mobileBreakpoint',
        'burgerColor',
        'unscrolledClass',
        'scrolledClass',
        'scrolledThreshold'
    ],
    data() {
        return {
            showMobileMenu: this.value || false,
            bp: this.mobileBreakpoint || null,
            scrolled: false
        }
    },
    watch: {
        value(newVal) {
            this.showMobileMenu = newVal
            this.$emit('input', newVal)
        },
        showMobileMenu(newVal) {
            this.$emit('input', newVal)
        }
    },
    components: {
        VtcBurger
    },
    mounted() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.scrollY >= (this.scrolledThreshold || 100)) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
            this.$emit('scrolled', this.scrolled)
        }
    }
}
</script>

<style lang="postcss" scoped></style>
