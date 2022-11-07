import { Persona } from "./persona";
export class masajista{
    persona:Persona;
    matricula: number;
    relacionLaboral:string;


    constructor(parampersona:Persona,parammatricula:number,paramrelacionLaboral:string){
        this.persona=parampersona;
        this.matricula=parammatricula;
        this.relacionLaboral=paramrelacionLaboral;
    }
    getMatricula():number{
        return this.matricula;
    }
    setMatricula(nuevaMatricula:number):void{
        this.matricula=nuevaMatricula;

    }
    getRlaboral():string{
        return this.relacionLaboral;
    }
    setRlaboral(condicion:string):void{
        this.relacionLaboral=condicion;
    }
    getDatosPersonales():Persona{
        return this.persona;
    }
    setDatosPersonales(Nmasajista:Persona):void{
        this.persona=Nmasajista;
    }



}
