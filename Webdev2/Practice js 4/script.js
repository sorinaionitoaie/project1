const btn = document.querySelector("button");
const body = document.querySelector("body");


btn.addEventListener("click", () => {
    const newElem = document.createElement("p")
    console.log(newElem);
    newElem.innerHTML = "bla bla"
    body.appendChild(newElem)
})