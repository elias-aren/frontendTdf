class Rectangulo {
    base: number;
    altura: number;

    constructor(paramBase: number, paramAltura: number) {
        this.base = paramBase;
        this.altura = paramAltura;
    }
    getArea(paramBase: number, paramAltura: number): number {
        let area: number;
        area = this.base * this.altura;
        return area

    }
    getIguales(paramBase: number, paramAltura: number): boolean {
        let iguales: boolean = false;
        if (paramBase === paramAltura)
            iguales = true;
        return iguales;
    }
    esCuadrado(paramBase: number, paramAltura: number): void {
        if (this.getIguales(paramBase, paramAltura) == true)
            console.log("es cuadrado")
        else {
            (console.log("no es cuadrado"));
        }
    }
    estaAcostado(paramBase: number, paramAltura: number): void {
        if (paramBase > paramAltura)
            console.log("el rectangulo esta acostado");
        else {
            console.log("el rectangulo esta parado")
        }

    }
    compararRectangulos(paramBase: number, paramAltura: number): number {
        if (this.getArea(paramBase, paramAltura) === this.getArea(paramBase, paramAltura))

            return 0;
        else {
            if (this.getArea(paramBase, paramAltura) > this.getArea(paramBase, paramAltura))
                return 1
            else {
                return -1;
            }
        }

    }
}
let rectangulo1: Rectangulo = new Rectangulo(3, 2);
let rectangulo2: Rectangulo = new Rectangulo(5, 2);
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
        console.log("el rectangulo 1 es mayor")
    else {
        console.log("el rectangulo 2 es mayor");
    }
}

