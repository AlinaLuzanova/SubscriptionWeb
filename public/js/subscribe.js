const subButtonsWrap = document.querySelectorAll(".subscribeBTNWrap");
const unSubButtonsWrap = document.querySelectorAll(".unsubscribeBTNWrap");

subButtonsWrap?.forEach((wrap) => {
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
        if (
          wrap.previousElementSibling.innerText.includes(
            "Amount of subscribers",
          )
        ) {
          wrap.previousElementSibling.innerText = `${wrap.previousElementSibling.innerText.split(": ")[0]}: ${Number(wrap.previousElementSibling.innerText.split(": ")[1]) + 1}`;
          wrap.firstElementChild.classList.remove("subscribeBTN");
          wrap.firstElementChild.classList.add("unsubscribeBTN");
          wrap.firstElementChild.textContent = "Unsubscribe";
          wrap.classList.remove("subscribeBTNWrap");
          wrap.classList.add("unsubscribeBTNWrap");
        }
      }
    }
  });
});
unSubButtonsWrap?.forEach((wrap) => {
  wrap.addEventListener("click", async (event) => {
    if (event.target.nodeName === "BUTTON") {
      const dataUrl = event.target.dataset.url;
      const response = await fetch(dataUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (data.text === "OK") {
        if (
          wrap.previousElementSibling.innerText.includes(
            "Amount of subscribers",
          )
        ) {
          wrap.previousElementSibling.innerText = `${wrap.previousElementSibling.innerText.split(": ")[0]}: ${Number(wrap.previousElementSibling.innerText.split(": ")[1]) - 1}`;
          wrap.firstElementChild.classList.remove("unsubscribeBTN");
          wrap.firstElementChild.classList.add("subscribeBTN");
          wrap.firstElementChild.textContent = "Subscribe";
          wrap.classList.remove("unsubscribeBTNWrap");
          wrap.classList.add("subscribeBTNWrap");
        } else {
          let editElem =
            wrap.parentElement.parentElement.parentElement.nextElementSibling
              .innerText;
          let feeAmount =
            wrap.previousElementSibling.firstElementChild.innerText
              .split(" - ")[1]
              .split("$")[0];
          console.log(editElem);
          console.log(feeAmount);
          editElem = `${editElem.split(": ")[0]}: ${Number(editElem.split(": ")[1].split("$")[0]) - Number(feeAmount)}$`;
          wrap.parentElement.parentElement.parentElement.nextElementSibling.innerText =
            editElem;
          wrap.parentElement.remove();
        }
      }
    }
  });
});
