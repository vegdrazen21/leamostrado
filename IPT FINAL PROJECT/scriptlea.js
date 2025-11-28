function checkout() {
    const bodyData = {
        product_id: "anime-ts-001",
        name: "Anime Graphic T-Shirt",
        price: 499,
        quantity: 1
    };

    document.getElementById("result").innerHTML = "Processing checkout...";

    fetch("https://dummyjson.com/products/add", {   // Fake API for demonstration
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData)
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
            <p><strong>Checkout Complete!</strong></p>
            <p>Order ID: ${data.id}</p>
            <p>Product: ${data.name}</p>
            <p>Status: Success</p>
        `;
        })
        .catch(err => {
            document.getElementById("result").innerHTML =
                "<span style='color:red;'>Checkout Error. Try again.</span>";
        });
}
