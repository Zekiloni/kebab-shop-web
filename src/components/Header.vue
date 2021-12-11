


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
      height: 65vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      background: url('../assets/images/chicken_bg.png');
      /* background-size: cover; */
      box-shadow: 0 10px 20px 0px rgb(0 0 0 / 5%);
   }

   .box { 
      width: 40%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center; 
   }

   a.logo { 
      position: relative;
      z-index: 1;
      transition: all .3s ease;
   }

   a.logo:hover img { opacity: 0.4; }
   
   a.logo img { 
      width: 500px;
      transition: all .3s ease;
      animation: slide-in 2.5s ease;
   }

   .box.description {
      flex-direction: column;
      align-items: center;
      animation: zoom-in 0.5s ease;
      position: relative;
      background: rgb(0 0 0 / 65%);
      z-index: 2;
      height: 90%;
      overflow: hidden;
      border-radius: 25px;
      transition: all 0.3s ease;
   }

   .box.description h2.title { 
      width: 90%;
      font-size: 2.2rem;
      text-transform: uppercase;
      color: white;
      letter-spacing: 1.25px;
   }

   .box.description h3 { 
      font-size: 27px; 
      color: whitesmoke;
      text-transform: uppercase;
   }

   .box.description p { 
      color: rgb(255 255 255 / 80%);
      letter-spacing: 0.6px;
      font-size: 0.95rem;
      font-weight: 100;
      width: 90%;
      text-align: justify;
   }

   @keyframes slide-in {
      from { transform: translateX(500px); opacity: 0;}
      to { transform: translateX(0); opacity: 1; }
   }

   @keyframes zoom-in {
      from { opacity: 0; border-radius: 100%; }
      to { opacity: 1; }
   }


   @media only screen and (max-width: 600px) {
      .header { height: auto; }
      .header::before { display: none; }
      .box { height: auto; width: auto; margin: 0; padding: 10px 15px;}
      .box a.logo img { width: 300px; }
      .box.description { width: 100%; border-radius: 0; }
      .box.description p { width: 95%; }
      .box.description h2.title { font-size: 1.7rem; }
   }

   
</style>