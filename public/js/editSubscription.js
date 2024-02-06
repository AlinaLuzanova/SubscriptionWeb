const { editPageForm } = document.forms;

editPageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const formData = Object.fromEntries(new FormData(editPageForm));
    const response = await fetch(event.target.dataset.url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.text === "OK") {
      alert("Successfully edited");
      window.location.href = "/profile";
    }
  } catch (e) {
    console.log(e.message);
  }
});
