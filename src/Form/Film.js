import React from 'react';
import './FormStyles/Film.scss';
export default function Film({ name, id }) {
    return (

        <ul>
            {/* <span>{id}</span> */}
            <li>{name}</li>
        </ul>
    )
}
