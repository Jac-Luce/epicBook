// API lista dei libri: https://striveschool-api.herokuapp.com/books

// Creazione card con all'interno i libri

function createCard() {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then (json => {
        let book = json;
         book.forEach(element => {
            //creazione card
            let images = document.getElementById("images");
            images.classList.remove('d-none');
            let card = document.createElement('div');
            card.classList=['card'];
            let cardBody = document.createElement('div');
            cardBody.classList = ['card-body'];
            let newImages = document.createElement('img');
            newImages.classList =['img-fluid'];
            newImages.src = element.img; //inserimento img dalla fetch
            let bookTitle = document.createElement('h6');
            bookTitle.innerText= element.title; //inserimento titolo
            cardBody.appendChild(newImages);
            cardBody.appendChild(bookTitle);
            card.appendChild(cardBody);
            images.appendChild(card);
            //creazione bottoni carrello e salta
            let divBtn = document.createElement('div');
            divBtn.classList = ['d-flex'];
            let cartBtn = document.createElement('button');
            cartBtn.classList = ['btn'];
            let skipBtn = document.createElement('button');
            skipBtn.classList = ['btn'];
            cartBtn.insertAdjacentHTML('beforeend', '<i class="fas fa-shopping-cart"></i>');
            skipBtn.insertAdjacentHTML('beforeend', '<i class="fas fa-angle-right"></i>');
            divBtn.appendChild(cartBtn);
            divBtn.appendChild(skipBtn);
            cardBody.appendChild(divBtn);
            
        });
       
    })
    .catch(err => console.log(err))
}

createCard();

// Barra di ricerca

const inputSearch = document.getElementById('inputSearch');

function searchResult() {
    
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(json => filterSearch(json))
    .catch(err => console.log(err))
}

function filterSearch(){
    let searchValue = inputSearch.value;
    searchValue.filter(() => {
        document.addEventListener('keydown', (event) => {

        })
    })
}