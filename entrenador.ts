import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
export class Entrenador{
    persona: Persona;
    relacionLaboral: string;
    pj:number;
    eficiencia:number;
    sistTactico:string;
    listadoDjugadores:Futbolista[];
    

    constructor(paramPersona:Persona,paramSistemaTactico:string,paramEfc:number,paramPj:number,paramRl:string,paramLista?:Array<Futbolista>){
            this.persona=paramPersona;
            this.relacionLaboral=paramRl;
            this.pj=paramPj;
            this.eficiencia=paramEfc;
            this.sistTactico=paramSistemaTactico;
            this.listadoDjugadores=paramLista;
            

    }
    getEntrenador(persona:Persona):Persona{
        return persona;
    }
    

         setSistmatactico(paramTactico:string):void{
             this.sistTactico=paramTactico;
         }
         getSistemaTactico():string{
             return this.sistTactico
         }
        convocarFutbolistas(defensor:Futbolista):void{


            this.listadoDjugadores.push(defensor);
            
            }


            contarlistado():number{
                return this.listadoDjugadores.length;
            }
            
            getEficiencia():number{
                return this.eficiencia;
            }
            setEficiencia(paramEfc:number):void{
                this.eficiencia=paramEfc;

            }

            getListadoDeJugadores():Array<Futbolista>{
                let arregloFutbolistas: Array<Futbolista>;
                for(let index:0;index<this.contarlistado();index++){
                    let pos=this.listadoDjugadores[index].Obtenerposicion();
                    let club=this.listadoDjugadores[index].ObtnerClub();
                    let nombre=this.listadoDjugadores[index].persona.getNombre();
                    let apellido=this.listadoDjugadores[index].persona.getApellido();
                    let pasaport=this.listadoDjugadores[index].persona.getPasaporte();
                    let fecha=this.listadoDjugadores[index].persona.getNacimiento();
                    let datosDeFutbolista= new Persona(nombre,apellido,pasaport,fecha);
                    let jugador5= new Futbolista(datosDeFutbolista,pos,club);
                    arregloFutbolistas.push(jugador5);
                }
                return arregloFutbolistas;
                }
            }
        

         
         
         
   




