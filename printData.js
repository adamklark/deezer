
//Je crée des var pour selectioner mais elements et les réutiliser plus tard//

const albumList = document.querySelector(".album-list");
const listeTitre = document.querySelector('ul');

// const test = "coucou c'est Adam";


//Je crée une fonction qui contien mon tableau//
// Met mon argument qui equivaut a data [x] 

albumList.insertAdjacentHTML('beforeend', '<div></div>');
albumList.insertAdjacentHTML('beforeend', '<div></div>');
let child = albumList.childNodes;
console.log(child)

child.forEach(element => {
    element.classList.add('card');
    element.insertAdjacentHTML('beforeend', '<img  class = "card-img-top">')
    element.insertAdjacentHTML('beforeend', '<div class = "card-body">')
});


/*  const listTitreAlbum = () => {
    data.forEach((album) => {
        listeTitre.insertAdjacentHTML('beforeend','<li>' + album.title + '</li>');//J'addition mon text plus contenue du variable
        });
} */

//Je déclare ma foction/
/*   listTitreAlbum();   */








/* const listImageAlbum = () =>{
     data.forEach((images) => {
         albumList.insertAdjacentHTML('beforeend', `<img src="${images.album.cover_medium}">`);
     });
 }
 listImageAlbum();
 */


 //Je parcours mon tableau pour acceder a tous les trancklist 
/*  const tracklist = data.forEach((album) => {
     console.log(album.album.tracklist)
 });
 */


 //Essaie
/* data.forEach((album) => {
    console.log(album.title);
    }); 
 */
/*  console.log(data[0].artist.name)
        function ajout() {
            document.querySelector('ul').innerHTML += "";
        }   */