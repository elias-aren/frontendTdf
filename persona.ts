export class Persona{
   private nombre:string;
   private apellido:string;
   private pasaporte:number;
   private fechaDeNacimiento: string;

   public constructor(paramNombre:string,paramApellido:string,paramPasaporte:number
    ,paramFecha:string){
      this.nombre= paramNombre;
      this.apellido=paramApellido;
      this.pasaporte= paramPasaporte;
      this.fechaDeNacimiento=paramFecha;
   }

   public getNombre():string{
      return this.nombre;
   }
   public getApellido():string{
       return this.apellido;
   }
   public getPasaporte():number{
       return this.pasaporte;
   }
   public getNacimiento():string{
      return this.fechaDeNacimiento;
   }

}
