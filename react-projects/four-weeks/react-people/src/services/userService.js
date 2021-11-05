export const getUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then(response => {
            return response.json()
        })
}

//nedostaje drugi then... obnovi fetch