<template>
    <button class="burger" :class="{ open }" @click="toggleBurger()">
        <div class="burger-1"></div>
        <div class="burger-2"></div>
        <div class="burger-3"></div>
    </button>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            open: this.value
        }
    },
    watch: {
        value(newVal) {
            this.open = newVal
        }
    },
    methods: {
        toggleBurger(value) {
            this.open = value || !this.open
            this.$emit('input', this.open)
        }
    }
}
</script>

<style lang="postcss" scoped>
.burger {
    @apply block m-0 p-0 flex items-center flex-col justify-between h-5 cursor-pointer;
    &:focus {
        outline: none;
        box-shadow: none;
    }
    & > div {
        @apply bg-blue-500 relative;
        width: 30px;
        height: 2px;
        transition: 0.3s all;
    }
    &.open {
        .burger-2 {
            opacity: 0;
        }
        .burger-1 {
            top: 9px;
            transform: rotate(-45deg);
        }
        .burger-3 {
            top: -9px;
            transform: rotate(45deg);
        }
    }
}
</style>
