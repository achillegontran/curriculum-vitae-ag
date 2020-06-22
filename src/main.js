import $ from"jquery";
window.$ = $;
import"bootstrap";
import"bootstrap/dist/css/bootstrap.min.css";
//import"bootswatch/dist/darkly/bootstrap.min.css";
import"@fortawesome/fontawesome-free/css/all.min.css";




$(document).ready(() => {console.log("it works!");});

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
