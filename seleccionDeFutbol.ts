import { Entrenador } from "./entrenador";
import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
import { masajista } from "./masajista";
export class Seleccion {
  private masajista: masajista;
  private entrenador: Entrenador;
  listaDFutbolistas: Futbolista[];
  constructor(masajista: masajista, entrenador: Entrenador, futbolista: Array<Futbolista>) {
    this.masajista = masajista;
    this.entrenador = entrenador;
    this.listaDFutbolistas = futbolista;


  }

  futbolistasConvocados(): Futbolista[] {
    return this.listaDFutbolistas;
  }
  evaluarEntrenador(): void {

    if (this.entrenador.getEficiencia() < 50)
      console.log("rescindir contrato del entrenador")
    else
      console.log("evaluar extension del contrato")
  }

}

let datosEntrenador: Persona = new Persona("Fernando", "Ortiz", 32620349, "01/02/85");
let datosDeJugador: Persona = new Persona("pepe", "sand", 345, "09/01/65");
let datosDeJugador3: Persona = new Persona("sebastian", "Grall", 345, "09/01/65");
let datosDeJugador2: Persona = new Persona("pato", "Graph", 345, "09/01/65");
let jugadorDe2: Futbolista = new Futbolista(datosDeJugador2, "medio", "tigre");
//let jugadorDe3:Futbolista= new Futbolista( datosDeJugador3,"delantero","river");

let jugadorDe: Futbolista = new Futbolista(datosDeJugador, "defensor", "velez");
let listaPreeliminar: Futbolista[] = [];
let entrenador: Entrenador = new Entrenador(datosEntrenador, "1-4-4-2", 60, 15, "contratado", listaPreeliminar);
let profesional: masajista = new masajista(datosDeJugador3, 323, "contratado")
entrenador.convocarFutbolistas(jugadorDe2);;
entrenador.convocarFutbolistas(jugadorDe);


console.log(entrenador);
console.log(entrenador.contarlistado());
let ecuador: Seleccion = new Seleccion(profesional, entrenador, listaPreeliminar)
console.log("la eficiencia es" + entrenador.getEficiencia());
ecuador.evaluarEntrenador();
console.log(jugadorDe.Obtenerposicion());


