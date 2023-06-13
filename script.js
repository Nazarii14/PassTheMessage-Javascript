const messageInput = document.getElementById("message-input");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', function() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
})