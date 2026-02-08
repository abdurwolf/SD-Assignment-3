const bookGrid = document.getElementById("book-grid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

const modal = document.getElementById("bookModal");
const closeBtn = document.querySelector(".close-btn");

function displayBooks(bookList) {
  bookGrid.innerHTML = "";

  bookList.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p><strong>${book.genre}</strong></p>
    `;

    card.addEventListener("click", () => openModal(book));
    bookGrid.appendChild(card);
  });
}

function openModal(book) {
  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalSynopsis").textContent = book.synopsis;

  const seriesList = document.getElementById("modalSeries");
  seriesList.innerHTML = "";

  if (book.series.length === 0) {
    seriesList.innerHTML = "<li>No sequels or prequels</li>";
  } else {
    book.series.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      seriesList.appendChild(li);
    });
  }

  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

searchInput.addEventListener("input", () => {
  filterBooks();
});

genreFilter.addEventListener("change", () => {
  filterBooks();
});

function filterBooks() {
  const searchText = searchInput.value.toLowerCase();
  const genre = genreFilter.value;

  const filtered = books.filter(book => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);

    const matchesGenre =
      genre === "all" || book.genre === genre;

    return matchesSearch && matchesGenre;
  });

  displayBooks(filtered);
}

displayBooks(books);
