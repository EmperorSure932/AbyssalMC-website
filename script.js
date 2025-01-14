// Funzione per copiare l'IP del server
document.getElementById("copyIPButton").addEventListener("click", function() {
    let ip = document.getElementById("serverIP").textContent;
    navigator.clipboard.writeText(ip);
    alert("IP copiato: " + ip);
});

// Funzione per aprire il link di Discord
document.getElementById("discordButton").addEventListener("click", function() {
    window.location.href = "https://discord.gg/Qgp35DQe";
});

// Funzione per creare i fiocchi di neve animati
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    // Posizione casuale
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";

    // Rimuove il fiocco dopo che è caduto
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Creazione continua di fiocchi di neve
setInterval(createSnowflake, 200);
