//Produkter
const products = [
    {
        id: 1,
        name: "Magnolia",
        image: "images/product-1.jpg",
        description: "..."
    },
    {
        id: 2,
        name: "Botanikers favorit",
        image: "images/product-2.jpg",
        description: "...."
    },
    {
        id: 3,
        name: "Älvkrona",
        image: "images/product-4.jpg",
        description: "..."
    },
    {
        id: 4,
        name: "Torparlycka",
        image: "images/product-5.jpg",
        description: "..."
    },
    {
        id: 5,
        name: "Herrgårdsfröjd",
        image: "images/product-7.jpg",
        description: "..."
    },
    {
        id: 6,
        name: "Grandula",
        image: "images/product-9.jpg",
        description: "..."
    },
    {
        id: 7,
        name: "Sagolyckta",
        image: "images/product-6.jpg",
        description: "..."
    },
    {
        id: 8,
        name: "Soljuvel",
        image: "images/product-32.jpg",
        description: "..."
    },
    {
        id: 9,
        name: "Himmelkyss",
        image: "images/product-31.jpg",
        description: "..."
    },
    {
        id: 10,
        name:"Midnattsväktare",
        image: "images/product-21.jpg",
        description: "..."
    },
    {
        id: 11,
        name: "Fröken Glädje",
        image: "images/product-19.jpg",
        description: "..."
    }

];

//Kundvagn
let cart = [];

//Produkt-array
function displayProducts() {
    // Hämta elementet där produkterna ska visas
    const productList = document.getElementById('product-list');
    // Avbryt om elementet inte finns på sidan
    if (!productList) return;

    // Skapa HTML för varje produkt och kombinera till en sträng
    const productsHTML = products.map(product => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <button onclick="addToCart(${product.id})" 
                            class="btn btn-primary">
                        Lägg till i kundvagn
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Uppdatera DOM:en med den nya HTML-koden
    productList.innerHTML = productsHTML;
}

//Uppdatera kundvagn
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    // Visa meddelande om kundvagnen är tom
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Din kundvagn är tom</p>';
        return;
    }

    // Skapa HTML för varje produkt i kundvagnen
    const cartHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `
            <div class="cart-item mb-2">
                <div class="d-flex justify-content-between align-items-center">
                    <span>${product.name}</span>
                    <button onclick="removeFromCart(${product.id})" 
                            class="btn btn-danger btn-sm">
                        Ta bort
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Uppdatera kundvagnen i DOM:en
    cartItems.innerHTML = cartHTML;
}

// Funktion för att lägga till en produkt i kundvagnen
function addToCart(productId) {
    cart.push({ id: productId });
    displayCart();
}

// Funktion för att ta bort en produkt från kundvagnen
function removeFromCart(productId) {
    // Hitta produktens position i kundvagnen
    const index = cart.findIndex(item => item.id === productId);
    // Ta bort produkten om den finns
    if (index > -1) {
        cart.splice(index, 1);
    }
    // Uppdatera kundvagnsvisningen
    displayCart();
}

// Starta funktionaliteten när sidan har laddats
document.addEventListener('DOMContentLoaded', function() {
    // Kolla om vi är på produktsidan
    if (document.getElementById('product-list')) {
        displayProducts();
        displayCart();
    }
});