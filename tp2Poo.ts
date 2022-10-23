class Rectangulo{
     base: number;
     altura: number;

    constructor(parambase: number, paramaltura:number){
    this.base=parambase;
    this.altura=paramaltura;   
    }

  
public calcularArea(base:number,altura:number):number{
    let area=0;
    area=(base*altura)/2;
return area;
}
public mostrarArea():void{
console.log(this.calcularArea);
}
public compararAreas(base:number,altura:number):void{
if(base==altura){
console.log("el rectangulo es un cuadrado")
}
}
}


let rectangulo10= new Rectangulo(4,3)
console.log(rectangulo10.mostrarArea);