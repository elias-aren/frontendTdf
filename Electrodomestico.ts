class Electrodomestico{
    private nombre:string;
    private precio:number;
    base:string;
    color:string;
    consumo:number;
    peso:number;


    constructor(nombre:string,precio:number,base:string,color:string,consumo:number,peso:number){
        this.nombre=nombre;
        this.precio=precio;
        this.base=base;
        this.color=color;
        this.consumo=consumo;
        this.peso=peso;
    }

}
 public verEncendido():boolean{

 }

public prender():{

}

let electro= new Electrodomestico();
electro.