document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fakestoreapi.com/products?limit=4")
        .then(res => res.json())
        .then(products => {
            const container = document.getElementById("products");

            products.forEach(prod => {
                container.innerHTML += `
                    <div class="card">
                        <img src="${prod.image}" alt="">
                        <h3>${prod.title}</h3>
                        <p>₱${(prod.price * 57).toFixed(0)}</p>

                        <button onclick="addToCart(${prod.id}, '${prod.title}', ${prod.price}, '${prod.image}')">
                            Add to Cart
                        </button>
                    </div>
                `;
            });
        });
});

function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price, image, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}
