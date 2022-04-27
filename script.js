const btn = document.querySelector("#button");

btn.addEventListener("click", function () {
  const body = document.body;

  if (body.classList.contains("body-day")) {
    body.classList.remove("body-day");
    body.classList.add("body-night");

    btn.classList.remove("button-day");
    btn.classList.add("button-night");

    document.title = "Good Night";
  } else {
    body.classList.remove("body-night");
    body.classList.add("body-day");

    btn.classList.remove("button-night");
    btn.classList.add("button-day");

    document.title = "Good Morning";
  }
});
