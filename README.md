# [Cupertino Pane](https://github.com/roman-rr/cupertino-pane#cupertino-pane) for Vue 2

<img src="https://img.shields.io/badge/vuejs%20-%2335495e.svg?&style=for-the-badge&logo=vue.js&logoColor=%234FC08D"/> <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

> #### Notes: if your are looking for vue 3 repo [here Cupertino-Pane for vue 3](https://github.com/Devrax/v-cupertino)
> # Installation

Actually kinda easy

```sh
  npm i v2-cupertino
```

> # How works


## **Slot**

The component just have one simple slot where you can easily put one or multiple components (by wrapping it in a template or wrap element like a div), doesn't have any special v-slots, any component or html element used will fallback into v-slot:default.

```html
  <template>
    <v2-cupertino>
      <div>Hola mundo!<div>
      <div>Adiós mundo cruel!</div>
    <v2-cupertino>
  </template>

  <script>
    import V2Cupertino from 'v2-cupertino';

    export default {
        name: 'App',
        components: {
            V2Cupertino
        }
    }

  </script>
```

<br>
<br>

## **Props**
| props | type | example | comments |
|-|-|-|-|
| :drawerOptions ( optional ) | `CupertinoSettings` |  `<v2-cupertino :drawerOptions="yourSettingsObject">` | The same as the Cupertinos Options; **constraints** you cannot override cupertino's callbacks even if you specified in the `CupertinoSettings`' Object|
| :entryAnimation ( optional ) | `Boolean` | `<v2-cupertino :entryAnimation="Boolean">` | Whether the drawer should present, destroy or hide with a smooth animation |
| :entryComponent ( optional ) | `Component` | `<v2-cupertino :entryComponent="Component">` | The component itself use slots, but I think it would be faster to toggle between component from scripts instead of using v-if also components remember their state because are wrapped by `<keep-alive>` tag|
|:isPresent | Boolean | `<v2-cupertino :entryComponent="Component">` | Whether the component should be present or hide, when initialize; **default:** true |
|:id | Number &#124; String | `<v2-cupertino :id="2">` | If you have multiples v2-cupertino components in the same app that might be working in the same time could crash the library cupertino-pane due that all of them are using the same selector class to create a new pane, using custom id, will allow you to use multiples v2-cupertino components as much as you want |

<br>
<br>

## **Events**
 _**Note:** Are the same hooks as the Cupertino pane but instead of camelCase are kebak-case and without the prefix **on**: `@will-dismiss, @backdrop-tap...`_


| events | return | comments |
| - | - | - |
| @did-dismiss | `() => void` | |
| @will-dismiss | `() => void` | |
| @did-present | `() => cupertinoInstance` | **Returns:** the cupertino instance inside the component when the drawer is already visible, this is useful when you need to have access to the instance once is visible  | 
| @will-present | `() => cupertinoInstance` | **Returns:** the cupertino instance inside the component when the drawer will be visible, this is useful when you need to have access to the instance before is visible | 
| @drag-start | `() => number` | **Returns:** the property `y` from the method `getBoundingClientRect()` that belongs to the `DOMRect` |
| @drag | `() => number` | **Returns:** the property `y` from the method `getBoundingClientRect()` that belongs to the `DOMRect` |
| @drag-end | `() => number` | **Returns:** the property `y` from the method `getBoundingClientRect()` that belongs to the `DOMRect` |
| @backdrop-tap | `() => void` | |
| @transition-start | `() => void` | |
| @transition-end | `() => void` | |

<br>
<br>


  **Notes:** In case you need more information about the library, remember that this is only a wrapper, for more information go to the oficial [Cupertino Pane library](https://github.com/roman-rr/cupertino-pane/blob/master/README.md).

<br>
<br>

# License
Licensed under the MIT License. [View original LICENSE](https://github.com/roman-rr/cupertino-pane/blob/master/LICENSE) [Project's LICENSE](/LICENSE)

Lol, that's all, thanks


