import React from 'react';

import { hideMail, formatDate } from '../../utilities/functions';

export const ListItem = (props) => {
    const { user } = props;
    return ( 
        <div>
            <img src={user.picture.thumbnail} alt=''/>
            <p> name: {user.name.first}</p>
            <p> date of birth: {formatDate(user.dob.date)}</p>
            <p> email: {hideMail(user.email)}</p>
        </div>
    )
}