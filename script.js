const contador = document.querySelector("#contador")
const sumar = document.querySelector("#sumar")
const restar = document.querySelector("#restar")

sumar.addEventListener("click", () => {
    contador.textContent++;
})
restar.addEventListener("click", () => {
    contador.textContent--;
})


