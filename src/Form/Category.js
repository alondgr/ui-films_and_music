import React, { useContext } from 'react';
import FilmList from './FilmList';
import { CategoryContext } from './Form';
import './FormStyles/Category.scss';

export default function Category({ name, id, films }) {

    const { handleCategoryDelete, handleCategorySelect } = useContext(CategoryContext)

    return (
        <div className='category'>
            <div>
                <h3>{name}</h3>
                <span>
                    <FilmList films={films} />
                </span>
            </div>
            <div>
                <button className='btn-category_edit' onClick={() => handleCategorySelect(id)}>Edit</button>
                <button className='btn-category_delete' onClick={() => handleCategoryDelete(id)}>Delete</button>
            </div>
        </div>
    )
}
