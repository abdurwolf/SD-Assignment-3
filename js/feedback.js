const feedbackForm = document.getElementById("feedbackForm");
const confirmationMessage = document.getElementById("confirmationMessage");

confirmationMessage.style.display = "none";

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  const feedbackData = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  const savedFeedback =
    JSON.parse(localStorage.getItem("feedback")) || [];

  savedFeedback.push(feedbackData);
  localStorage.setItem("feedback", JSON.stringify(savedFeedback));

  feedbackForm.reset();
  confirmationMessage.style.display = "block";
});
