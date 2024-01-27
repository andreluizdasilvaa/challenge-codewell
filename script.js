var menuopen = document.querySelector(".openmenu_burguer ul")

var menu = document.querySelector(".menu_hamburguer")

menu.addEventListener("click", clicou)

function clicou() {
    if (menuopen.style.display ==='none' || menuopen.style.display === ""){
        menuopen.style.display = 'block'
    } else{
        menuopen.style.display = 'none'
    }
}
