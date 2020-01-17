# Vue Tailwind Components
Easy to use vue components utilizing tailwindcss. (Vue 2.6 +, Tailwindcss 1.1 +)

### Components
- Navbar
- Burger
- more to come

### Installation
```
yarn add @kreejzak/vue-tailwind-components
```

### Usage
Import styles and components you want to use and register them in your `components` object.
```javascript
import '@kreejzak/vue-tailwind-components/dist/vue-tailwind-components.css'
import { VtcNavbar } from '@kreejzak/vue-tailwind-components'
export default {
    components: {
        VtcNavbar
    }
}
```
\* Styles are not necessary but following components may not function properly:
- Burger

## VtcNavbar
Responsive Navbar component.
Use slots: `logo`, `menu`, `burger` for placing content into corresponding place of this component.
You have `showMobileMenu` variable at your disposal on every slot.
Use the `vtcClass` variable on the root element in menu slot for proper function of the mobile menu.

### Props
| name | type | description |
|---|---|---|
| value | Boolean | This prop controls mobile menu from outside of the component |
| mobileBreakpoint  | String | Tailwindcss breakpoint for switching to desktop version (undefined = always mobile version) |
| burgerColor | String | Tailwindcss color name for the lines of default Burger |
```html
<VtcNavbar
    class="py-2 bg-white shadow"
    mobile-breakpoint="md"
    burger-color="red-500"
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

## VtcBurger
Default Burger component for mobile version of navbar.

### Props
| name | type | description |
|---|---|---|
| value | Boolean | Controls state of burger (using v-model instead is recommended) |
| color  | String | Tailwindcss color name for the lines of Burger |
```html
<VtcBurger
    color="blue-500"
    v-model="showMobileMenu"
/>
```