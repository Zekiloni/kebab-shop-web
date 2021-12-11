


<template>
   <div class="features">
      <div class="feature clean">
         <div class="icon-holder"> 
            <div class="icon"> </div> 
         </div>
         <h3> {{ Constants.CLEAN_TITLE }} </h3>
         <p> {{ Constants.CLEAN_TEXT }} </p>
      </div>

      <div class="feature tasty">
         <div class="icon-holder"> 
            <div class="icon"> </div> 
         </div>
         <h3> {{ Constants.TASTE_TITLE }} </h3>
         <p> {{ Constants.TASTE_TEXT }} </p>
      </div>

      <div class="feature halal">
         <div class="icon-holder"> 
            <div class="icon"> </div> 
         </div>
         <h3> {{ Constants.HALAL_TITLE }} </h3>
         <p> {{ Constants.HALAL_TEXT }} </p>
      </div>

      <div class="feature meat">
         <div class="icon-holder"> 
            <div class="icon"> </div> 
         </div>
         <h3> {{ Constants.MEAT_TITLE }} </h3>
         <p> {{ Constants.MEAT_TEXT }} </p>
      </div>
   </div>
</template>

<script>
   import { Constants } from '@/Globals';

   export default { 
      data () { 
         return { 
            Constants
         }
      }
   }

</script>

<style scoped>

   .features { 
      width: 100%;
      margin: 0 auto;      
      background: url('../assets/images/factory_bg.png');
      padding: 40px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      height: auto;
   }

   .feature { 
      width: 300px;
      height: 350px;
      display: flex;
      flex-direction: column;
      margin: 45px;
      padding: 25px;
      transition: all .3s ease;
      border-radius: 25px;
      /* box-shadow: 0 10px 20px 0px rgb(0 0 0 / 5%); */
      align-items: center;
      /* justify-content: center; */
      background: rgb(0 0 0 / 65%);
   }

   .feature:hover { 
      cursor: pointer;
      transform: scale(1.05);
   }

   .feature:hover .icon-holder {
      filter: brightness(1.15);
   }

   .feature h3 { 
      margin-top: 35px;
      font-size: 1.45rem;
      font-weight: 200;
      color: whitesmoke;
   }

   .feature p { 
      width: 90%;
      text-align: center;
      color: #e1e1e1;
      font-weight: 100;
      letter-spacing: 0.25px;
      line-height: 1.05rem;
      font-size: 0.8rem;
   }

   .icon-holder { padding: 35px; border-radius: 100%; transition: all .3s ease; }

   .clean .icon-holder { background: linear-gradient(45deg, rgb(0 193 240), rgb(190 232 228)); box-shadow: 0 0 0px 10px rgb(0 193 240 / 25%); }
   .halal .icon-holder { background: linear-gradient(45deg, rgb(125, 206, 130), rgb(180 255 185)); box-shadow: 0 0 0px 10px rgb(125 206 130 / 25%); }
   .tasty .icon-holder { background: linear-gradient(45deg, rgb(255, 99, 71), rgb(253 159 142)); box-shadow: 0 0 0px 10px rgb(255 99 71 / 25%); }
   .meat .icon-holder { background: linear-gradient(45deg, rgb(106 48 26), rgb(201 101 63)); box-shadow: 0 0 0px 10px rgb(125 58 33 / 25%); }

   .icon-holder .icon { width: 80px; height: 80px; background: white;  }
   .halal .icon-holder .icon { -webkit-mask: url('../assets/images/icons/halal.svg') no-repeat center; mask: url('../assets/images/icons/halal.svg') no-repeat center; mask-size: cover; }
   .tasty .icon-holder .icon { -webkit-mask: url('../assets/images/icons/tasty.svg') no-repeat center; mask: url('../assets/images/icons/tasty.svg') no-repeat center; mask-size: cover; }
   .clean .icon-holder .icon { -webkit-mask: url('../assets/images/icons/fresh.svg') no-repeat center; mask: url('../assets/images/icons/fresh.svg') no-repeat center; mask-size: cover; }
   .meat .icon-holder .icon { -webkit-mask: url('../assets/images/icons/chicken.svg') no-repeat center; mask: url('../assets/images/icons/chicken.svg') no-repeat center; mask-size: cover; }


   @media only screen and (max-width: 600px) {
      .features { width: 100%; }
      .features .feature { width: 100%; margin: 15px 0; }
   }

   
</style>