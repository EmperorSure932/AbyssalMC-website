function copyIP() {
    const ip = "play.loyaltymc.it";
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP copiato: " + ip);
    });
}
