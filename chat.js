if (window.location.href === "https://kirka.io/servers/main") {
  console.log("Server Window Open");
  window.addEventListener("DOMContentLoaded", () => {
    const existentOfLife = setInterval(function () {
      const chat = document.getElementsByClassName("chat")[0];
      if (chat) {
        clearInterval(existentOfLife);
        chat.style.position = "relative";
        console.log("Chat element found");
        const suggestions = document.createElement("div");
        console.log(suggestions);
        suggestions.className = "suggestions";
        suggestions.style.display = "none";
        suggestions.style.position = "absolute";
        suggestions.style.background = "#212121";
        chat.appendChild(suggestions);

        const input = document.getElementsByClassName("input")[0];

        const offer = document.createElement("div");
        offer.className = "suggestion";
        offer.textContent = "/trade offer";
        suggestions.appendChild(offer);

        const accept = document.createElement("div");
        accept.className = "suggestion";
        accept.textContent = "/trade accept";
        suggestions.appendChild(accept);
        
        input.addEventListener("keydown", function (e) {
          if (e.key === "Tab") {
            if (input.value.includes("/trade o")) {
              input.value = "/trade offer";
            } else if (input.value.includes("/trade a")) {
              input.value = "/trade accept";
            }
          }
        });

        suggestions.addEventListener("click", function (e) {
          input.value = e.target.textContent;
        });

        input.addEventListener("input", function () {
          if (input.value === "/trade offer" || input.value === "/trade accept") {
            suggestions.style.display = "none";
          } else if (input.value.startsWith("/")) {
            suggestions.style.display = "block";
            suggestions.style.top = input.offsetTop - suggestions.offsetHeight - 5 + "px";
            suggestions.style.left = input.offsetLeft + "px";
            suggestions.style.width = input.offsetWidth + "px";
            if (input.value === "/trade o") {
              accept.style.display = "none";
            } else if (input.value === "/trade a") {
              offer.style.display = "none";
            } else {
              offer.style.display = "block";
              accept.style.display = "block";
            }
          } else {
            suggestions.style.display = "none";
          }
        });
      }
    }, 100);
  });
}
