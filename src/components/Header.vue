


<template>
   <div class="header" :class="{ fixed: isFixed }"> 
      <div class="box">
         <img class="logo" src="@/assets/images/logo.png" />
      </div>

      <div class="box description">
         <h2 class="title"> {{ Constants.DESCRIPTION_TITLE }} </h2>
         <p> {{ Constants.DESCRIPTION_TEXT }} </p>
      </div>

   </div>
</template>

<script>
   import { Constants } from '@/Globals'

   export default { 
      data () { 
         return { 
            isFixed: false,
            Constants
         }
      },

      mounted () { 
         window.addEventListener('scroll', () => {
            if (window.scrollY > 75) 
               this.isFixed = true;
            else
               this.isFixed = false;
         });
      },

      methods: { 
        
      }
   }

</script>

<style scoped>

   .header { 
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
   }


   .box { 
      width: 40%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center; 
      padding: 50px;
   }

   .logo { 
      width: 500px;
   }

   .box.description {
      background: url('../assets/images/food-pattern.png') repeat, #ffcc00;
      box-shadow: 0 0 100px 0 rgb(255 204 0 / 15%);
      color: white;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 25px;
   }
      
   .box.description h2.title { 
      font-size: 2.2rem;
      text-transform: uppercase;
      letter-spacing: 1.25px;
   }

   .box.description p { 
      color: rgb(17, 17, 17);
      font-size: 0.95rem;
      font-weight: 400;
      text-align: justify;
   }


   @media only screen and (max-width: 600px) {
      .box { height: auto; width: auto; margin: 20px; }
      .box img.logo { width: 350px; }
   }

   
</style>