# vue-jwt-decode

> Tiny JWT decoder for Vue.js

## Installation

```
npm install vue-jwt-decode
```

## Usage

```
import VueJwtDecode from 'vue-jwt-decode'

// like this
VueJwtDecode.decode("<your jwt>")

// or like this
Vue.use(VueJwtDecode)
Vue.jwtDec("<your jwt>")

// or in component
this.$jwtDec("<your jwt>")
```
