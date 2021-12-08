


<template>
   <div class="header" :class="{ fixed: isFixed }"> 
      <div class="box">
         <a href="#" class="logo"> 
            <img src="@/assets/images/logo.png" />
         </a>
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

   a.logo { 
      position: relative;
      z-index: 1;
      transition: all .3s ease;
   }

   a.logo:hover { opacity: 0.4; }
   
   a.logo img { 
      width: 500px;
      animation: slide-in 2.5s ease;
   }

   .box.description {
      background: url('../assets/images/food-pattern.png') repeat, #ffcc00;
      box-shadow: 0 0 100px 0 rgb(255 204 0 / 15%);
      color: white;
      flex-direction: column;
      align-items: flex-start;
      animation: zoom-in 1s ease;
      border-radius: 25px;
      position: relative;
      z-index: 2;
      overflow: hidden;
      transition: all 0.3s ease;
   }
      
   .box.description h2.title { 
      font-size: 2.2rem;
      text-transform: uppercase;
      letter-spacing: 1.25px;
   }

   .box.box.description:hover { 
      box-shadow: 0 0 120px 0 rgb(255 204 0 / 15%);
   }

   .box.description p { 
      color: rgb(17, 17, 17);
      font-size: 0.95rem;
      font-weight: 400;
      text-align: justify;
   }

   @keyframes slide-in {
      from { transform: translateX(500px); opacity: 0;}
      to { transform: translateX(0); opacity: 1; }
   }

   @keyframes zoom-in {
      from { width: 225px; height: 225px; border-radius: 100%; }
      to {  width: 40%; height: 60%; border-radius: 25px; }
   }


   @media only screen and (max-width: 600px) {
      .box { height: auto; width: auto; margin: 20px; }
      .box img.logo { width: 350px; }
   }

   
</style>