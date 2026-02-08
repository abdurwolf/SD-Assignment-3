const form = document.getElementById("tracker-form");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const finishTime = document.getElementById("finishTime");

// Load saved progress if available
window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem("readingProgress"));

  if (savedData) {
    progressPercent.textContent = savedData.percent + "%";
    progressFill.style.width = savedData.percent + "%";
    finishTime.textContent = savedData.finishDate;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const totalPages = Number(document.getElementById("totalPages").value);
  const pagesRead = Number(document.getElementById("pagesRead").value);
  const readingSpeed = Number(document.getElementById("readingSpeed").value);

  if (pagesRead > totalPages) {
    alert("Pages read cannot be more than total pages");
    return;
  }

  const percent = Math.round((pagesRead / totalPages) * 100);
  progressPercent.textContent = percent + "%";
  progressFill.style.width = percent + "%";

  const remainingPages = totalPages - pagesRead;
  const daysNeeded = Math.ceil(remainingPages / readingSpeed);

  const finishDate = new Date();
  finishDate.setDate(finishDate.getDate() + daysNeeded);

  const finishString = finishDate.toDateString();
  finishTime.textContent = finishString;

  // Save to localStorage
  localStorage.setItem(
    "readingProgress",
    JSON.stringify({
      percent: percent,
      finishDate: finishString
    })
  );
});
