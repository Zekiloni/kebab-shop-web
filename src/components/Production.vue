

<template>
    <div class="production"> 
        <h2 class="title"> {{ Constants.PRODUCTION_TITLE }} </h2>
        <ul class="steps">
            <li v-for="(Step, i) in Constants.PRODUCTION_PROCESS" v-bind:key="i">
                <h3 class="number"> {{ i + 1 }} </h3>
                <p> {{ Step }} </p>
            </li>
        </ul>
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

    h2.title { 
        width: 100%;
        text-align: center;
        font-size: 1.7rem;
        font-weight: 200;
        color: grey;
        text-transform: uppercase;
    }

    .production { 
        width: 100%;
        min-height: 85px;
        padding: 50px 0;
        height: auto;
        box-shadow: 0 -10px 20px 0px rgb(0 0 0 / 5%), 0 15px 20px 0px rgb(0 0 0 / 5%);
        background: linear-gradient(45deg, #f5f5f5, #ffffff);
    }

    ul.steps { 
        width: 85%;
        margin: 0 auto;
        margin-top: 70px;
        list-style: none;
        padding: 0;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    ul.steps::before { 
        content: '';
        position: absolute;
        top: 5px;
        width: 100%;
        height: 10px;
        border-radius: 20px;
        background: #f1f1f1;
    }

    ul.steps li {
        width: 270px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul.steps li p { 
        height: 110px;
        text-align: justify;
        color: grey;
    }
    
    li h3.number {
        position: relative;
        top: -35px;
        height: 50px;
        width: 50px;
        font-size: 1.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background: linear-gradient(45deg, rgb(125, 206, 130), rgb(180 255 185));
        box-shadow: 0 0 0px 10px rgb(125 206 130 / 25%);
        color: white;
    }

    @media only screen and (max-width: 600px) {
   }

</style>