<template>
    <nav class="nav-bar">
        <div>
            <router-link to="/">
                <img src="@/assets/logo.svg" alt="Home - Entertainment app" />        
            </router-link>

            <ul class="icon-nav">
                <router-link to="/">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" 
                            fill="#5A698F"
                        />
                    </svg>
                </router-link>
              
                <router-link to="/movies">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" 
                            fill="#5A698F"/>
                    </svg>
                </router-link>
                
                <router-link to="/tv-series">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" 
                            fill="#5A698F"/>
                    </svg>
                </router-link>

                <router-link to="/bookmark">
                    <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" 
                            fill="#5A698F" />
                    </svg>
                </router-link>
            </ul>

            <button>
                <img src="@/assets/image-avatar.png" 
                    alt="Your image" 
                    height="30" 
                    image="30"
                    />
            </button>
        </div>
    </nav>
</template>


<script>
export default {
    name: 'TheNavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 

.nav-bar {
    >div{
        background-color: $semi-dark-blue;
        padding: 1rem;
        @include flex($flex_position: space-between); 
    }
}

.icon-nav {
    display: flex;

    a { display: block; }
    a:nth-child(2){
        margin: 0 1.1rem;
    }

    a:nth-child(3) {
        margin-right: 1.1rem;
    }

    svg:hover path {
    fill: $red;
    }

    a:active,  svg:active path {
        fill: #fff;
    }
}

@media screen and (min-width: 650px){  
    .nav-bar {
        padding: 1rem;
        
        >div {  
            border-radius: 20px;
        }
    }

    .icon-nav {
        button:nth-child(2){
            margin: 0 1.8rem;
        }

        button:nth-child(3) {
            margin-right: 1.8rem;
        }
    }
}

@media screen and (min-width: 1000px){  
    .nav-bar >div {  
        flex-direction: column;
        width: 5rem;
        height: 100vh; 
        padding: 1rem 1.7rem; 
    }

    .icon-nav {
        display: unset;
        margin-top: -15rem;
        
        a:nth-child(2){
            margin: 2rem 0;
        }

        a:nth-child(3) {
            margin: 0 0 2rem 0;
        }
    }
}
</style>