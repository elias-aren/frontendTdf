var Rectangulo = /** @class */ (function () {
    function Rectangulo(parambase, paramaltura) {
        this.base = parambase;
        this.altura = paramaltura;
    }
    Rectangulo.prototype.calcularArea = function (base, altura) {
        var area = 0;
        area = (base * altura) / 2;
        return area;
    };
    Rectangulo.prototype.mostrarArea = function () {
        console.log(this.calcularArea);
    };
    Rectangulo.prototype.compararAreas = function (base, altura) {
        if (base == altura) {
            console.log("el rectangulo es un cuadrado");
        }
    };
    return Rectangulo;
}());
var rectangulo10 = new Rectangulo(4, 3);
console.log(rectangulo10.mostrarArea);
