


<template>
   <div class="features">
      <h2 class="title"> aadawda </h2>
      <ul class="features-list">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
   </div>
</template>

<script>
   import { Constants } from '@/Globals';

   export default { 
      data () { 
         return { 
            Constants
         }
      },

      mounted () { 
      },

      methods: { 
        
      }
   }

</script>

<style scoped>

   .features { 
      width: 1250px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
   }

   h2.title { 
      background: red;
      width: 375px;
      height: 300px;
      text-align: center;
   }

   ul.features-list { 
      height: 550px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      list-style: none;
      background: blue;
      flex-wrap: wrap;
      margin: 0;
      width: 650px;
   }
   
   ul.features-list li { 
      width: 255px;
      height: 225px;
      margin: 10px;
      background: green;
   }

   @media only screen and (max-width: 600px) {
      .history p { width: auto; }
   }

   
</style>