"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var persona_1 = require("./persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(paramPersona, paramReLaboral, paramPJ, paramEficiencia, paramTactico) {
        var _this = _super.call(this, persona_1.Persona, paramReLaboral, paramPJ, paramEficiencia, paramTactico) || this;
        _this.persona = paramPersona;
        _this.relacionLaboral = paramReLaboral;
        _this.pj = paramPJ;
        _this.eficiencia = paramEficiencia;
        _this.sistTactico = paramTactico;
        return _this;
    }
    Entrenador.prototype.getSistmatactico = function (paramTactico) {
        return this.sistTactico = paramTactico;
    };
    return Entrenador;
}(persona_1.Persona));
exports.Entrenador = Entrenador;
var datosEntrenador = new persona_1.Persona("elias", "arenas", 29629349, "eliasarenas898@gmail.com", "01/02/79");
var entrenador = new Entrenador(datosEntrenador, "contratado", 5, 50, "1-4-3-1-2");
console.log(entrenador);
