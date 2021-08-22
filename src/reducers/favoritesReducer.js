import {ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/movieActions.js';

const initialState = {
    movies: [],
    displayFavorites: true
}

const addFavorite = (state, action) => {
    if(!state.movies.find(element => element.id === action.payload.id)){
        return{
            ...state,
            movies: [...state.movies, action.payload]
        }}
    else {
        return {
            ...state,
            movies: [...state.movies]
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return addFavorite(state, action);
        case REMOVE_FAVORITE:
            return{
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            };
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            };
        default:
            return state;
    }
}

export default reducer;