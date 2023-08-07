"use strict";
exports.__esModule = true;
exports.ruleta = void 0;
var ruleta = /** @class */ (function () {
    function ruleta(paramApuesta) {
        this.rojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.negro = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 24, 26, 28, 29, 31, 33, 35];
        this.docena = [2, 4, 6, 8, 10, 12];
        this.segundaDocena = [14, 16, 18, 20, 22, 24];
        this.terceraDocena = [26, 28, 30, 32, 34, 36];
        this.apuesta = paramApuesta;
    }
    ruleta.prototype.setRojo = function () {
    };
    ruleta.prototype.generarAleatorios = function (minimo, maximo) {
        var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo) + minimo);
        return numeroAleatorio;
    };
    ruleta.prototype.buscarCoincidenciaRojo = function (numero) {
        var coincidencia = false;
        for (var i = 0; i < this.rojo.length; i++) {
            if (numero === this.rojo[i])
                coincidencia = true;
        }
        return coincidencia;
    };
    return ruleta;
}());
exports.ruleta = ruleta;
var apuesta = "apuestaRojo";
var juego1 = new ruleta(apuesta);
var aleatorio = juego1.generarAleatorios(0, 36);
console.log(aleatorio);
console.log(juego1.buscarCoincidenciaRojo(aleatorio));
