import React from "react";
import './CardItem.css';

import { hideMail, formatDate, redBgColor } from "../../../../utilities/functions";

export const CardItem = (props) => {
    const { user } = props;
    return (
        <div className={`fdsfff`}>
            <img src={user.picture.large} alt ='img of user'/>
            <div className='info'>
                <p> {user.name.first} {user.name.last}</p>
                <p> email: {hideMail(user.email)}</p>
                <p> date of birth: {formatDate(user.dob.date)}</p>
            </div>
        </div>

    )
}

export default UserCardItem;