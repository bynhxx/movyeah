import Vue from 'vue'; 
import Router from 'vue-router';

import Home from '../src/pages/home/Home';
import FavoriteMovies from '../src/pages/favoriteMovies/FavoriteMovies';
import MovieDetail from '../src/pages/movieDetail/MovieDetail';
import ToWatchList from '../src/pages/toWatch/ToWatchList'; 
import HatedList from '../src/pages/hated/HatedList'


Vue.use(Router)

const router = new Router({
    mode: 'history', 
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/favorite', 
            component: FavoriteMovies
        }, 
        {
            path: '/details/:id', 
            component: MovieDetail,
            props: true
        }, 
        {
            path: '/watchlist',
            component: ToWatchList
        }, 
        {
            path: '/hated',
            component: HatedList
        }

    ]
})

export default router; 