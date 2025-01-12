// Stato del Server (Esempio statico)
document.addEventListener("DOMContentLoaded", function() {
    let serverStatus = document.getElementById("server-status");

    // Simulazione Stato Server
    let serverOnline = false; // Cambia a true se online

    if (serverOnline) {
        serverStatus.textContent = "Online";
        serverStatus.style.color = "green";
    } else {
        serverStatus.textContent = "Offline";
        serverStatus.style.color = "red";
    }
});
