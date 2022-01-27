import React, { useContext } from 'react';
import './HeaderProfile.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../App';


export default function HeaderProfile() {
    const { user } = useContext(UserContext);
    return (
        <div className='HeaderProfile'>
            <div>{user.username}</div>
            <Avatar />
        </div>
    )
}

// 'https://www.nicepng.com/png/detail/196-1962850_bleed-area-may-not-be-visible-clint-eastwood.png'