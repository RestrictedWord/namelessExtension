window.addEventListener("DOMContentLoaded", () => {
  // Fetch CSS
  fetch("https://namelessclient.xyz/src/assets/css/nlc-theme.css")
    .then((response) => {
      return response.text();
    })
    .then((css) => {
      theme.innerHTML = css;
      document.head.appendChild(theme);
    });
  // Create DOM elements
  const theme = document.createElement("style");
  const nlc = document.createElement("div");
  const nlcTheme = document.createElement("style");
  const clientBtn = document.createElement("button");
  const discordBtn = document.createElement("button");
  const discordInvite = document.createElement("style");
  // Set DOM element attributes
  nlc.className = "NLC-Elements";
  clientBtn.id = "Client-Btn";
  clientBtn.className = "Client-Btn nlc-btn";
  clientBtn.innerText = "GET CLIENT";
  discordBtn.id = "Discord-Btn";
  discordBtn.className = "Discord-Btn nlc-btn";
  discordBtn.innerText = "DISCORD";
  theme.className = "NLC-Theme";
  theme.type = "text/css";
  nlcTheme.className = "NLC-Elements-Theme";
  nlcTheme.type = "text/css";
  nlcTheme.innerHTML = `
  .NLC-Elements{
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 800px;
    max-height: 800px;
}
.nlc-btn{
    font-weight: 600;
    margin: 0.5rem;
    border: 0;
    background: var(--background-clr-primary);
    padding: 0.5rem 0.875rem;
    border-radius: 0.25rem;
    transition: all .3s ease;
    cursor: pointer;
    box-shadow: var(--shadow-primary);
    text-transform: uppercase;
}
.Client-Btn{
    color: var(--text-clr-secondary-3);
    margin-right: 0;
}
.Discord-Btn{
    color: var(--background-clr-secondary-6);
}
.NLE-Settings{
  color: var(--background-clr-secondary-7);
}
.nlc-btn:hover{
    background: var(--background-clr-secondary-1);
    color: var(--text-clr-primary);
    padding: 0.875rem 0.875rem;
}
.Settings-Modal {
  position: fixed;
  flex-direction: column;
  top: 9vh;
  width: 742px;
  height: 800px;
  left: 50%;
  transform: translate(-50%, 0);
  background: var(--background-clr-primary);
  border-radius: 0.25rem;
  padding: 0.5rem;
}
.Close-Btn{
  background: var(--background-clr-secondary-7);
  width: 30px;
  height: 30px;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  border: 0;
}
.Settings-Modal-Bar{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;
  height: min-content;
  border-radius: 0.25rem;
}
.Settings-Modal-Content{
  width: 100%;
  height: 100%;
}
.Settings-Modal-Left{
  height: 100%;
  color: var(--text-clr-primary);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.313rem;
}
  `;
  discordInvite.innerHTML = `
  [class*="wrapper"]>div>[class*="authBox"]{
    background: var(--background-clr-primary) !important;
  }
  [class*="authBox"]>[class*="centeringWrapper"]>button{
    color: var(--background-clr-primary) !important;
    background: var(--background-clr-secondary-5) !important;
  }
  body:has(#app-mount)>.NLC-Elements{
    display: none;
  }
  `;

  // Create Dom function
  discordBtn.addEventListener("click", () => {
    // Open a new window as a popup
    const popup = window.open(
      "https://discord.gg/dr2B5yZTqf",
      "NLC Discord",
      "height=600,width=800,top=250,left=350"
    );

    // Focus on the popup window
    popup.focus();
  });

  clientBtn.addEventListener("click", () => {
    // Open the URL in a new window
    window.open("https://namelessclient.xyz/");
  });

  // Append elements to the DOM
  document.head.appendChild(discordInvite);
  document.head.appendChild(nlcTheme);
  document.body.appendChild(nlc);
  nlc.appendChild(clientBtn);
  nlc.appendChild(discordBtn);
});
