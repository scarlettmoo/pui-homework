// Sample Roll Data Structure
const rolls = {
    "Original": { "basePrice": 2.49, "imageFile": "original-cinnamon-roll.jpg" },
    "Apple": { "basePrice": 3.49, "imageFile": "apple-cinnamon-roll.jpg" },
    "Raisin": { "basePrice": 2.99, "imageFile": "raisin-cinnamon-roll.jpg" },
    "Walnut": { "basePrice": 3.49, "imageFile": "walnut-cinnamon-roll.jpg" },
    "Double-Chocolate": { "basePrice": 3.99, "imageFile": "double-chocolate-cinnamon-roll.jpg" },
    "Strawberry": { "basePrice": 3.99, "imageFile": "strawberry-cinnamon-roll.jpg" }
};

// Retrieve the cart from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log("Loaded cart items from localStorage:", cart);

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".row-cartItem");
    const template = document.querySelector('#rolltemplate');

    if (!cartContainer || !template) {
        console.error("Critical elements missing in DOM. Cannot load cart items.");
        return;
    }

    cart.forEach(cartItem => {
        // Clone template content
        const clone = template.content.cloneNode(true);
        
        // Fill in data for each cart item
        clone.querySelector('.CartPicture').src = 'hw3_images/' + rolls[cartItem.type].imageFile;
        clone.querySelector('.rollName').innerText = `${cartItem.type} Cinnamon Roll`;
        clone.querySelector('.glazingName').innerText = `Glazing: ${cartItem.glazing}`;
        clone.querySelector('.pack-size').innerText = `Pack Size: ${cartItem.size}`;
        clone.querySelector('.Cartprice').innerText = `$${cartItem.basePrice}`;

        // Append to container
        cartContainer.appendChild(clone);
    });

    console.log("Cart items displayed on the page.");
});




