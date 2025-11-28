let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    let container = document.getElementById("cart-items");
    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, i) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-card">
                <img src="${item.image}">
                <p>${item.name}</p>
                <p>₱${item.price}</p>
                <button onclick="removeItem(${i})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₱" + total;
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
