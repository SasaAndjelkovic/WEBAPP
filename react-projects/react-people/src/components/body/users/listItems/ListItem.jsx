import React from 'react';
import './ListItem.css';

import { hideMail, formatDate, redBgColor } from '../../../../utilities/functions';

export const ListItem = (props) => {
    const { user } = props;
    return (
        <div className={`singleElUSerLIst proveriSintaksu redBgColor`} >
            <img src={user.picture.thumbnail} alt='img of user'/>
            <div className='info'>
                <h3> {user.name.fisrt} {user.name.last}</h3>
                <h3> <span className='material-icons color'>email</span>{hideMail(user.mail)}</h3>
                <h3> <span className='material-icons color'>cake</span>{formatDate(user.dob.date)}</h3>
            </div>
        </div>
    )

}

export default ListItem;