<template>
    <div class="home">
        <div>
            <TheNavBar></TheNavBar>
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
@import './styles/main.scss'; 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }

    button,
    input {
        background: none;
        border: 0;
    }

    button:focus {
        outline: 1px dashed $red;
    } 

    .home  {
        background-color: $dark-blue;
        min-height: 100vh;
        // width:  100vw;
        .home-inner { 
            padding: 1rem; 
            overflow-x: hidden;
        }
    }

    .trending{
        background-repeat: no-repeat;
        background-size: cover;
        height: 12rem;
    }

    .trending,
    article .movie  {
        position: relative;
        border-radius: 15px;
    }

    article .movie {
        width: 450px;
        height: 200px;
    }

    .trending,
    .movies{
        h3 {
            font-weight: 500;
            font-size: 1.05rem;
        }

        h3, p {
            color: #fff;
        }

        p {
            opacity: 0.75;
            font-weight: 300;

            span:nth-child(2)::before,
            span:nth-child(2)::after {
                content: "";
                display: inline-flex;
                height: .25rem;
                width: .25rem;
                background: #FFFFFF;
                mix-blend-mode: normal;
                opacity: 0.5;
                border-radius: 25px;
                margin: 0 .4rem;
            }
        }

        span img { margin-right: .4rem; }

        button {
            cursor: pointer;
            background: #10141E;
            // mix-blend-mode: normal;
            // opacity: 0.5;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 15px;
            position: absolute;
            right: .7rem;
            top: .7rem;
            @include flex;

            &:hover {
                background: #fff;   
            } 

            svg:hover path {
                fill: #000;
            }
            
            svg:active path {
                fill: #fff;
            }
        }
    }
@media screen and (min-width: 1024px){ 
    .trending h3 {
        font-size: 1.3rem;
    }

    .home {
        
        width: 100%;
        >div {
            display: grid;
            grid-template-columns: auto auto;
            max-width: 1500px;
            margin: auto;
        }
    }

    article .movie {
        height: 220px;
    }
}
</style>

<script>
import TheNavBar from '@/components/TheNavBar.vue';

export default {
    name: 'App',
    components: {
        TheNavBar
    }
};
</script>