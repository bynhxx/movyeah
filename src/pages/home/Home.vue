<template>
    <div id="home">
        <div class="content">
            <!-- <Search/>  -->
            
            <h3>Todos os filmes</h3>
            
            <div id="search">
                <input type="text" name="" id="" placeholder="Pesquise por um filme" v-model="searchInput" @keyup="search">
            </div>

            <!-- Passar a id do filme via props para o caminho da rota -->
            <div class="cards-container" v-if="!isTyping">
                <MovieCard
                v-for="movie in movies" 
                :key="movie.id"
                :name="movie.name"
                :director="movie.director"
                :year="movie.year"
                :starring="movie.starring.join()"
                :img="movie.img"
                :id="movie.id"
                :formatted="movie.formattedName"
                />
            </div>
            <div class="cards-container" v-else>
                <MovieCard
                v-for="movie in filteredMovies" 
                :key="movie.id"
                :name="movie.name"
                :director="movie.director"
                :year="movie.year"
                :starring="movie.starring.join()"
                :img="movie.img"
                :id="movie.id"
                :formatted="movie.formattedName"
                />
            </div>
        </div>
    </div>
</template>

<script>
/* import Search from '/src/components/Search' */
import MovieCard from '/src/components/MovieCard'

export default {
    //criar camada de dados aqui (fazer o fetch), pois poderá 
    //receber dos dois filhos  via props (form e o card do filme)
    //e enviar tambem

    data(){
        return{
            movies: [],
            movie:{
                id: 0, 
                name: '', 
                year: 0, 
                director: '', 
                starring: '', 
                img: '', 
                info: '',   
                formattedName: ''
            },
            searchInput: '', 
            isTyping: true,
            filteredMovies: []
        }
    },

    watch:{
        searchInput(){
            if(this.searchInput !== ''){
                this.isTyping = true
            } else {
                this.isTyping = false
            }
        }
    },
    methods: {
        search(){
            this.filteredMovies = this.movies.filter(movie => {
                return movie.name.toLowerCase().includes(this.searchInput.toLowerCase())
            })
        } 
    },
    
    components: {
        /* Search, */
        MovieCard
    },
    created(){
        if(this.searchInput !== ''){
                console.log(this.isTyping)
                this.isTyping = true
            } else {
                this.isTyping = false
        }
        const db ="http://localhost:3000/movies"
        fetch(db)
            .then(res => res.json())
            .then(res =>{
                res.forEach(movie => {
                    this.movie.id = movie.id
                    this.movie.name = movie.name
                    this.movie.year = movie.year
                    this.movie.director = movie.director
                    this.movie.img = movie.img
                    this.movie.info = movie.info
                    this.movie.starring = movie.starring.join()
                    this.movies.push(movie)
                    this.movie.formattedName = this.movie.name.split(' ').join().replace(/,/g, '').toLowerCase()
                });  
            })
    }
    
}
</script>

<style >
#home{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    h3{
        font-weight: 400;
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: 1px;
        font-family: 'Poppins', sans-serif
    }
    
    .cards-container{
        width: 100%;
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 500px;
        padding: 0 30px 0 30px; 
        /* background-color: yellow; */ 
    }

    #search{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 90px;
        margin-bottom: 40px;

    }
    input{
        border: none; 
        padding: 8px 20px; 
        width: 100%;
        border-radius: 20px;
        background-color: #c4c4c49c;
        color: white; 
        outline: none;
    }

    input::-webkit-input-placeholder {
        color: rgb(186, 195, 207); 
        font-style: italic;
    }

</style>