<template>
    <nav class="fixed pin-t inset-x-0 z-50">
        <div class="container px-4 mx-auto">
            <div class="flex items-center justify-between -mx-4">
                <div class="px-4 relative z-50">
                    <slot name="logo" :show-mobile-menu="showMobileMenu"></slot>
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
                        :vgt-class="
                            `absolute inset-0 ${mobileBreakpoint}:relative pt-20 ${mobileBreakpoint}:pt-0 px-4 ${mobileBreakpoint}:px-2`
                        "
                        :show-mobile-menu="showMobileMenu"
                    ></slot>
                </div>
                <div
                    class="px-4 relative z-50"
                    :class="`${mobileBreakpoint}:hidden`"
                >
                    <slot name="burger" :show-mobile-menu="showMobileMenu">
                        <VtcBurger v-model="showMobileMenu" />
                    </slot>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import VtcBurger from './Burger'
export default {
    props: ['value', 'mobileBreakpoint'],
    data() {
        return {
            showMobileMenu: this.value || false,
            bp: this.mobileBreakpoint || null
        }
    },
    watch: {
        value(newVal) {
            this.showMobileMenu = newVal
        }
    },
    components: {
        VtcBurger
    }
}
</script>

<style lang="postcss" scoped></style>
