export class Persona{
   private nombre:string;
   private apellido:string;
   private dni:number;
   private email: string;
   private fechaDeNacimiento: string;

   public constructor(paramNombre:string,paramApellido:string,paramDni:number
    ,paramEmail:string,paramFecha:string){
      this.nombre= paramNombre;
      this.apellido=paramApellido;
      this.dni= paramDni;
      this.email=paramEmail;
      this.fechaDeNacimiento=paramFecha;
   }

   public getNombre():string{
      return this.nombre;
   }
   public getApellido():string{
       return this.apellido;
   }
   public getDni():number{
       return this.dni;
   }
   public getEmail():string{
       return this.email;
   }

}
let persona1: Persona= new Persona("Elias","Arenas",29629349,"eliasarenas898@gmail.com","01/09/82")
console.log(persona1.getDni());
console.log(persona1);