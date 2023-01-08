window.addEventListener("DOMContentLoaded", () => {
  const dom = (css) => {
    const style = document.createElement("style");
    style.innerHTML = css;
    style.setAttribute("type", "text/css");
    document.head.appendChild(style);
  };
  //Fetch CSS
  fetch("https://namelessclient.xyz/dist/css/theme.css")
    .then((response) => response.text())
    .then((css) => {
      dom(`
      .nav{
        position: absolute;
        height: 40px;
        width: fit-content;
        background: var(--background-clr-primary);
        right: 0;
        bottom: 0;
        border-radius: 0.25rem;
        margin: 1.5rem;
    }
    .nav-btn{
        height: 100%;
        background: transparent;
        border: 0;
        cursor: pointer;
        font-weight: bold;
        color: var(--text-clr-primary);
        width: 100px;
        border-radius: 0.25rem;
        transition: all .3s ease;
    }
    .nav-btn:hover{
        background: #303037;
        color: var(--text-clr-secondary-1);
    }
    .client{
        margin-right: 0.5rem;
    }
    body:has(#app-mount)>.nav{
        display: none;
      }
      `);
      const style = document.createElement("style");
      style.innerHTML = css;
      style.setAttribute("type", "text/css");
      document.head.appendChild(style);
    });
  
  // Create DOM elements
  const nav = document.createElement("div");
  nav.className = "nav";
  document.body.appendChild(nav);

  const clientButton = document.createElement("button");
  clientButton.className = "client nav-btn";
  clientButton.innerText = "CLIENT";
  nav.appendChild(clientButton);

  const discordButton = document.createElement("button");
  discordButton.className = "discord nav-btn";
  discordButton.innerText = "DISCORD";
  nav.appendChild(discordButton);

  discordButton.addEventListener("click", () => {
    const popup = window.open(
      "https://discord.gg/dr2B5yZTqf",
      "discord invite",
      "height=600,width=800,top=250,left=350"
    );
    popup.focus();
  });
  clientButton.addEventListener("click", () => {
    window.open("https://namelessclient.xyz/");
  });
});
