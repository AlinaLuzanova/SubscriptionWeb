const newSubForm = document.forms["newSubForm"];

newSubForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formData = Object.fromEntries(new FormData(newSubForm));
    const response = await fetch("/api/subscriptions/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    switch (response.status) {
      case 200:
        alert("Subscription created!");
        window.location.href = "/profile";
        break;
      case 400:
        alert("Channel already exists");
        break;
      case 401:
        alert("Invalid image URL");
        break;
      case 500:
        alert("Server Error. Please try again later.");
        break;
      default:
        console.log("Unexpected Error");
    }
  } catch (err) {
    console.log(err.message);
  }
});
