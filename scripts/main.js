import { series } from './data.js';
var table = document.getElementById("table");
var data = document.getElementById("data");
function mostrarListado(data, body) {
    var htmlVar = "";
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        htmlVar += "\n        <tr class=\"Serie\">\n            <td>".concat(data[i].id, "</td>\n            <td id = \"nombre-serie\">").concat(data[i].name, "</td>\n            <td>").concat(data[i].channel, "</td>\n            <td>").concat(data[i].seasons, "</td>\n        </tr>");
        sum += data[i].seasons;
    }
    htmlVar += "\n    <tr id = \"average\"><h6>Seasons average: ".concat(sum / data.length, "</h2></tr>");
    body.innerHTML = htmlVar;
}
mostrarListado(series, table);
var datav2 = document.getElementsByClassName("Serie");
var _loop_1 = function (i) {
    datav2[i].addEventListener("click", function () {
        showDetail(i);
    });
};
for (var i = 0; i < data.clientHeight; i++) {
    _loop_1(i);
}
function showDetail(i) {
    data.innerHTML = "";
    var currentSerie = series[i];
    var card = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img src= \"".concat(currentSerie.image, "\" alt=\"No se encontr\u00F3 imagen\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(currentSerie.name, "</h5>\n            <p class=\"card-text\">").concat(currentSerie.description, "</p>\n            <a href=\"").concat(currentSerie.url, "\">").concat(currentSerie.url, "</a>\n        </div>\n        </div>\n        ");
    data.innerHTML = card;
}
