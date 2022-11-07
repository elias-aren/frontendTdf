"use strict";
exports.__esModule = true;
exports.Entrenador = void 0;
var persona_1 = require("./persona");
var futbolista_1 = require("./futbolista");
var Entrenador = /** @class */ (function () {
    function Entrenador(paramPersona, paramSistemaTactico, paramEfc, paramPj, paramRl, paramLista) {
        this.persona = paramPersona;
        this.relacionLaboral = paramRl;
        this.pj = paramPj;
        this.eficiencia = paramEfc;
        this.sistTactico = paramSistemaTactico;
        this.listadoDjugadores = paramLista;
    }
    Entrenador.prototype.getEntrenador = function (persona) {
        return persona;
    };
    Entrenador.prototype.setSistmatactico = function (paramTactico) {
        this.sistTactico = paramTactico;
    };
    Entrenador.prototype.getSistemaTactico = function () {
        return this.sistTactico;
    };
    Entrenador.prototype.convocarFutbolistas = function (defensor) {
        this.listadoDjugadores.push(defensor);
    };
    Entrenador.prototype.contarlistado = function () {
        return this.listadoDjugadores.length;
    };
    Entrenador.prototype.getEficiencia = function () {
        return this.eficiencia;
    };
    Entrenador.prototype.setEficiencia = function (paramEfc) {
        this.eficiencia = paramEfc;
    };
    Entrenador.prototype.getListadoDeJugadores = function () {
        var arregloFutbolistas;
        for (var index = void 0; index < this.contarlistado(); index++) {
            var pos = this.listadoDjugadores[index].Obtenerposicion();
            var club = this.listadoDjugadores[index].ObtnerClub();
            var nombre = this.listadoDjugadores[index].persona.getNombre();
            var apellido = this.listadoDjugadores[index].persona.getApellido();
            var pasaport = this.listadoDjugadores[index].persona.getPasaporte();
            var fecha = this.listadoDjugadores[index].persona.getNacimiento();
            var datosDeFutbolista = new persona_1.Persona(nombre, apellido, pasaport, fecha);
            var jugador5 = new futbolista_1.Futbolista(datosDeFutbolista, pos, club);
            arregloFutbolistas.push(jugador5);
        }
        return arregloFutbolistas;
    };
    return Entrenador;
}());
exports.Entrenador = Entrenador;
