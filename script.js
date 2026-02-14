const dishes = document.querySelectorAll("article");

for(let i = 0; i < dishes.length; i++){
    const btn = document.createElement("button");
    btn.textContent = "Add to Favorites";
    dishes[i].appendChild(btn);
    btn.addEventListener("click", favorites);
}
function favorites(){

}