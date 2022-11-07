"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var entrenador_1 = require("./entrenador");
var persona_1 = require("./persona");
var futbolista_1 = require("./futbolista");
var masajista_1 = require("./masajista");
var Seleccion = /** @class */ (function () {
    function Seleccion(masajista, entrenador, futbolista) {
        this.masajista = masajista;
        this.entrenador = entrenador;
        this.listaDFutbolistas = futbolista;
    }
    Seleccion.prototype.futbolistasConvocados = function () {
        return this.listaDFutbolistas;
    };
    Seleccion.prototype.evaluarEntrenador = function () {
        if (this.entrenador.getEficiencia() < 50)
            console.log("rescindir contrato del entrenador");
        else
            console.log("evaluar extension del contrato");
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
var datosEntrenador = new persona_1.Persona("Fernando", "Ortiz", 32620349, "01/02/85");
var datosDeJugador = new persona_1.Persona("pepe", "sand", 345, "09/01/65");
var datosDeJugador3 = new persona_1.Persona("sebastian", "Grall", 345, "09/01/65");
var datosDeJugador2 = new persona_1.Persona("pato", "Graph", 345, "09/01/65");
var jugadorDe2 = new futbolista_1.Futbolista(datosDeJugador2, "medio", "tigre");
//let jugadorDe3:Futbolista= new Futbolista( datosDeJugador3,"delantero","river");
var jugadorDe = new futbolista_1.Futbolista(datosDeJugador, "defensor", "velez");
var listaPreeliminar = [];
var entrenador = new entrenador_1.Entrenador(datosEntrenador, "1-4-4-2", 60, 15, "contratado", listaPreeliminar);
var profesional = new masajista_1.masajista(datosDeJugador3, 323, "contratado");
entrenador.convocarFutbolistas(jugadorDe2);
;
entrenador.convocarFutbolistas(jugadorDe);
console.log(entrenador);
console.log(entrenador.contarlistado());
var ecuador = new Seleccion(profesional, entrenador, listaPreeliminar);
console.log("la eficiencia es" + entrenador.getEficiencia());
ecuador.evaluarEntrenador();
console.log(jugadorDe.Obtenerposicion());
