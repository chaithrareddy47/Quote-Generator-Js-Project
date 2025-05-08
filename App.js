// https://jacintodesign.github.io/quotes-api/data/quotes.json

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector('#btn')
const loader = document.querySelector('.loader')


let randomQuote = []

// here we are fetching data from the api 
async function getData() {
  const response = await fetch(
    "https://jacintodesign.github.io/quotes-api/data/quotes.json"
  );

  const data = await response.json();

  // console.log(data);
  // We fetched the data from the API and stored it in randomQuote.
  randomQuote = data;
  console.log(randomQuote);
//   if (!randomData) {
//   loader.classList.add('loader')
//   } else {
//     loader.classList.remove('loader')
// }
  randomData();
}

// geting random quote form the api

function randomData() {
  //Then we generated a random index (e.g., between 0 and 1599).
  const randomIndex = Math.floor(Math.random() * randomQuote.length);
  console.log(randomIndex);

  //Finally, we used that index to access one item from the randomQuote array — that’s the quote we display.

  const selectQuote = randomQuote[randomIndex];
  console.log(selectQuote);


  
   quote.textContent = selectQuote.text;
   author.textContent = selectQuote.author;

    
}
function nextQuoteBtn() {
  console.log("btn clicked");
  randomData();
}

button.addEventListener('click', nextQuoteBtn)
// randomData()




getData()