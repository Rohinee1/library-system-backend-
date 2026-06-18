async function loadDashboard(){

const response = await fetch(
"https://YOUR-BACKEND.onrender.com/api/dashboard"
);

const data = await response.json();

document.getElementById("booksCount").innerText =
data.books;

document.getElementById("membersCount").innerText =
data.members;

document.getElementById("issuedCount").innerText =
data.issued;

document.getElementById("fineCount").innerText =
data.fines;
}

loadDashboard();