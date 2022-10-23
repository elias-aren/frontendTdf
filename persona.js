"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramDni, paramEmail, paramFecha) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;
        this.email = paramEmail;
        this.fechaDeNacimiento = paramFecha;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getEmail = function () {
        return this.email;
    };
    return Persona;
}());
exports.Persona = Persona;
var persona1 = new Persona("Elias", "Arenas", 29629349, "eliasarenas898@gmail.com", "01/09/82");
console.log(persona1.getDni());
console.log(persona1);
