<template>
    <div class="movieCard--box">
        <div id="movieCard">
            <div class="movieCard--cover">
                <img @click="access" :src="img" class="cover" alt="">
                <!-- <router-link tag="img" :to="`/details/2`" class="cover" :src="img" alt=""></router-link> -->
            </div>
            <div class="movieCard--info">
                
                <h3>{{name}} {{id}}</h3>
                
                <span>{{director}} <small>{{year}}</small></span>
                <hr class="line">
                <p>
                    <strong>
                        Starring:
                    </strong>  
                    {{starring}}
                    <br>
                </p>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MovieCard', 
    props: {
        id: Number,
        name: String, 
        year: Number, 
        director: String, 
        starring: String,
        img: String, 
        info: String,
        formatted: String
    },
    methods:{
        access(){
            this.$router.push(`/details/${this.id}`)
        }
    }
}

</script>

<style scoped>
    .movieCard--box{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #movieCard{
        display: flex; 
        flex-direction: column;
        margin-top: 30px;
        width: 70%;
        max-width: 210px;
        height: auto;
        background-color: whitesmoke;
        border-radius: 5px;
    }

    .cover{
        width: 100%;
        max-width: 300px;
        border-radius: 5px 5px 0 0 ;
    }

    .cover:hover{
        cursor: pointer;
    }

    .movieCard--info{
        padding: 10px;
        font-size: 0.9rem;
    }

    .movieCard--info > * {
        color: #363c41;
    }

    .movieCard--info > * > * {
        color: #363c41;
    }

    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: italic;
        font-weight: 600;
        font-size: 0.8rem;
        margin-bottom: 5px;
    }

    h3{
        font-family: 'Poppins', sans-serif;
        letter-spacing: 0;
        color: #363c41;
        font-weight: 600;
        font-size: 0.8rem;
        font-style: italic;
    }   
    





</style>