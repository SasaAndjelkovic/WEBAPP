import React from 'react';

import { hideMail, formatDate } from '../../utilities/Functions';

export const List = (props) => { 
    const { user } = props;
    return (
    <div>
        <img src={user.picture.thumbnail} alt='' />
        <p> name: {user.name.first}</p>
        <p> date of birth: {formatDate(user.dob)}</p>
        <p> email: {hideMail(user.email)}</p>
    </div>
    )}