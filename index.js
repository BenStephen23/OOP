// Product class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity = 0) {
        this.product = product;
        this.quantity = quantity;
    }

    // method to calculate the total price of the item
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }

    increaseQuantity() {
        this.quantity += 1;
    }

    decreaseQuantity() {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // methods to manage the cart

    //  Get the total of items inside the cart
    getTotalItems() {
        return this.items.length;
    }

    //  Add items to the cart
    addItem(product) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.increaseQuantity();
        } else {
            this.items.push(new ShoppingCartItem(product, 1));
        }
    }

    //  Remove items from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // iv. Display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity} - Total: $${item.calculateTotalPrice()}`);
        });
    }

     getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Get the total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
}

const shoppingCart = new ShoppingCart();

// Create Products
const basket = new Product('basket', 'Basket', 100);
const socks = new Product('socks', 'Socks', 20);
const bag = new Product('bag', 'Bag', 50);

// Get the HTML elements
const totalPriceElement = document.getElementById("total");

// Add event listeners for the basket
document.getElementById("basket-plus").addEventListener("click", () => {
    shoppingCart.addItem(basket);
    updateCart();
});

document.getElementById("basket-minus").addEventListener("click", () => {
    const item = shoppingCart.items.find(i => i.product.id === 'basket');
    if (item) {
        item.decreaseQuantity();
        updateCart();
    }
});

document.getElementById("basket-delete").addEventListener("click", () => {
    shoppingCart.removeItem('basket');
    updateCart();
});

// Add event listeners for socks
document.getElementById("socks-plus").addEventListener("click", () => {
    shoppingCart.addItem(socks);
    updateCart();
});

document.getElementById("socks-minus").addEventListener("click", () => {
    const item = shoppingCart.items.find(i => i.product.id === 'socks');
    if (item) {
        item.decreaseQuantity();
        updateCart();
    }
});

document.getElementById("socks-delete").addEventListener("click", () => {
    shoppingCart.removeItem('socks');
    updateCart();
});
// Add event listeners for bag
document.getElementById("bag-plus").addEventListener("click", () => {
    shoppingCart.addItem(bag);
    updateCart();
});

document.getElementById("bag-minus").addEventListener("click", () => {
    const item = shoppingCart.items.find(i => i.product.id === 'bag');
    if (item) {
        item.decreaseQuantity();
        updateCart();
    }
});

document.getElementById("bag-delete").addEventListener("click", () => {
    shoppingCart.removeItem('bag');
    updateCart();
});


// event listeners for the heart icons
document.getElementById("basket-heart").addEventListener("click", () => {
    document.getElementById("basket-heart").classList.toggle("red");
});

// Update the cart display and total price
function updateCart() {
    shoppingCart.displayCartItems();
    totalPriceElement.innerHTML = `${shoppingCart.getTotalPrice()}$`;
}

//  display update
updateCart();
