async function loadDashboard() {
  try {
    const response = await fetch(
      "https://library-system-backend-1-bwgk.onrender.com/api/dashboard"
    );

    const data = await response.json();

    document.getElementById("booksCount").innerText = data.books;
    document.getElementById("membersCount").innerText = data.members;
    document.getElementById("issuedCount").innerText = data.issued;
    document.getElementById("fineCount").innerText = data.fines;
  } catch (error) {
    console.error(error);
  }
}

loadDashboard();

const greeting = document.getElementById("greeting");

if (greeting) {
  const hour = new Date().getHours();

  let msg = "Welcome";

  if (hour < 12) msg = "Good Morning";
  else if (hour < 18) msg = "Good Afternoon";
  else msg = "Good Evening";

  greeting.innerText = msg;
}