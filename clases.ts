class Persona{
    nombre: string;
    apellido: string;
    dni:number;
    edad:number;
    vivo: boolean;

 hablar(){
    console.log('hola');
    }
razonar(){
    let numero : number=5;
    let numero2: number= 7;
    console.log(numero+numero2);
}
}

let juan= new Persona();
juan.hablar();
juan.razonar();
