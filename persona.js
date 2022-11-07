"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramPasaporte, paramFecha) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.pasaporte = paramPasaporte;
        this.fechaDeNacimiento = paramFecha;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getPasaporte = function () {
        return this.pasaporte;
    };
    Persona.prototype.getNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    return Persona;
}());
exports.Persona = Persona;
