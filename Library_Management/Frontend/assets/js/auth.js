const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    try {
      const response = await fetch(
        "https://library-system-backend-1-bwgk.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "token",
          data.token
        );

        window.location.href =
          "../dashboard.html";
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
    }
  });
}