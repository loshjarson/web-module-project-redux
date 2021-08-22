import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/movieActions';

const FavoriteMovieList = (props) => {
    const {favorites, removeFavorite} = props;
    
    const handleRemove = (e, id) => {
        e.preventDefault();
        removeFavorite(id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={(e) => handleRemove(e, movie.id)}><span className="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites.movies,
    }
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);