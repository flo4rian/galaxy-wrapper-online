// Added by florian#9112
// Checks if on Character Maker
function execution() {
    if (window.location.pathname == "/cc") {
        document.getElementById("headbuttons").style.display = "none";
    }

    if (window.location.pathname == "/go_full") {
        // $("#header").remove();
        document.getElementById("headbuttons").style.display = "none";
    }
}