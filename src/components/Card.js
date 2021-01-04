import React from 'react'

function Card(props) {
    const { movie } = props;
    return (
        <div className="card">
            <figure className="image is-48x48">
                <img src={movie.Poster} alt={movie.Title}></img>
            </figure>
            <h4 className="card__title">{movie.Title} </h4>
            <span className="card__year"> Year: {movie.Year}</span>

        </div>
    )
}

export default Card
