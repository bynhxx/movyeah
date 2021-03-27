<template>
    <div id="movie-details">
        <div class="detail-card">
            <div class="img">
                <img :src="movieDetail.img" alt="">
            </div>
            <div class="info">
                <h3>{{movieDetail.name}}</h3>
                <span><strong>Diretor:</strong> {{movieDetail.director}} </span>
                <span>
                    <strong>Starring: </strong>
                    {{movieDetail.starring}}
                </span> 
                <p>
                {{movieDetail.info}}
                </p>
            </div>
            <div class="addButtons">
                <button @click="addToMoviesIHate()">
                    <svg id="light" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                        <title>puke2</title>
                        <path d="M410.88,456.75a10.66,10.66,0,0,1-6.72-18.94A233.11,233.11,0,0,0,490.67,256C490.67,126.61,385.39,21.33,256,21.33S21.33,126.61,21.33,256a233.24,233.24,0,0,0,86.31,181.59,10.66,10.66,0,0,1-13.46,16.53A254.38,254.38,0,0,1,0,256C0,114.84,114.84,0,256,0S512,114.84,512,256a254.19,254.19,0,0,1-94.42,198.36A10.45,10.45,0,0,1,410.88,456.75Z" transform="translate(0 0)"/><path d="M138.67,256a10.67,10.67,0,0,1-5.91-19.54l50.69-33.79-50.69-33.79a10.66,10.66,0,0,1,11.82-17.75l64,42.67a10.66,10.66,0,0,1,0,17.75l-64,42.67a10.55,10.55,0,0,1-5.91,1.79Z" transform="translate(0 0)"/><path d="M373.33,256a10.55,10.55,0,0,1-5.91-1.79l-64-42.67a10.66,10.66,0,0,1,0-17.75l64-42.67a10.66,10.66,0,1,1,11.82,17.75l-50.69,33.79,50.69,33.79A10.67,10.67,0,0,1,373.33,256Z" transform="translate(0 0)"/><path d="M362.67,400.43H309.33a10.67,10.67,0,1,1,0-21.33h37a100.91,100.91,0,0,0-43.18-42.56c-29-15.49-65.17-15.59-95.51.55a102.15,102.15,0,0,0-42,42h37a10.67,10.67,0,1,1,0,21.33H149.33a10.65,10.65,0,0,1-10-14.21,123.32,123.32,0,0,1,58.37-67.95c36.57-19.5,80.49-19.31,115.43-.64a122.24,122.24,0,0,1,59.65,68.59,10.65,10.65,0,0,1-10.07,14.21Z" transform="translate(0 0)"/><path d="M412.93,512H99a31.9,31.9,0,0,1-26.56-14.21,32.26,32.26,0,0,1-3-30.27c21.87-53.29,92.78-48,122.56-43.16V327.64a10.67,10.67,0,1,1,21.33,0v109.7a10.69,10.69,0,0,1-4.1,8.41,10.57,10.57,0,0,1-9.13,2c-.9-.21-90.54-21.67-110.93,28a10.72,10.72,0,0,0,1,10.28A10.5,10.5,0,0,0,99,490.67H412.95a10.59,10.59,0,0,0,8.87-4.76,10.8,10.8,0,0,0,1-10.26C402.43,426.39,313,448.79,312,449a10.7,10.7,0,0,1-13.35-10.33v-111a10.67,10.67,0,1,1,21.33,0v97.86c29.82-5.12,100.57-11.09,122.52,41.9A32.19,32.19,0,0,1,412.93,512Z" transform="translate(0 0)"/>
                    </svg>
                    Never Again 
                </button>
                <button @click="addToFavoriteList">
                    <svg 
                        viewBox="0 0 23 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6372 0C15.4078 0 14.2808 0.389557 13.2873 1.15788C12.3349 1.89447 11.7008 2.83265 11.3274 3.51487C10.9541 2.83261 10.32 1.89447 9.36757 1.15788C8.37411 0.389557 7.24704 0 6.0177 0C2.58708 0 0 2.80606 0 6.52717C0 10.5473 3.22757 13.2977 8.11367 17.4616C8.94341 18.1687 9.88389 18.9702 10.8614 19.825C10.9903 19.9379 11.1558 20 11.3274 20C11.4991 20 11.6646 19.9379 11.7935 19.8251C12.7711 18.9701 13.7115 18.1687 14.5417 17.4612C19.4273 13.2977 22.6549 10.5473 22.6549 6.52717C22.6549 2.80606 20.0678 0 16.6372 0Z"/>
                        </svg>
                    Favorite
                </button>
                <button @click="addToWatchList">
                    <svg 
                        viewBox="0 0 28 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                        d="M2.82635 0C1.26525 
                        0 0 1.22091 0 2.72726C0 4.2336 
                        1.26525 5.45456 2.82635 5.45456C4.3874 
                        5.45456 5.65265 4.23365 5.65265 
                        2.72726C5.65265 1.22087 4.3874 0 
                        2.82635 0ZM2.82635 7.2727C1.26525 7.2727 
                        0 8.49365 0 10C0 11.5064 1.26525 12.7273 
                        2.82635 12.7273C4.3874 12.7273 5.65265 
                        11.5064 5.65265 10C5.65265 8.49365 4.3874 
                        7.2727 2.82635 7.2727ZM2.82635 14.5455C1.26525 
                        14.5455 0 15.7664 0 17.2727C0 18.7791 1.26525 20 
                        2.82635 20C4.3874 20 5.65265 18.7791 5.65265 
                        17.2727C5.65265 15.7664 4.3874 14.5455 2.82635 
                        14.5455ZM10.3632 4.54544H25.4368C26.4779 4.54544 
                        27.3211 3.73179 27.3211 2.72726C27.3211 1.72273 
                        26.4779 0.909071 25.4368 0.909071H10.3632C9.32215 
                        0.909071 8.47895 1.72273 8.47895 2.72726C8.47895 
                        3.73179 9.32215 4.54544 10.3632 4.54544ZM25.4368
                        8.18181H10.3632C9.32215 8.18181 8.47895 8.99547 
                        8.47895 10C8.47895 11.0045 9.32215 11.8182 10.3632 
                        11.8182H25.4368C26.4779 11.8182 27.3211 11.0045 27.3211 
                        10C27.3211 8.99547 26.4779 8.18181 25.4368 
                        8.18181ZM25.4368 15.4546H10.3632C9.32215 15.4546 8.47895 16.2682 
                        8.47895 17.2727C8.47895 18.2772 9.32215 19.0909 10.3632 
                        19.0909H25.4368C26.4779 19.0909 27.3211 18.2772 27.3211 
                        17.2727C27.3211 16.2682 26.4779 15.4546 25.4368 15.4546Z" 
                        />
                    </svg>
                    Watch List
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            movieDetail: {},
        }
    },
    created(){
        const movie = `http://localhost:3000/movies/${this.id}`
        fetch(movie)
            .then(res => res.json())
            .then(res => {
                this.movieDetail = res
            })
    },
    methods: {
        addToFavoriteList(){
            let minhaLista = localStorage.getItem('myFilm')
            let filmes = JSON.parse(minhaLista) || []

            const hasFilm = filmes.some((filme) => filme.id === this.movieDetail.id)
            if(hasFilm){
                return;
            }

            filmes.push(this.movieDetail)
            localStorage.setItem('myFilm', JSON.stringify(filmes))

            alert('Filme adicionado à sua lista de favoritos.')

        }, 
        addToWatchList(){
            let myWatchList = localStorage.getItem('toWatch')
            let moviesIwannaWatch = JSON.parse(myWatchList) || []

            const hasFilm = moviesIwannaWatch.some((movie) => {
                return movie.id === this.movieDetail.id
            })
            if(hasFilm){
                return ; 
            }
            
            moviesIwannaWatch.push(this.movieDetail)
            localStorage.setItem('toWatch', JSON.stringify(moviesIwannaWatch))
            alert('Filme adicionado à sua lista de filmes a assistir')
        },
        addToMoviesIHate(){
            
            let myHatedList = localStorage.getItem('moviesIHate')
            let moviesIHated = JSON.parse(myHatedList) || []

            const hasFilm = moviesIHated.some((movie) => {
                return movie.id === this.movieDetail.id
            })
            if(hasFilm){
                return ;
            }            
            moviesIHated.push(this.movieDetail)
            localStorage.setItem('moviesIHate', JSON.stringify(moviesIHated))

            alert('Filme adicionado à lista dos filmes que odiou.')

        }

    }
}
</script>

<style scoped>

    #movie-details{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;        
    }

    .detail-card{
        background-color: #0b1922;
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 500px;
        padding: 30px; 
        align-items: center;
        border-radius: 5px;
        margin-bottom: 40px;
    }

    .img{
        width: 50%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    img{
        border-radius: 5px;
    }

    .info{
        display: flex;
        flex-direction: column;
    }

    h3{
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    span{
        font-size: 0.9rem;
        margin-bottom: 10px;
    }

    p{
        font-size: 0.9rem;
    }

    .addButtons{
        margin-top: 40px;
        display: flex;
        width: 100%;
        justify-content:start;
    }

    button{
        background-color: #FA3E60;
        color: white; 
        padding: 5px 10px; 
        border: none;
        border-radius: 4px;
        transition: all .1s;
        font-size: 14px;
        letter-spacing: 0.8px;
        outline: none;
        display: flex;
        align-items: center;
    }

    button:not(button:nth-of-type(1)){
        margin-left: 15px;
    }

    button:hover{
        background-color: #a70c28;
        cursor: pointer;
        
        
    }
    svg{
        fill: white;
        transition: all .3s;
        height: 12px;
        width: auto;
        margin-right: 4px;
    }

</style>