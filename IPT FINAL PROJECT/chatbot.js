<script>
async function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) return;

    appendMessage("user", message);
    input.value = "";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        appendMessage("bot", botReply);
    } catch (error) {
        appendMessage("bot", "⚠️ API error — chatbot unavailable right now.");
    }
}

function appendMessage(sender, text) {
    const box = document.getElementById("chatMessages");
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "msg-user" : "msg-bot";
    msg.textContent = text;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
}

function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}
</script>
