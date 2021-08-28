export const getUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then(response => {
            return response.json()
        }).then(dataObject => dataObject.results);       //ovo je dodatak zbog search liste
}