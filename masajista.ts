import { Persona } from "./persona";
export class masajista extends Persona{
    persona:Persona;
    matricula: number;
    relacionLaboral:string;


    constructor(parampersona:Persona,parammatricula:number,paramrelacionLaboral:string){
        super();
        this.persona=parampersona;
        this.matricula=parammatricula;
        this.relacionLaboral=paramrelacionLaboral;
    }



}