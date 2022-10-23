import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
export class Entrenador extends Persona{
    persona: Persona;
    relacionLaboral: string;
    pj:number;
    eficiencia:number;
    sistTactico:string;

    constructor(paramPersona:Persona,paramReLaboral:string,paramPJ:number,paramEficiencia:number,paramTactico:string){
            super(paramPersona,paramReLaboral,paramPJ,paramEficiencia,paramTactico)
            this.persona=paramPersona;
            this.relacionLaboral=paramReLaboral;
            this.pj=paramPJ;
            this.eficiencia=paramEficiencia;
            this.sistTactico=paramTactico;

    }

         getSistmatactico(paramTactico:string){
             return this.sistTactico=paramTactico;
         }
         

         
    }
    let datosEntrenador:Persona= new Persona("elias","arenas",29629349,"eliasarenas898@gmail.com","01/02/79");

let entrenador:Entrenador= new Entrenador(datosEntrenador,"contratado",5,50,"1-4-3-1-2");
console.log(entrenador);

