const button = document.getElementById("btn");
const textElement = document.getElementById("text");

button.addEventListener("click", function() {
  textElement.textContent = "ボタンをクリックしました";
});
