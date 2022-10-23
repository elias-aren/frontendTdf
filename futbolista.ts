import { Persona } from "./persona";
export class Futbolista extends Persona{
    persona: Persona;
    posicion: string;
    club:string;


    constructor(paramPersona:Persona,paramPosicion:string,paramClub:string){
        super(paramPersona,paramPosicion,paramClub);
        this.persona=paramPersona;
        this.posicion=paramPosicion;
        this.club=paramClub;
    }
    
}