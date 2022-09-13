class Granjerito {
    nombre: string;
    apellido: string;
    quieto:boolean;
    posicion:string;
    camino: string;

    constructor(nombre:string, apellido:string,posicion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.posicion=posicion;
    }
    girarIzquierda(){
        console.log("izquierda");
    }
    girarDerecha(){
        console.log("derecha");
    }
avanzar(){
    let pasos:number=0;
    pasos=pasos+1;
    console.log(pasos);
    }

retroceder(){
    let pasos: number=0;
    pasos=pasos-1;
    console.log(pasos);
}
}

let jhon = new Granjerito("Pedro","Perez","izquierda");
jhon.avanzar();
jhon.retroceder();
jhon.girarIzquierda();
jhon.girarDerecha();
