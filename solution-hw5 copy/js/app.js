// Define glazing and pack size arrays
const allGlazing = [
    { glazing: 'Keep original', price: 0.00 },
    { glazing: 'Sugar milk', price: 0.00 },
    { glazing: 'Vanilla milk', price: 0.50 },
    { glazing: 'Double chocolate', price: 1.50 }
];

const allPackSize = [
    { size: 1, priceAdaption: 1 },
    { size: 3, priceAdaption: 3 },
    { size: 6, priceAdaption: 5 },
    { size: 12, priceAdaption: 10 }
];

// Roll data
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
console.log("Loaded cart from localStorage:", cart);

// Ensure dropdowns are populated after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the dropdown menus for glazing and pack size
    const glazingDropdown = document.querySelector('#glazing');
    const packsizeDropdown = document.querySelector('#packsize');

    // Populate options for glazing dropdown
    for (let i = 0; i < allGlazing.length; i++) {
        const choiceNow = allGlazing[i];
        const optionElement = document.createElement('option');
        optionElement.text = choiceNow.glazing;
        optionElement.value = choiceNow.price;
        glazingDropdown.appendChild(optionElement);
    }

    // Populate options for pack size dropdown
    for (let i = 0; i < allPackSize.length; i++) {
        const choiceNow = allPackSize[i];
        const optionElement = document.createElement('option');
        optionElement.text = choiceNow.size;
        optionElement.value = choiceNow.priceAdaption;
        packsizeDropdown.appendChild(optionElement);
    }

    // Parse the URL parameter and store the current roll type
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get('roll');
    console.log("Selected roll type from URL:", rollType);

    // Update roll details on the page
    const heading = document.querySelector('#header');
    heading.innerText = rollType + ' Cinnamon Roll';

    const rollImage = document.querySelector('#detailpic');
    rollImage.src = 'hw3_images/' + rolls[rollType].imageFile;

    const rollPriceElement = document.querySelector('#finalprice');
    let basePrice = rolls[rollType].basePrice;
    rollPriceElement.innerText = '$' + basePrice;

    // Set up change event listeners for updating price
    const glazingChange = document.querySelector('#glazing');
    const packSizeChange = document.querySelector('#packsize');

    glazingChange.addEventListener('change', onSelectValueChange);
    packSizeChange.addEventListener('change', onSelectValueChange);

    function onSelectValueChange() {
        const price = document.querySelector('#finalprice');
        const glazingPrice = Number(glazingChange.value);
        const packPriceFinal = Number(packSizeChange.value);

        const updatedPrice = ((basePrice + glazingPrice) * packPriceFinal).toFixed(2);
        price.innerHTML = "$" + updatedPrice;
    }

    // Roll class definition
    class Roll {
        constructor(rollType, rollGlazing, packSize, rollPrice) {
            this.type = rollType;
            this.glazing = rollGlazing;
            this.size = packSize;
            this.basePrice = rollPrice;
        }
    }

    // Add roll to cart and save to localStorage
    const rollButton = document.querySelector('#checkoutbutton');
    rollButton.addEventListener("click", addRollToCart);

    function addRollToCart() {
        // Get selected glazing and pack size options
        const selectedGlazing = allGlazing[glazingChange.selectedIndex];
        const selectedPack = allPackSize[packSizeChange.selectedIndex];
    
        // Create a new Roll instance with selected options
        const selectedRoll = new Roll(rollType, selectedGlazing.glazing, selectedPack.size, basePrice);
    
        // Add the new roll to the cart array
        cart.push(selectedRoll);
    
        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    
        console.log("Updated cart saved to localStorage:", JSON.parse(localStorage.getItem("cart")));
    }
});


