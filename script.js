// the arrays needed for the operations
const dishes = document.querySelectorAll("article");
const prices = [12.78, 14.60, 17.00, 11.99, 13.99, 14.99, 11.00, 12.50, 6.00]
const dish_names = ["Crazy Tacos", "Burritos Rancheros", "Texanas", "Where Art Thou Romeo Burger", "Tobacco Road", "Romeo BBQ Bacon Burger", "Sushi Bento Box", "Crazy Roll", "Tempura Bomb"];

// the running total variable
let total = 0;

// create the favorites list
const footer = document.querySelector("footer");
const favoritelist = document.createElement("div");
const favoritetitle = document.createElement("p");
const favoritetotal = document.createElement("p");
favoritelist.style.textAlign = "center";
favoritetitle.textContent = "Favorites:";
favoritetotal.textContent = "Current Total: $0.00"
favoritelist.appendChild(favoritetitle);
favoritetitle.appendChild(favoritetotal);
footer.parentNode.insertBefore(favoritelist, footer);

// create the functionality for the buttons
for(let i = 0; i < dishes.length; i++){
    // variables for the data set
    const price = prices[i];
    const dname = dish_names[i];
    
    // variables for the button and price tag
    const btn = document.createElement("button");
    const tag = document.createElement("p");
    btn.textContent = "Add to Favorites";
    tag.textContent = "$ " + prices[i].toFixed(2);
    
    // add data to the button's dataset
    btn.dataset.price = price;
    btn.dataset.dname = dname;

    // add the button and price tag to the page
    dishes[i].appendChild(btn);
    dishes[i].appendChild(tag);

    // add the event for adding to favorites
    btn.addEventListener("click", favorites);
}

// adds the selected dish to the favorites list and adds price to running total
function favorites(event){
    // highlight the selected dishes image
    const fimg = event.currentTarget.parentNode.querySelector("img");
    fimg.classList.add('selected');
    
    // add the title of the dish to the favorites list
    const fitem = document.createElement("p");
    fitem.textContent = event.currentTarget.dataset.dname;
    favoritelist.appendChild(fitem);
    
    // store an active list of the favorites
    event.currentTarget.listitems = fitem;

    // add the price of the dish to the running total of the dish
    let price = parseFloat(event.currentTarget.dataset.price);
    total += price;
    favoritetotal.textContent = "Current Total: $" + total.toFixed(2);
    
    // turn off the favorites event and enable the rmeovefavorites event
    event.currentTarget.removeEventListener("click", favorites);
    event.currentTarget.addEventListener("click", removefavorites);
    event.currentTarget.textContent = "Remove from Favorites";
}

// removes the selected dish to the favorites list and subtracts price from running total
function removefavorites(event){
    // remove the highlight the selected dishes image
    const fimg = event.currentTarget.parentNode.querySelector("img");
    fimg.classList.remove('selected');
    
    // remvoe the item from the active list
    if(event.currentTarget.listitems){
        event.currentTarget.listitems.remove();
    }

    // subtract the price of the dish to the running total of the dish
    let price = parseFloat(event.currentTarget.dataset.price);
    total -= price;
    // fix floating point error to prevent $-0.00 output
    if(total < 0){
        total = 0;
    }
    favoritetotal.textContent = "Current Total: $" + total.toFixed(2);
    
    // turn off the rmeovefavorites event and enable the favorites event
    event.currentTarget.removeEventListener("click", removefavorites);
    event.currentTarget.addEventListener("click", favorites);
    event.currentTarget.textContent = "Add to Favorites";
}