document.getElementById("codeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const code = document.getElementById("codeInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (code === "6769") {
    window.location.href = "games.html";
  } else {
    errorMsg.textContent = "❌ Incorrect code. Try again.";
  }
});
