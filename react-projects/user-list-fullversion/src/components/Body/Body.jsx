import React from 'react';
import { useState } from 'react';

import { data } from '../../data/data';

import { List } from './List.jsx';
import { Card } from './Card.jsx';

export const Body = () => {
    
    const [selected, setSelected] = useState (false);
    
    const onClick = () => setSelected(!selected);

    return (
        <>
            <button onClick = {onClick}>Switch view</button>
            {data.map((user) => selected ? <List user={user}/>:<Card user={user} />)}
        </>
    )

}



