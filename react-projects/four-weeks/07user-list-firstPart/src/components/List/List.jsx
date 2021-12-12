import React from "react";
import { data } from '../../data/data.js';
// import { Mail } from './Mail.jsx';
// import { FormatDob } from './FormatDob.jsx';

// import { hideMail, formatDate } from '../../utilities/functions';

import './List.css';

export const List = () => (
     <div className = 'userList'>
          {data.map((post, index) => ( 
            <div className = 'userItem' key = {index}>
               <img src={post.picture.thumbnail} alt="" /> 
               <p> name: {post.name.first}</p>
               <p> date of birth: {post.dob}</p>
               <p> email: {post.email}</p>
            </div> 
          ))}
     </div>
);



