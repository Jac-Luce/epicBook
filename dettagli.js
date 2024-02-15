// Endpoint 
let urlDettagli = 'https://striveschool-api.herokuapp.com/books/';

// Params
let activeParams = window.location.search;
const params = new URLSearchParams(activeParams);
const bookId = params.get('id');

let dettagli;
fetch(`${urlDettagli}${bookId}`)
.then((response) => response.json())
.then((json) => {
    dettagli = json;
    console.log(dettagli);
    let titleBook = document.querySelector('.title');
    titleBook.innerText = "Titolo:" + dettagli.title;
    let categoryBook = document.querySelector('.category');
    categoryBook.innerText = "Categoria:" + dettagli.category;
    let priceBook = document.querySelector('.price');
    priceBook.innerText = "Prezzo:" + dettagli.price;
})
.catch((err) => console.log(err))