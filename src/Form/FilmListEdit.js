import React from 'react';
import './FormStyles/FilmListEdit.scss';

export default function FilmListEdit({ film, handleFilmChange }) {

    function handleChange(changes) {
        handleFilmChange(film.id, { ...film, ...changes })
    }

    return (
        <>
            <input type="text" onInput={(e) => handleChange({ name: e.target.value })} value={film.name} />
            <button>&times;</button>
        </>
    )
}
