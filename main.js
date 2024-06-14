const h1 = document.querySelector('h1')
h1.addEventListener("click", () => {
    if (h1.style.color == "red") {
        h1.style.color = "black";
        return;
    }

    h1.style.color = "blue";
})