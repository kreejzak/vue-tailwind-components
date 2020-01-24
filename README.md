# Vue Tailwind Components
Easy to use vue components utilizing tailwindcss. (Vue 2.6 +, Tailwindcss 1.1 +)

### Components
- Navbar
- Burger
- more to come

### Demo
You can find demo [here](http://paulcross.cz/vue-tailwind-components/).

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
| scrolledThreshold | Number | Number of pixels scrolled from top of page fires event |
| unscrolledClass | String | class applied to Navbar when `window.scrollY` < `scrolledThreshold` |
| scrolledClass | String | class applied to Navbar when `window.scrollY` >= `scrolledThreshold` |
```html
<VtcNavbar
    class="py-2"
    unscrolledClass="bg-white"
    scrolledClass="bg-blue-100 shadow"
    mobileBreakpoint="md"
    burgerColor="red-500"
    :scrolledThreshold="100"
    v-model="openMobileMenu"
>
    <template #logo="{ showMobileMenu, scrolled }">
        <div
            class="font-bold uppercase py-2"
            :class="{
                'text-red-500 md:text-black': showMobileMenu
            }"
        >
            logo
        </div>
    </template>
    <template #menu="{ showMobileMenu, scrolled, vtcClass }">
        <div
            :class="[
                vtcClass,
                {
                    'bg-blue-100 md:bg-transparent': showMobileMenu
                }
            ]"
        >
            <div class="container mx-auto px-4">
                <ul class="flex flex-col md:flex-row justify-end -mx-4">
                    <li class="ml-4">item 1</li>
                    <li class="ml-4">item 2</li>
                    <li class="ml-4">item 3</li>
                    <li class="ml-4">item 4</li>
                </ul>
            </div>
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