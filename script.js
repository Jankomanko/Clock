"use strict";

window.addEventListener("DOMContentLoaded", izracunajVrijeme);

function izracunajVrijeme() {
    let date = new Date();
    let dan = date.getDay();
    let sati = date.getHours();
    let minute = date.getMinutes();
    let sekunde = date.getSeconds();
    let dani = [
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "Četvrtak",
        "Petak",
        "Subota",
        "Nedjelja",
    ];

    document.getElementById("dan").textContent = dani[dan];
    document.getElementById("sat").textContent = sati;
    document.getElementById("minuta").textContent = minute;
    document.getElementById("sekunde").textContent = sekunde;
    
    setTimeout(izracunajVrijeme, 200)
};