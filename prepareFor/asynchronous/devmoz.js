//1.
const hello = () => 'Hello';

console.log(hello());  // -> Hello

//2. 
const hello = async() => 'Hello';

console.log(hello()); // -> Promise { 'Hello' }

//3. 
const hello = async() => 'Hello';

hello().then((value)=>console.log(value));  // -> Hello

//4. 
const hello = async() => 'Hello';

hello().then(console.log);  // -> Hello

//5. 
const hello = async() => await Promise.resolve('Hello');

hello().then(console.log);

//6. Nema vise then blokova
const myFetch = async() => {
    let response = await fetch('coffee.jpg');

    //responce, jedan od WEB API interfejsa, tj. tipa objekata
    if(!response.ok) {     /* responce property - svojstvo ok je samo za citanje interfejsa Responce, 
        sadrzi Boolean koji navodi da je odgovor bio uspesan (status u opsegu 200-229) ili ne */
        throw new Error('HTTP error! status: ${response.status}');
        /* takodje svojstvo koji sadrzi HTTP statusne kodove odgovora. Na primer, 200 za uspeh, 
        a 404 ako se resurs ne moze pronaci*/
    }
    
    let myBlob = await response.blob(); /*metoda koja uzima tok odgovora i cita ga do kraja. 
                                         Vraca promise koji se resava Blob-om*/

    let objectURL = URL.createObjectURL(myBlob); //createObjectURL je iz HTML DOM
    let image = document.createElement('img'); //createElement je iz HTML DOM
    image.src = objectURL;
    document.body.appendChild(image); //apendChild je iz HTML DOM

}

myFetch()
.catch(e => {
    console.log('There has been a problem with your fetch operation:' + e.message)
});

//7. druga polovina funkcije u novi blok, da bi je ucinili fleksibilnijom
const myFetch = async() => {
    let response = await fetch('coffee.jpg');
    if (!response.ok) {
        throw new Error(`HTTP error!status:${response.status}`);
    }
    return await response.blob();
}

myFetch().then((blob) => {   
    let objectURL = URL.createObjectURL(blob); //Blob
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).catch(e=>console.log(e));

