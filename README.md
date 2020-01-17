# Vue Tailwind Components
Easy to use vue components utilizing tailwindcss.

## Installation
```
yarn add @kreejzak/vue-tailwind-components
```

## Usage
Import components you want and register them in your components object.
```
import { VtcNavbar } from '@kreejzak/vue-tailwind-components'
export default {
    components: {
        VtcNavbar
    }
}
```

In your template
```
<VtcNavbar
    class="py-2 bg-white shadow"
    mobile-breakpoint="md"
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
    <template #menu="{ showMobileMenu, vgtClass }">
        <div
            class="container mx-auto"
            :class="[
                vgtClass,
                {
                    'bg-blue-100 md:bg-transparent': showMobileMenu
                }
            ]"
        >
            <ul
                class="flex flex-col md:flex-row justify-end -mx-2 justify-end"
            >
                <li class="px-2">item 1</li>
                <li class="px-2">item 2</li>
                <li class="px-2">item 3</li>
                <li class="px-2">item 4</li>
            </ul>
        </div>
    </template>
</VtcNavbar>
```