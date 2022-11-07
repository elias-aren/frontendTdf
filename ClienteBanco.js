"use strict";
exports.__esModule = true;
exports.cliente = void 0;
var cliente = /** @class */ (function () {
    function cliente(paramCliente, paramCuenta) {
        this.cliente = paramCliente;
        this.cuenta = paramCuenta;
        this.saldo = 0;
    }
    cliente.prototype.getCliente = function () {
        return this.cliente;
    };
    cliente.prototype.getCuenta = function () {
        return this.cuenta;
    };
    cliente.prototype.getSaldo = function () {
        return this.saldo;
    };
    cliente.prototype.setCliente = function (paramCliente) {
        this.cliente = paramCliente;
    };
    cliente.prototype.setCuenta = function (paramCuenta) {
        this.cuenta = paramCuenta;
    };
    cliente.prototype.setSaldo = function (paramSaldo) {
        this.saldo = paramSaldo;
    };
    cliente.prototype.ingresarDinero = function (paramDinero) {
        this.cuenta = paramDinero;
        this.saldo = this.saldo + paramDinero;
    };
    return cliente;
}());
exports.cliente = cliente;
