document.getElementById("checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const payment = document.getElementById("payment").value;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Convert cart to FakeStore API format
    const products = cart.map(item => ({
        productId: item.id,
        quantity: 1
    }));

    // Prepare order body
    const orderData = {
        userId: 1,  // required by FakeStore
        date: new Date().toISOString(),
        products: products,
        customerInfo: {
            name: name,
            address: address,
            email: email,
            payment: payment
        }
    };

    // Send to FakeStore API
    fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify(orderData)
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML =
                `✅ Order Submitted!<br>Order ID: <b>${data.id}</b>`;

            // Clear cart after checkout
            localStorage.removeItem("cart");
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "❌ Error submitting order.";
            console.error(error);
        });
    fetch('https://fakestoreapi.com/carts')
        .then(response => response.json())
        .then(data => console.log(data));
});
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = cart.map(item => ({
    productId: item.id,
    quantity: 1
}));

