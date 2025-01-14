// Funzione per copiare l'IP del server
function copyIP() {
    navigator.clipboard.writeText("play.loyaltymc.it").then(() => {
        alert("IP copiato: play.loyaltymc.it");
    }).catch(err => {
        console.error("Errore nella copia dell'IP", err);
    });
}
