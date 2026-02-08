// Auto-rotating quotes
let quoteIndex = 0;

function rotateQuotes() {
  const quoteText = document.getElementById("book-quote");
  const quoteAuthor = document.getElementById("quote-author");

  quoteText.textContent = `“${quotes[quoteIndex].text}”`;
  quoteAuthor.textContent = `– ${quotes[quoteIndex].author}`;

  quoteIndex = (quoteIndex + 1) % quotes.length;
}

setInterval(rotateQuotes, 4000);
rotateQuotes();

// Author of the Day
function setAuthorOfTheDay() {
  const today = new Date().getDate();
  const author = authors[today % authors.length];

  document.getElementById("author-name").textContent = author.name;
  document.getElementById("author-desc").textContent = author.description;
}

setAuthorOfTheDay();

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Newsletter subscription
const subscribeBtn = document.getElementById("subscribe-btn");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (email === "") {
      alert("Please enter an email address");
      return;
    }

    localStorage.setItem("newsletterEmail", email);
    alert("Subscribed successfully!");
    emailInput.value = "";
  });
}

