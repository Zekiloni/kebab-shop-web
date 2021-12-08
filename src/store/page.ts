import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      activePage: []
   },
   
   mutations: {
      setActive (state, page) {
         state.activePage = page;
      }
   },

   actions: {

   },

   getters: { 
      getActive (state) { 
         return state.activePage;
      }
   },

   modules: {
      
   },
});
