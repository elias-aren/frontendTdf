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
exports.cuentaCorriente = void 0;
var ClienteBanco_1 = require("./ClienteBanco");
var cuentaCorriente = /** @class */ (function (_super) {
    __extends(cuentaCorriente, _super);
    function cuentaCorriente(paramPersona, paramCuenta) {
        var _this = _super.call(this, paramPersona, paramCuenta) || this;
        _this.interes = 0.015;
        _this.cuenta = paramCuenta;
        return _this;
    }
    cuentaCorriente.prototype.retirarDinero = function (efectivo) {
        if (this.getSaldo() > efectivo) {
            this.saldo = this.saldo - efectivo;
            console.log("el saldo actual es:", this.saldo);
        }
        else {
            console.log("saldo insuficiente");
        }
        ;
    };
    cuentaCorriente.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interes;
    };
    return cuentaCorriente;
}(ClienteBanco_1.cliente));
exports.cuentaCorriente = cuentaCorriente;
