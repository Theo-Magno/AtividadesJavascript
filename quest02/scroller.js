let message = "";

let rolling = false;

function startRolling() {
  if (!rolling) {
    rolling = true;
    rollMessage();
  }
}

function stopRolling() {
  rolling = false;
}

function rollMessage() {
  if (rolling) {
    message = document.getElementById("messageInput").value;
    message = message.substring(1) + message[0];
    document.getElementById("messageInput").value = message;
    setTimeout(rollMessage, 100);
  }
}
