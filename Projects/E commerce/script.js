const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search-input');

// Product data array
const products = [
   

    { id: 1, name: "Wooden Chair", category: "Home Decor", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Wooden+Chair" },
    { id: 2, name: "Smart LED TV", category: "Electronics", price: 299.99, imageUrl: "https://via.placeholder.com/150?text=Smart+LED+TV" },
    { id: 3, name: "Men T-Shirt", category: "Clothing", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=AI+T-shirt" },
    { id: 4, name: "Bluetooth Speaker", category: "Electronics", price: 59.99, imageUrl: "https://via.placeholder.com/150?text=Bluetooth+Speaker" },
    { id: 5, name: "Decorative Lamp", category: "Home Decor", price: 19.99, imageUrl: "https://via.placeholder.com/150?text=Decorative+Lamp" },
    { id: 6, name: "Leather Wallet", category: "Accessories", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Leather+Wallet" },
    { id: 7, name: "Graphic Hoodie", category: "Clothing", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Graphic+Hoodie" },
    { id: 8, name: "Ceramic Vase", category: "Home Decor", price: 24.99, imageUrl: "https://via.placeholder.com/150?text=Ceramic+Vase" },
    { id: 9, name: "Wireless Earbuds", category: "Electronics", price: 79.99, imageUrl: "https://via.placeholder.com/150?text=Wireless+Earbuds" },
    { id: 10, name: "Smart Watch", category: "Electronics", price: 199.99, imageUrl: "https://via.placeholder.com/150?text=Smart+Watch" },
    { id: 11, name: "Canvas Backpack", category: "Accessories", price: 34.99, imageUrl: "https://via.placeholder.com/150?text=Canvas+Backpack" },
    { id: 12, name: "Silk Scarf", category: "Accessories", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=Silk+Scarf" },
    { id: 13, name: "Faux Fur Throw Blanket", category: "Home Decor", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Faux+Fur+Throw" },
    { id: 14, name: "Coffee Maker", category: "Electronics", price: 99.99, imageUrl: "https://via.placeholder.com/150?text=Coffee+Maker" },
    { id: 15, name: "LED Desk Lamp", category: "Home Decor", price: 34.99, imageUrl: "https://via.placeholder.com/150?text=LED+Desk+Lamp" },
    { id: 16, name: "Fitness Tracker", category: "Electronics", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Fitness+Tracker" },
    { id: 17, name: "Wall Art Painting", category: "Home Decor", price: 79.99, imageUrl: "https://via.placeholder.com/150?text=Wall+Art" },
    { id: 18, name: "Winter Beanie", category: "Clothing", price: 19.99, imageUrl: "https://via.placeholder.com/150?text=Winter+Beanie" },
    { id: 19, name: "Portable Charger", category: "Electronics", price: 24.99, imageUrl: "https://via.placeholder.com/150?text=Portable+Charger" },
    { id: 20, name: "Hanging Planter", category: "Home Decor", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=Hanging+Planter" },
    { id: 21, name: "Smartphone Holder", category: "Electronics", price: 14.99, imageUrl: "https://via.placeholder.com/150?text=Smartphone+Holder" },
    { id: 22, name: "Cotton Bed Sheet", category: "Home Decor", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Cotton+Bed+Sheet" },
    { id: 23, name: "Sunglasses", category: "Accessories", price: 59.99, imageUrl: "https://via.placeholder.com/150?text=Sunglasses" },
    { id: 24, name: "Leather Handbag", category: "Accessories", price: 79.99, imageUrl: "https://via.placeholder.com/150?text=Leather+Handbag" },
    { id: 25, name: "Kitchen Knife Set", category: "Kitchen", price: 89.99, imageUrl: "https://via.placeholder.com/150?text=Kitchen+Knife+Set" },
    { id: 26, name: "Woven Storage Basket", category: "Home Decor", price: 34.99, imageUrl: "https://via.placeholder.com/150?text=Woven+Storage+Basket" },
    { id: 27, name: "Cotton Throw Pillows", category: "Home Decor", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Cotton+Throw+Pillows" },
    { id: 28, name: "Air Fryer", category: "Kitchen", price: 119.99, imageUrl: "https://via.placeholder.com/150?text=Air+Fryer" },
    { id: 29, name: "Yoga Mat", category: "Fitness", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=Yoga+Mat" },
    { id: 30, name: "Electric Kettle", category: "Kitchen", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Electric+Kettle" },
   
        { id: 1, name: "Wooden Chair", category: "Home Decor", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Wooden+Chair" },
        { id: 2, name: "Smart LED TV", category: "Electronics", price: 299.99, imageUrl: "https://via.placeholder.com/150?text=Smart+LED+TV" },
        { id: 3, name: "AI T-Shirt", category: "Clothing", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=AI+T-shirt" },
        { id: 4, name: "Bluetooth Speaker", category: "Electronics", price: 59.99, imageUrl: "https://via.placeholder.com/150?text=Bluetooth+Speaker" },
        { id: 5, name: "Decorative Lamp", category: "Home Decor", price: 19.99, imageUrl: "https://via.placeholder.com/150?text=Decorative+Lamp" },
        { id: 6, name: "Leather Wallet", category: "Accessories", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Leather+Wallet" },
        { id: 7, name: "Graphic Hoodie", category: "Clothing", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Graphic+Hoodie" },
        { id: 8, name: "Ceramic Vase", category: "Home Decor", price: 24.99, imageUrl: "https://via.placeholder.com/150?text=Ceramic+Vase" },
        { id: 9, name: "Wireless Earbuds", category: "Electronics", price: 79.99, imageUrl: "https://via.placeholder.com/150?text=Wireless+Earbuds" },
        { id: 10, name: "Smart Watch", category: "Electronics", price: 199.99, imageUrl: "https://via.placeholder.com/150?text=Smart+Watch" },
        // Refurbished Smartphones
        { id: 11, name: "OnePlus 8T (Refurbished)", category: "Smartphones", price: 349.99, imageUrl: "https://via.placeholder.com/150?text=OnePlus+8T" },
        { id: 12, name: "Samsung Galaxy S20 (Refurbished)", category: "Smartphones", price: 399.99, imageUrl: "https://via.placeholder.com/150?text=Galaxy+S20" },
        { id: 13, name: "iPhone 11 (Refurbished)", category: "Smartphones", price: 499.99, imageUrl: "https://via.placeholder.com/150?text=iPhone+11" },
        { id: 14, name: "Google Pixel 5 (Refurbished)", category: "Smartphones", price: 449.99, imageUrl: "https://via.placeholder.com/150?text=Pixel+5" },
        { id: 15, name: "Xiaomi Mi 10 (Refurbished)", category: "Smartphones", price: 299.99, imageUrl: "https://via.placeholder.com/150?text=Mi+10" },
        { id: 16, name: "Nokia 8.3 5G (Refurbished)", category: "Smartphones", price: 399.99, imageUrl: "https://via.placeholder.com/150?text=Nokia+8.3" },
        { id: 17, name: "Sony Xperia 1 (Refurbished)", category: "Smartphones", price: 499.99, imageUrl: "https://via.placeholder.com/150?text=Xperia+1" },
        { id: 18, name: "LG Velvet (Refurbished)", category: "Smartphones", price: 349.99, imageUrl: "https://via.placeholder.com/150?text=LG+Velvet" },
        { id: 19, name: "Huawei P40 (Refurbished)", category: "Smartphones", price: 429.99, imageUrl: "https://via.placeholder.com/150?text=P40" },
        { id: 20, name: "Oppo Find X2 (Refurbished)", category: "Smartphones", price: 479.99, imageUrl: "https://via.placeholder.com/150?text=Find+X2" },
        // Various Books
        { id: 21, name: "The Great Gatsby", category: "Books", price: 10.99, imageUrl: "https://via.placeholder.com/150?text=Great+Gatsby" },
        { id: 22, name: "1984 by George Orwell", category: "Books", price: 8.99, imageUrl: "https://via.placeholder.com/150?text=1984" },
        { id: 23, name: "To Kill a Mockingbird", category: "Books", price: 12.99, imageUrl: "https://via.placeholder.com/150?text=To+Kill+a+Mockingbird" },
        { id: 24, name: "Pride and Prejudice", category: "Books", price: 9.99, imageUrl: "https://via.placeholder.com/150?text=Pride+and+Prejudice" },
        { id: 25, name: "The Catcher in the Rye", category: "Books", price: 11.99, imageUrl: "https://via.placeholder.com/150?text=Catcher+in+the+Rye" },
        { id: 26, name: "Moby Dick", category: "Books", price: 15.99, imageUrl: "https://via.placeholder.com/150?text=Moby+Dick" },
        { id: 27, name: "War and Peace", category: "Books", price: 19.99, imageUrl: "https://via.placeholder.com/150?text=War+and+Peace" },
        { id: 28, name: "The Alchemist", category: "Books", price: 10.99, imageUrl: "https://via.placeholder.com/150?text=The+Alchemist" },
        { id: 29, name: "Brave New World", category: "Books", price: 12.99, imageUrl: "https://via.placeholder.com/150?text=Brave+New+World" },
      
    
];

// Function to display products
function displayProducts(productList) {
    productContainer.innerHTML = '';  // Clear previous products
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Function to filter products based on search input
searchInput.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    displayProducts(filteredProducts);
});



// Initial display of all products
displayProducts(products);
