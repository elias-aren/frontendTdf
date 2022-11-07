import { Persona } from "./persona";
export class Futbolista{
    persona: Persona;
    posicion: string;
    club:string;


    constructor(paramPersona:Persona,paramPosicion:string,paramClub:string){
        this.persona=paramPersona;
        this.posicion=paramPosicion;
        this.club=paramClub;
    }

    Obtenerposicion():string{
        return this.posicion;

    }
    ObtnerClub():string{
        return this.club;
    }
    cambiarPosicion(paramNPosicion:string):void{
        this.posicion=paramNPosicion;
    }
    cambiarClub(paramNClub:string):void{
        this.club=paramNClub;
    }
}
