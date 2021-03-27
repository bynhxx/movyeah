<template>
    <div id="hatedMovies">
        <h3>Filmes Que Odiei</h3>
        <ul>
            <li v-for="movie in hatedMovies" :key="movie.id">
                <div class="img">
                    <img @click="access(movie.id)" :src="movie.img" alt="">
                </div>
                <div class="content">
                    <div class="title">
                        <h4>{{movie.name}}</h4>
                        <small>{{movie.year}}</small>
                    </div>
                    <span>{{movie.director}}</span>
                    <div class="starring">
                        <strong>Starring</strong>
                        <p>
                            {{movie.starring}}
                        </p>
                    </div>
                </div>  
                <div class="trash" @click="deleteMovie(movie.id)">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1311 5.66406C15.5446 5.66406 15.8313 5.24605 15.6762 4.86273C15.1257 3.50176 13.7905 2.53906 12.2345 2.53906H11.5152C11.2469 1.12215 10.0046 0 8.48446 0H7.23446C5.71528 0 4.47215 1.12141 4.20375 2.53906H3.48446C1.92844 2.53906 0.593206 3.50176 0.0426983 4.86273C-0.112341 5.24605 0.174339 5.66406 0.587816 5.66406H15.1311ZM7.23446 1.17188H8.48446C9.33992 1.17188 10.0661 1.74742 10.3105 2.53906H5.40836C5.65282 1.74742 6.37899 1.17188 7.23446 1.17188Z"/>
                    <path d="M2.19751 18.367C2.26271 19.2827 3.03291 20 3.95087 20H11.7681C12.6861 20 13.4563 19.2827 13.5215 18.367L14.3427 6.83594H1.37634L2.19751 18.367ZM9.46181 9.97074C9.47798 9.64754 9.75357 9.39828 10.0763 9.4148C10.3995 9.43098 10.6484 9.70609 10.6322 10.0293L10.3197 16.2793C10.304 16.5925 10.0451 16.8359 9.73497 16.8359C9.39759 16.8359 9.13263 16.5538 9.14927 16.2207L9.46181 9.97074ZM5.64275 9.4148C5.96552 9.39859 6.24107 9.64758 6.2572 9.97074L6.5697 16.2207C6.58634 16.5539 6.32119 16.8359 5.984 16.8359C5.67384 16.8359 5.41494 16.5925 5.39927 16.2793L5.08677 10.0293C5.07064 9.70609 5.31955 9.43098 5.64275 9.4148Z"/>
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hatedMovies: [],
        }
    },
    created(){
        let minhaLista = localStorage.getItem('moviesIHate')
        this.hatedMovies = JSON.parse(minhaLista)
        console.log(this.hatedMovies) 
        console.log('odiei esses aqui')
    },
    methods: {
        deleteMovie(id){
            console.log(id)
            let filtroFilmes = this.hatedMovies.filter((movie)=>{
                return (movie.id !== id)
            })
            this.hatedMovies = filtroFilmes
            return this.hatedMovies
        },
        access(id){
            this.$router.push(`/details/${id}`)
        }
    },
    watch:{
        hatedMovies(){
            localStorage.setItem('moviesIHate', JSON.stringify(this.hatedMovies))
        }
    }
}
</script>

<style scoped>
    #hatedMovies{
        margin-top: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul{
        list-style: none;
        width: 100%;
        max-width: 500px;
        padding: 0 30px 0 30px;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    li:not(last-child){
        border-bottom: 1px solid rgba(128, 128, 128, 0.466);
    }

    li {
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 500px;
        align-items: center; 
        padding: 20px 0 20px 0 ;
    }

    ul li .img img{
        width: 90px; 
        border-radius: 4px;
    }
    
    img:hover{
        cursor: pointer;
    }
    
    .content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .content span{
        font-size: 0.9rem;
        font-style: italic;
        margin-bottom: 10px;
    }

    .title{
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;

    }

    .title h4 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.9rem;
        font-style: italic;
    }   

    .title small {
        font-weight: 0.8rem;
    }

    .starring strong{
        font-size: 0.95rem;   
    }

    .starring p {
        font-size: 0.9rem;
    }

    .trash{
        margin-right: 10px;
    }

    .trash:hover{
        cursor: pointer;
    }

    
    svg{
        fill: rgb(77, 82, 88);
        transition: all .3s;
    }

    svg:hover{
        fill: gray;
        transform: scale(1.1);
        cursor: pointer;
    }

</style>

