// Area dei risultati
const images = document.getElementById('images');

// Funzione dei risultati
let listBook;
function getResult(){
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(json => cycleResp(json = listBook))
    .catch(err => console.log(err))
}

//Funzione per ciclare l'array di libri
function cycleResp(book){
    images.classList.remove('d-none');
    images.innerHTML = "";
    book.forEach((element) => {
        createCard(element);
    });
}

//Funzione per creare le card
function createCard(element){
    
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
}

// Barra di ricerca
const inputSearch = document.getElementById('inputSearch');
function filterSearch(){
    if(listBook){
        let searchValue = inputSearch.value;
        let filterResult = listBook.filter((element) => {
            return element.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        createCard(filterResult);
    }
}

getResult();