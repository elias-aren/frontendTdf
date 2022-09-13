var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.hablar = function () {
        console.log('hola');
    };
    Persona.prototype.razonar = function () {
        var numero = 5;
        var numero2 = 7;
        console.log(numero + numero2);
    };
    return Persona;
}());
var juan = new Persona();
juan.hablar();
juan.razonar();
