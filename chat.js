// Get references to the necessary HTML elements using their IDs
const messageInput = document.getElementById("message");
const chatOutput = document.getElementById("chat-output");
const sendButton = document.getElementById("send");

// Attach a click event listener to the sendButton
sendButton.addEventListener("click", () => {
    // Retrieve the message from the input field
    const message = messageInput.value;
    
    // Check if the message is not empty before displaying it
    if (message) {
        displayMessage(message);
        messageInput.value = "";
    }
});

// Attach a keyup event listener to the messageInput
messageInput.addEventListener("keyup", (event) => {
    // Check if the pressed key is Enter
    if (event.key === "Enter") {
        // Trigger a click on the sendButton if Enter is pressed
        sendButton.click();
    }
});

// Function to display a message in the chat output
function displayMessage(message) {
    // Create a new div element to represent the message
    const messageElement = document.createElement("div");
    
    // Set the text content of the messageElement to the provided message
    messageElement.textContent = message;
    
    // Append the messageElement to the chat output
    chatOutput.appendChild(messageElement);
}