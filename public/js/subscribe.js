const subButtonsWrap = document.querySelectorAll(".subscribeBTNWrap");
const unSubButtonsWrap = document.querySelectorAll(".unsubscribeBTNWrap");

subButtonsWrap.forEach((wrap) => {
  wrap.addEventListener("click", async (event) => {
    if (event.target.nodeName === "BUTTON") {
      const dataUrl = event.target.dataset.url;
      const response = await fetch(dataUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channelId: event.target.dataset.id }),
      });
      const data = await response.json();
      if (data.text === "OK") {
        wrap.firstElementChild.classList.remove("subscribeBTN");
        wrap.firstElementChild.classList.add("unsubscribeBTN");
        wrap.firstElementChild.textContent = "Unsubscribe";
        wrap.classList.remove("subscribeBTNWrap");
        wrap.classList.add("unsubscribeBTNWrap");
        location.reload();
      }
    }
  });
});
unSubButtonsWrap.forEach((wrap) => {
  wrap.addEventListener("click", async (event) => {
    if (event.target.nodeName === "BUTTON") {
      const dataUrl = event.target.dataset.url;
      const response = await fetch(dataUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.text === "OK") {
        wrap.firstElementChild.classList.remove("unsubscribeBTN");
        wrap.firstElementChild.classList.add("subscribeBTN");
        wrap.firstElementChild.textContent = "Subscribe";
        wrap.classList.remove("unsubscribeBTNWrap");
        wrap.classList.add("subscribeBTNWrap");
        location.reload();
      }
    }
  });
});
