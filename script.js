// the arrays needed for the operations
const dishes = document.querySelectorAll("article");
const prices = [12.78, 14.60, 17.00, 11.99, 13.99, 14.99, 11.00, 12.50, 6.00]
const dish_names = ["Crazy Tacos", "Burritos Rancheros", "Texanas", "Where Art Thou Romeo Burger", "Tobacco Road", "Romeo BBQ Bacon Burger", "Sushi Bento Box", "Crazy Roll", "Tempura Bomb"];
// the running total variable
let total = 0;
// create the favorites list
const favoritesList = document.querySelector("footer");
const flist = document.createElement("p");
flist.style.textAlign = "center";
flist.textContent = "Favorites:";
favoritesList.parentNode.insertBefore(flist, favoritesList);

for(let i = 0; i < dishes.length; i++){
    const price = prices[i];
    const dname = dish_names[i];
    const btn = document.createElement("button");
    const tag = document.createElement("p");
    btn.textContent = "Add to Favorites";
    tag.textContent = "$ " + prices[i].toFixed(2);
    btn.dataset.price = price;
    btn.dataset.dname = dname;
    dishes[i].appendChild(btn);
    dishes[i].appendChild(tag);
    btn.addEventListener("click", favorites);
}
function favorites(event){
    const fimg = event.currentTarget.parentNode.querySelector("img");
    fimg.classList.add('selected');
    let price = parseFloat(event.currentTarget.dataset.price);
    total += price;
    flist.textContent = "Favorites: <br> Current Total: $" + total.toFixed(2);
    event.currentTarget.disabled = true;
}