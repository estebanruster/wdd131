/*
Author: Esteban Rubén Mangas Calva
W01 Assignment: Home Page
09/11/2025
First JavaScript code apply for a dynamic web home page
*/

let currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;

let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;