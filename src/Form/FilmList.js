import React from 'react';
import Film from './Film';

export default function FilmList({ films }) {

    const filmElements = films.map(film => {
        return <Film key={film.id} {...film} />
    })

    return (
        <div>
            {filmElements}
        </div>
    )
}

