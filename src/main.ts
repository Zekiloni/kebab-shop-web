import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/page';


Vue.config.productionTip = false;
// Vue.config.devtools = false;

//@ts-ignore

const Focus = new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount('#app');


