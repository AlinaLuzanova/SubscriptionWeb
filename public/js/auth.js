const loginForm = document.forms["login-form"];
const registerForm = document.forms["register-form"];

loginForm?.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const body = new FormData(loginForm);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(body)),
    });
    const data = await response.json();
    switch (response.status) {
      case 200:
        window.location.href = "/profile";
        alert("Successful!");
        break;
      case 404:
        alert(data.message);
        break;
      case 500:
        alert("Internal Server Error");
        break;
      default:
        console.error("Unexpected Error:", data.error);
    }
  } catch (err) {
    console.error("Network Error:", err.message);
  }
});

registerForm?.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const body = new FormData(registerForm);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(body)),
    });
    const data = await response.json();
    switch (response.status) {
      case 200:
        window.location.href = "/profile";
        alert("Successful!");
        break;
      case 404:
        alert(data.message);
        break;
      case 500:
        alert("Internal Server Error");
        break;
      default:
        console.error("Unexpected Error:", data.error);
    }
  } catch (err) {
    console.error("Network Error:", err.message);
  }
});
