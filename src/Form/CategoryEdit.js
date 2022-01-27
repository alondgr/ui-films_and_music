import React, { useContext } from 'react';
import FilmListEdit from './FilmListEdit';
import { CategoryContext } from './Form';
import './FormStyles/CategoryEdit.scss';

export default function CategoryEdit({ category }) {

    const { handleCategoryChange, handleCategorySelect } = useContext(CategoryContext);

    function handleChange(changes) {
        handleCategoryChange(category.id, { ...category, ...changes })
    }

    function handleFilmChange(id, film) {
        const newFilms = [...category.films]
        const index = newFilms.findIndex(f => f.id === id)
        newFilms[index] = film;
        handleChange({ films: newFilms });
    }


    return (
        <div className='category-edit'>
            <div>
                <button className='btn-close-submit' onClick={() => handleCategorySelect(undefined)}>X</button>
            </div>
            <div className='category-edit_details-grid'>
                <label htmlFor='name' className='category-edit_label'>Category</label>
                <input type="text" className='recipe-edit_input' name='name' id="name" value={category.name}
                    onInput={e => handleChange({ name: e.target.value })} />
            </div>
            <br />
            <label>list</label>
            <div>
                {category.films.map(film => (
                    <FilmListEdit key={film.id} film={film} handleFilmChange={handleFilmChange} />
                ))}
            </div>

        </div>
    )
}
