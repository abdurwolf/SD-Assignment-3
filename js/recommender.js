const genreSelect = document.getElementById("genreSelect");
const lengthSelect = document.getElementById("lengthSelect");
const recommendBtn = document.getElementById("recommendBtn");
const pickAgainBtn = document.getElementById("pickAgainBtn");
const saveBtn = document.getElementById("saveBtn");

const recTitle = document.getElementById("recTitle");
const recAuthor = document.getElementById("recAuthor");
const recDesc = document.getElementById("recDesc");

let currentRecommendation = null;

function getFilteredBooks() {
  const genre = genreSelect.value;
  const length = lengthSelect.value;

  return books.filter(book => {
    const genreMatch = genre === "all" || book.genre === genre;
    const lengthMatch = book.length === length;
    return genreMatch && lengthMatch;
  });
}

function recommendBook() {
  const filteredBooks = getFilteredBooks();

  if (filteredBooks.length === 0) {
    alert("No books match your selection.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredBooks.length);
  currentRecommendation = filteredBooks[randomIndex];

  recTitle.textContent = currentRecommendation.title;
  recAuthor.textContent = currentRecommendation.author;
  recDesc.textContent = currentRecommendation.synopsis;
}

recommendBtn.addEventListener("click", recommendBook);
pickAgainBtn.addEventListener("click", recommendBook);

saveBtn.addEventListener("click", () => {
  if (!currentRecommendation) return;

  let readingList = JSON.parse(localStorage.getItem("readingList")) || [];
  readingList.push(currentRecommendation);

  localStorage.setItem("readingList", JSON.stringify(readingList));
  alert("Book saved to reading list!");
});
