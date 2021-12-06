import React, { useState, useEffect } from 'react';

import { getUsers } from '../../services/userService';

// import { ListItem } from './ListItem.jsx';
// import { Card } from './Card';

export const Body = () => {
    const [posts, setUsers] = useState([])
    const [selected, setSelected] = useState(false);
    const [filteredUsedList, setFilteredUsedList]=useState([]);

    useEffect(() => {
        getUsers().then((posts) => { 
            setUsers(posts);
            setFilteredUsedList(posts);
        });
    },[]);

    if (posts.length === 0) return <div>Loading...</div>

    const onChange = () => setSelected(!selected);



    const filterList = (byName) => {
        let filtered = [];
        if (byName.target.name) {
            filtered = filteredUsedList.filter((item) => 
                item.name.toLowerCase().includes(byName.target.value.toLowerCase())
                );
        } else {
            filtered = filteredUsedList;
        }
        setUsers(filtered);
        };
     
  

    const refresh = () => {
        getUsers().then((posts) => {   //dodato
            setUsers(posts);
        });
    };
    



    return (
        <>
            <div className='search placeholder'>
                <input type='text' onChange={filterList} placeholder='Search users by name'/>
            </div>
            <div className='refresh'>
                <button onClick = {refresh}>Refresh</button>
            </div>
            <div className='switch buttom'>
                <button onClick = {onChange}>Switch view</button>
            </div>
            {/* {posts.results.map((user) => selected ? <ListItem user={user}/> : <Card user={user}/> )}  .results je promenio stvari */}
        </>
    );
};