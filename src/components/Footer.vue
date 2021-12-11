


<template>
   <div class="footer"> 
       <div class="socials"> 
           <h3> {{ Constants.VISIT_US_ON_SOCIAL }} </h3>
           <a :href="Constants.FACEBOOK_LINK"> <div class="icon instagram"></div> </a>
           <a :href="Constants.FACEBOOK_LINK"> <div class="icon email"> </div> </a>
           <a :href="Constants.FACEBOOK_LINK"> <div class="icon facebook">  </div> </a>
       </div>

       <div class="copyright">
           <h4> {{ Constants.DESIGNED_BY }} <a href="#"> {{ Constants.AUTHOR }} </a> </h4>
       </div>
   </div>

</template>

<script>
   import { Constants } from '@/Globals'

   export default { 
      data () { 
        return { 
            Constants
        }
      }
   }

</script>

<style scoped>

    .footer { 
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: url('../assets/images/footer-bg.png')
    }

    .socials { 
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        width: 1240px;
        margin-top: 125px;
        color: white;
    }

    .socials .icon { 
        width: 50px; height: 50px;
        background: white;
        margin: 5px 35px;
        transition: all .35s ease;
    }

    .socials h3 { text-align: center; text-transform: uppercase; font-size: 20px; font-weight: 200; color: rgb(228, 228, 228); letter-spacing: 1.25px; }

    .socials .icon:hover { 
        background: #ff6602;
        transform: scale(1.25);
    }

    .icon.facebook { -webkit-mask: url('../assets/images/icons/facebook.svg') no-repeat center; mask: url('../assets/images/icons/facebook.svg') no-repeat center; mask-size: cover; }
    .icon.instagram { -webkit-mask: url('../assets/images/icons/instagram.svg') no-repeat center; mask: url('../assets/images/icons/instagram.svg') no-repeat center; mask-size: cover; }
    .icon.email { -webkit-mask: url('../assets/images/icons/e-mail.svg') no-repeat center; mask: url('../assets/images/icons/e-mail.svg') no-repeat center; mask-size: cover; }

    .copyright { 
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 72px;
        background: rgb(0 0 0 / 45%);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
    }

    .copyright h4 { 
        text-align: center; 
        font-weight: 100;
        text-transform: uppercase;
        font-size: 13px;
        color: rgb(223, 223, 223);
    }

    .copyright a { 
        text-decoration: none;
        color: #ff6602;
        transition: all .35s ease;
    }

    .copyright a:hover { opacity: 0.5; }

    @media only screen and (max-width: 600px) {
      ul.navigation { display: none; }
      .copyright h4 { font-size: 0.6rem; }
      .socials .icon { margin: 0 15px; }
      .socials h3 { width: 100%; margin: 10px 0; }
    }

   
</style>