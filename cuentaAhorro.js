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
exports.cuentaAhorro = void 0;
var ClienteBanco_1 = require("./ClienteBanco");
var cuentaAhorro = /** @class */ (function (_super) {
    __extends(cuentaAhorro, _super);
    function cuentaAhorro(paramPersona, ParamCuenta) {
        var _this = _super.call(this, paramPersona, ParamCuenta) || this;
        _this.persona = paramPersona;
        return _this;
    }
    cuentaAhorro.prototype.setSaldoMinimo = function (paramSaldoMinimo) {
        this.saldoMinimo = paramSaldoMinimo;
    };
    cuentaAhorro.prototype.getSaldoMinimo = function () {
        return this.saldoMinimo;
    };
    cuentaAhorro.prototype.setInteres = function (paramInteres) {
        this.interesVariable = paramInteres;
    };
    cuentaAhorro.prototype.getInteres = function () {
        return this.interesVariable;
    };
    cuentaAhorro.prototype.actualizarSaldo = function () {
        this.saldo = this.saldo * this.interesVariable;
    };
    cuentaAhorro.prototype.retirarDinero = function (efectivo) {
        console.log("cuanto dinero desea retirar");
        var auxiliar = 0;
        auxiliar = this.saldo - this.saldoMinimo;
        if (auxiliar > efectivo) {
            this.saldoMinimo = this.saldoMinimo - efectivo;
            console.log("usted retiro" + efectivo);
        }
        else {
            console.log("retirar dinero en cajero automatico");
        }
    };
    return cuentaAhorro;
}(ClienteBanco_1.cliente));
exports.cuentaAhorro = cuentaAhorro;
