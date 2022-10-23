var Rectangulo = /** @class */ (function () {
    function Rectangulo(paramBase, paramAltura) {
        this.base = paramBase;
        this.altura = paramAltura;
    }
    Rectangulo.prototype.getArea = function (paramBase, paramAltura) {
        var area;
        area = this.base * this.altura;
        return area;
    };
    Rectangulo.prototype.getIguales = function (paramBase, paramAltura) {
        var iguales = false;
        if (paramBase === paramAltura)
            iguales = true;
        return iguales;
    };
    Rectangulo.prototype.esCuadrado = function (paramBase, paramAltura) {
        if (this.getIguales(paramBase, paramAltura) == true)
            console.log("es cuadrado");
        else {
            (console.log("no es cuadrado"));
        }
    };
    Rectangulo.prototype.estaAcostado = function (paramBase, paramAltura) {
        if (paramBase > paramAltura)
            console.log("el rectangulo esta acostado");
        else {
            console.log("el rectangulo esta parado");
        }
    };
    Rectangulo.prototype.compararRectangulos = function (paramBase, paramAltura) {
        if (this.getArea(paramBase, paramAltura) === this.getArea(paramBase, paramAltura))
            return 0;
        else {
            if (this.getArea(paramBase, paramAltura) > this.getArea(paramBase, paramAltura))
                return 1;
            else {
                return -1;
            }
        }
    };
    return Rectangulo;
}());
var rectangulo1 = new Rectangulo(3, 2);
var rectangulo2 = new Rectangulo(5, 2);
rectangulo1.esCuadrado(3, 2);
rectangulo2.estaAcostado(3, 2);
console.log(rectangulo1);
console.log("El area del rectangulo 1 es" + ":" + " " + rectangulo1.getArea(3, 2));
console.log(rectangulo1.getIguales(3, 2));
console.log(rectangulo2);
console.log("El area del rectangulo 2 es" + ":" + " " + rectangulo2.getArea(5, 2));
if (rectangulo1.getArea(3, 2) === rectangulo2.getArea(5, 2))
    console.log("son iguales");
else {
    if (rectangulo1.getArea(3, 2) > rectangulo2.getArea(5, 2))
        console.log("el rectangulo 1 es mayor");
    else {
        console.log("el rectangulo 2 es mayor");
    }
}
