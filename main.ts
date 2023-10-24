import { series } from './data.js';
import { Serie } from "./Serie.js";

let table: HTMLElement = document.getElementById("table")!;

let data: HTMLElement = document.getElementById("data")!;

function mostrarListado(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr class=\"Serie\">
            <td>${data[i].id}</td>
            <td id = "nombre-serie">${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        sum += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"average\"><h6>Seasons average: ${sum / data.length}</h2></tr>`;
    body.innerHTML = htmlVar;
}

mostrarListado(series, table);

let datav2 : HTMLCollectionOf<Element> = document.getElementsByClassName("Serie");

for (let i = 0; i < data.clientHeight; i++) {
    datav2[i].addEventListener("click", () => {
        showDetail(i);
    });
}

function showDetail(i : number): void {
    data.innerHTML = "";

    let currentSerie : Serie = series[i];

    let card : string = `
    <div class="card" style="width: 18rem;">
        <img src= "${currentSerie.image}" alt="No se encontró imagen">
        <div class="card-body">
            <h5 class="card-title">${currentSerie.name}</h5>
            <p class="card-text">${currentSerie.description}</p>
            <a href="${currentSerie.url}">${currentSerie.url}</a>
        </div>
        </div>
        `;
    
    data.innerHTML = card;
}