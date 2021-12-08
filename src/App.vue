
<template>

   <div id="app">
      <Header />
      <Features />
     <!-- <About />
      <Order />
      <Footer /> -->
   </div>

</template>

<script>
   import './assets/styles/main.css';
   import './assets/styles/fonts.css';
   import './assets/styles/font-awesome.css';
   import { Constants } from './Globals';

   import Header from './components/Header.vue';
   import Features from './components/Features.vue';
   import Order from './components/Order.vue';
   import Footer from './components/Footer.vue';

   export default { 

      components: { 
         Header, Features, Order, Footer
      },

      data () { 
         return {

         }
      },

      mounted () { 
         document.title = Constants.TITLE;
         console.log(Constants.TITLE + ' ' + Constants.DESIGNED_BY + Constants.AUTHOR);
      },

      methods: {
   
      },

      computed: {

      }
   }
   
</script>
