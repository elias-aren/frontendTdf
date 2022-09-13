var Granjerito = /** @class */ (function () {
    function Granjerito(nombre, apellido, posicion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.posicion = posicion;
    }
    Granjerito.prototype.girarIzquierda = function () {
        console.log("izquierda");
    };
    Granjerito.prototype.girarDerecha = function () {
        console.log("derecha");
    };
    Granjerito.prototype.avanzar = function () {
        var pasos = 0;
        pasos = pasos + 1;
        console.log(pasos);
    };
    Granjerito.prototype.retroceder = function () {
        var pasos = 0;
        pasos = pasos - 1;
        console.log(pasos);
    };
    return Granjerito;
}());
var jhon = new Granjerito("Pedro", "Perez", "izquierda");
jhon.avanzar();
jhon.retroceder();
jhon.girarIzquierda();
jhon.girarDerecha();
