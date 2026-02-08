// Ambient sound
const audio = new Audio("assets/sounds/cozy.wav");
audio.loop = true;

// Play sound
document.getElementById("playSound").addEventListener("click", () => {
  audio.play();
});

// Pause sound
document.getElementById("pauseSound").addEventListener("click", () => {
  audio.pause();
});

// Completed books
const bookInput = document.getElementById("completedBookInput");
const addBookBtn = document.getElementById("addCompletedBook");
const bookList = document.getElementById("completedBooksList");

// Load saved books
window.addEventListener("load", () => {
  const savedBooks = JSON.parse(localStorage.getItem("completedBooks")) || [];
  savedBooks.forEach(addBookToList);
});

// Add new book
addBookBtn.addEventListener("click", () => {
  const bookName = bookInput.value.trim();
  if (bookName === "") return;

  addBookToList(bookName);

  const savedBooks = JSON.parse(localStorage.getItem("completedBooks")) || [];
  savedBooks.push(bookName);
  localStorage.setItem("completedBooks", JSON.stringify(savedBooks));

  bookInput.value = "";
});

// Helper function
function addBookToList(name) {
  const li = document.createElement("li");
  li.textContent = name;
  bookList.appendChild(li);
}
