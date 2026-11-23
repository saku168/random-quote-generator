const quotes = [
  ["Great things are done by a series of small things brought together.", "Vincent van Gogh"],
  ["It always seems impossible until it's done.", "Nelson Mandela"],
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["Simplicity is the ultimate sophistication.", "Leonardo da Vinci"],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"]
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#newQuote");
let previousIndex = -1;

function showRandomQuote() {
  if (!quote || !author || quotes.length === 0) return;

  let index = Math.floor(Math.random() * quotes.length);
  if (quotes.length > 1) {
    while (index === previousIndex) {
      index = Math.floor(Math.random() * quotes.length);
    }
  }

  previousIndex = index;
  quote.textContent = `“${quotes[index][0]}”`;
  author.textContent = `— ${quotes[index][1]}`;
}

button?.addEventListener("click", showRandomQuote);
showRandomQuote();