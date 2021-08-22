import React from 'react';

import { hideMail, formatDate } from "../../utilities/Functions";

export const Card = (props) => {
    const { user} = props;
    return (
        <div>
            <img src = {user.picture.large} alt='' />
            <p> name: {user.name.first} </p>
            <p> email: {hideMail(user.email)}</p>
            <p> date of birth: {formatDate(user.dob)}</p>
        </div>
    )
}