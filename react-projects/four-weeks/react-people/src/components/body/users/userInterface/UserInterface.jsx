import React, { useEffect } from 'react';

import ListItems from '../listItems/ListItem.jsx';
import CardItems from '../cardItems/CardItem.jsx';

import { UserService } from '../../../../services';

import './UserInterface.css';

import { Loading } from '../../helpers/loading/Loading.jsx';
import { NoResultPage } from '../../helpers/noResultPage/NoResultPage.jsx';

export const UserInterface = (props) => {
    const { aaa } = props;
    useEffect (
        () => {
            if (window.localStorage.getItem('areYouFirstTimeHere')===null) {
                UserService().then(( users) => {
                    setUsers(users);
                    setIsLoading(false);
                });
            } else if(window.localStorage.getItem('areYouFirstTimeHere')==='beenHereBefore'){
                UserService().then((users) => {
                    let parsedArray;
                    let savedArray = window.localStorage.getItem('arrayOfUsers');
                    if(savedArray && savedArray.length) {
                        parsedArray = JSON.parse(savedArray)
                    }
                    setUsers(parsedArray);
                    setIsLoading(false);
                });
            }
            window.localStorage.setItem('areYouFirstTimeHere', 'beenHereBefore');
        },
        [setUsers, 
        setIsLoading]
    );

    if (isLoading) return <Loading />;

    let arrayOfUsers = users.filter((elem) => {
        if (searchTerm === '') {
            return elem;
        } else if (
            elem.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            elem.name.last.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return elem;
        }
        return null;
    }) ;
    window.localStorage.setItem('arrayOfUsers', JSON.stringify(arrayOfUsers))

    let countMan = 0;
    let countFam = 0;

    let component = <NoResultPage />;
    if (arrayOfUsers.length) {
        component = arrayOfUsers.map((user, index) => {
            (user.gender === 'female') ? countFam++ : countMan++

        return switchState ? <ListItems /> : <CardItems />
        });
    }

    return (
        <div className='containerMain'>
            <div className='countingGender'>Male : {countMan} Female: {countFam}</div>
            {component}
        </div>
    )
}

export default UserInterface;