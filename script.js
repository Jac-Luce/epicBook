// API lista dei libri: https://striveschool-api.herokuapp.com/books

// Creazione card con all'interno i libri

let bookList;
let bookTitle;
function createCard() {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then (json => {
         bookList = json;
         let images = document.getElementById("images");
         images.classList.remove('d-none');
         images.innerHTML = "";
         bookList.forEach(element => {
            //creazione card
            let card = document.createElement('div');
            card.classList=['card'];
            card.id = element.asin;

            let cardBody = document.createElement('div');
            cardBody.classList = ['card-body'];

            let newImages = document.createElement('img');
            newImages.classList =['img-fluid'];
            newImages.src = element.img; //inserimento img dalla fetch

            bookTitle = document.createElement('h6');
            bookTitle.innerText= element.title; //inserimento titolo

            cardBody.appendChild(newImages);
            cardBody.appendChild(bookTitle);
            card.appendChild(cardBody);
            images.appendChild(card);

            //creazione bottoni carrello e salta
            let divBtn = document.createElement('div');
            divBtn.classList = ['d-flex'];

            let cartBtn = document.createElement('button');
            cartBtn.classList = ['btn cartBtn'];

            let skipBtn = document.createElement('button');
            skipBtn.classList = ['btn'];

            cartBtn.insertAdjacentHTML('beforeend', '<i class="fas fa-shopping-cart"></i>');
            skipBtn.insertAdjacentHTML('beforeend', '<i class="fas fa-angle-right"></i>');
            
            divBtn.appendChild(cartBtn);
            divBtn.appendChild(skipBtn);
            cardBody.appendChild(divBtn);

            cartBtn.addEventListener('click', () => { //aggiunge il titolo del libro al carrello
                //addCart(element);
                const cartList = document.getElementById('cart-list');
                let bookUl = document.createElement('ul');
                let bookSelect = document.createElement('li');
                bookSelect.innerText = bookTitle;
                bookUl.appendChild(bookSelect);
                cartList.appendChild(bookUl);
            })
            
            skipBtn.addEventListener('click', () => { //nasconde la card al click
                card.style.display = 'none';
            })

            // Creo link per dettagli
            let linkDet = document.createElement('a');
            linkDet.href = `dettagli.html?id=${element.asin}`; // asin serve a collegare l'altra pagina
            linkDet.innerText = "Read more...";
            divBtn.appendChild(linkDet);
        });
       
    })
    .catch(err => console.log(err))
}

createCard();

// Barra di ricerca
const inputSearch = document.getElementById('inputSearch');
function filterSearch(){
    if(bookList){
        let searchValue = inputSearch.value;
        
        let filterResult = bookList.filter((res) => {
            return res.title.toLowerCase().includes(searchValue.toLowerCase().trim());
        })
        createCard(filterResult);
    }
}
 
/* Funzione per aggiungere il titolo del libro al carrello
const cartList = document.getElementById('cart-list');

function addCart(bookBuy){
    let bookUl = document.createElement('ul');
    let bookSelect = document.createElement('li');
    bookSelect.innerHTML = bookBuy.bookTitle;
    bookUl.appendChild(bookSelect);
    cartList.appendChild(bookUl);
}
*/