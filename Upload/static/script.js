// Function to handle sending a message
async function sendMessage() {
    // Get the entered message from the entry box
    const message = document.getElementById("chat-input").value.trim();

    // Check if the message is not empty
    if (message !== "") {
        // Get the chat container where messages will be displayed
        const chatContainer = document.querySelector(".message-box");

        // Create a new div element for the human message
        const humanMessageDiv = document.createElement("div");
        humanMessageDiv.classList.add("human-message");

        // Create the human avatar
        const humanAvatarDiv = document.createElement("div");
        humanAvatarDiv.classList.add("human-avatar");
        humanAvatarDiv.innerHTML = '<i class="fas fa-user"></i>';

        // Create the message text element
        const messageTextDiv = document.createElement("div");
        messageTextDiv.classList.add("message-text");
        messageTextDiv.textContent = message;

        // Append the avatar and message text to the human message div
        humanMessageDiv.appendChild(humanAvatarDiv);
        humanMessageDiv.appendChild(messageTextDiv);

        // Append the human message div to the chat container
        chatContainer.appendChild(humanMessageDiv);

        // Clear the entry box after sending the message
        document.getElementById("chat-input").value = "";

        // Scroll to the bottom of the chat container to show the latest message
        chatContainer.scrollTop = chatContainer.scrollHeight;

        document.getElementById("loading-overlay").style.display = "flex";

          // Send the user message to the server using fetch
        const response = await fetch('/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });

        if (response.ok) {
            const data = await response.json();
            const predictedResponse = data.response;

            console.log(predictedResponse)
            // Display the predicted response in the chat
            // Hide the loading overlay after processing is done
            document.getElementById("loading-overlay").style.display = "none";
            displayBotMessage(predictedResponse);
        }
        else {
            console.error('Error fetching response from server');
        }

    }
}

// Function to copy the clicked question to the entry box and send it automatically
function copyQuestionToEntryBox(button) {
    // Get the clicked question from the button
    const clickedQuestion = button.textContent.trim();

    // Get the chat entry box
    const entryBox = document.getElementById("chat-input");

    // Set the value of the chat entry box to the clicked question
    entryBox.value = clickedQuestion;

    // Automatically send the copied question
    sendMessage();
}

function displayBotMessage(predictedResponse) {
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");

    const botAvatarDiv = document.createElement("div");
    botAvatarDiv.classList.add("bot-avatar");
    botAvatarDiv.innerHTML = '<i class="fas fa-robot"></i>';

    const messageTextDiv = document.createElement("div");
    messageTextDiv.classList.add("message-text");

    // Introduction message
    const introMessage = document.createElement("p");
    introMessage.textContent = "Here's the generated code for your request:";

    // Create a black box layout beside the code
    const layoutDiv = document.createElement("div");
    layoutDiv.classList.add("code-layout");

    // Create a copy button
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy";
    copyButton.classList.add("copy-button");
    copyButton.addEventListener("click", () => {
        // Copy the code to the clipboard
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = predictedResponse;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
    });

    // Append the copy button to the layout div
    layoutDiv.appendChild(copyButton);

    // Create a <pre> tag to preserve formatting and add syntax highlighting
    const preTag = document.createElement("pre");
    preTag.className = "code-display";
    // Add syntax highlighting using Prism.js (adjust the language as needed)
    preTag.innerHTML = `<code class="language-python">${Prism.highlight(predictedResponse, Prism.languages.python, 'python')}</code>`;

    // Append the <pre> tag to the layout div
    layoutDiv.appendChild(preTag);

    // Append the intro message and layout div to the message text div
    messageTextDiv.appendChild(introMessage);
    messageTextDiv.appendChild(layoutDiv);

    botMessageDiv.appendChild(botAvatarDiv);
    botMessageDiv.appendChild(messageTextDiv);

    // Get the chat container and append the bot message div
    const chatContainer = document.querySelector(".message-box");
    chatContainer.appendChild(botMessageDiv);

    // Scroll to the bottom of the chat container to show the latest message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the send button and add click event listener
    const sendButton = document.getElementById("send-btn");
    sendButton.addEventListener("click", sendMessage);

    // Get the entry box and add keydown event listener to send message on Enter key press
    const entryBox = document.getElementById("chat-input");
    entryBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    const listItems = document.querySelectorAll(".question-item");
    listItems.forEach((item) => {
        item.addEventListener("click", function () {
            copyQuestionToEntryBox(item);
        });
    });
});
