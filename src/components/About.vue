


<template>

   <div class="about"> 
      <div class="history" id="about_us"> 
         <h3 class="title"> {{ Constants.PAGE_ABOUT }} </h3>
         <p> {{ Constants.ABOUT_TEXT }} </p>
      </div>

      <div class="box">
         <h4 class="title"> {{ Constants.CLEAN_TITLE }} </h4>
         <p> {{ Constants.CLEAN_TEXT }} </p>
         <div class="icon fresh"> </div> 
      </div>

      <div class="box">
         <h4 class="title"> {{ Constants.WARRANTY_TITLE }} </h4>
         <p> {{ Constants.WARRANTY_TEXT }} </p>
         <div class="icon warranty"> </div> 
      </div>

      <div class="box">
         <h4 class="title"> {{ Constants.TASTE_TITLE }} </h4>
         <p> {{ Constants.TASTE_TEXT }} </p>
         <div class="icon tasty"> </div> 
      </div>

      <div class="box">
         <h4 class="title"> {{ Constants.HALAL_TITLE }} </h4>
         <p> {{ Constants.HALAL_TEXT }} </p>
         <div class="icon halal"> </div> 
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
      },

      mounted () { 
      },

      methods: { 
        
      }
   }

</script>

<style scoped>

   .about { 
      max-width: 1340px;
      margin: 0 auto;
      margin-top: 70px;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
   }

   .history { 
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 30px 0;
   }

   .history p { 
      font-size: 1rem;
      color: grey;
      width: 815px;
      line-height: 1.55rem;
      text-align: center;
   }

   .box { 
      width: 305px;
      height: 285px;
      position: relative;
      box-shadow: 0px 10px 42px 0px rgb(0 0 0 / 9%);
      margin: 50px 25px 0px 25px;
      border-radius: 15px;
      padding: 15px 15px 20px 15px;
   }

   .box .icon { 
      width: 75px; height: 75px; position: absolute;
      bottom: 25px; right: 130px; background: #ff8e64;
   }

   .box p { 
      font-weight: 600;
      color: grey;
      width: 90%;
      margin: 0 auto;
      font-size: 14px;
      text-align: center;
   }

   .box h4.title { 
      width: 100%;
      text-align: center;
      font-size: 21px;
   }

   .icon.fresh { -webkit-mask: url('../assets/images/icons/fresh.svg') no-repeat center; mask: url('../assets/images/icons/fresh.svg') no-repeat center; mask-size: cover; background: #ff6602; }
   .icon.warranty { -webkit-mask: url('../assets/images/icons/warranty.svg') no-repeat center; mask: url('../assets/images/icons/warranty.svg') no-repeat center; mask-size: cover; }
   .icon.tasty { -webkit-mask: url('../assets/images/icons/tasty.svg') no-repeat center; mask: url('../assets/images/icons/tasty.svg') no-repeat center; mask-size: cover; background: #6c0000; }
   .icon.halal { -webkit-mask: url('../assets/images/icons/halal.svg') no-repeat center; mask: url('../assets/images/icons/halal.svg') no-repeat center; mask-size: cover; background: #25e97d; }


   h3.title { 
      font-size: 37.5px; 
      color: rgb(99, 99, 99); 
      letter-spacing: 3px;
      margin: 10px 0;
      text-transform: uppercase;
   }
   

   @media only screen and (max-width: 600px) {
      .history p { width: auto; }
   }

   
</style>