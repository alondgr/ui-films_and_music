import React from 'react';
import './Avatar.scss';
import image from '../../images/td-modified.png';


export default function Avatar() {
    return (
        <div className='Avatar'>
            <img src={image} alt="Avatar" className='Avatar__image' />
        </div>
    )
}
