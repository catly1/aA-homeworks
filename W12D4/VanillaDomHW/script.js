document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });


  // adding SF places as list items
  const listFormEl = document.getElementById("list-form")
  listFormEl.addEventListener("submit", e => {
    e.preventDefault();

    const resNameInputEl = document.getElementById("favorite-input")
    const resName = resNameInputEl.value;
    resNameInputEl.value = "";

    const ul = document.getElementById("sf-places");

    const li = document.createElement("li");

    li.textContent = resName;

    ul.appendChild(li);

  });

  // --- your code here!

  const photoForm = document.getElementsByClassName("photo-form-container")[0]
  const toggleButton = (e) => {

      photoForm.classList.toggle("hidden")

  }
  const button = document.getElementsByClassName("photo-show-button")[0]

  button.addEventListener("click", toggleButton)

  photoForm.addEventListener("submit", e => {
    e.preventDefault();

    const urlInputEl = document.getElementsByClassName("photo-url-input")[0]
    const url = urlInputEl.value;
    urlInputEl.value = "";

    const ul = document.getElementsByClassName("dog-photos")[0];

    const li = document.createElement("li");

    const img = document.createElement("img");

    img.src = url

    li.appendChild(img);

    ul.appendChild(li);

  })

  // adding new photos

  // --- your code here!



});
