"use strict";
exports.__esModule = true;
exports.Futbolista = void 0;
var Futbolista = /** @class */ (function () {
    function Futbolista(paramPersona, paramPosicion, paramClub) {
        this.persona = paramPersona;
        this.posicion = paramPosicion;
        this.club = paramClub;
    }
    Futbolista.prototype.Obtenerposicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.ObtnerClub = function () {
        return this.club;
    };
    Futbolista.prototype.cambiarPosicion = function (paramNPosicion) {
        this.posicion = paramNPosicion;
    };
    Futbolista.prototype.cambiarClub = function (paramNClub) {
        this.club = paramNClub;
    };
    return Futbolista;
}());
exports.Futbolista = Futbolista;
