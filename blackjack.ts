export class blackjack {
    as:number;
    j:number;
    k:number;
    q:number;
    jugador:number[];
    crupier:number[];
    apuesta:number;
    carta:number;
    figuras:number;




constructor(){
    this.carta=52;
    this.as=4;
    this.figuras=16

}
repartirCartas(cartas:number):void{
this.jugador.push(cartas);

}
pedirCartas():void{
    

    if(this.sumarCartas(this.jugador)<21){
        this.sumarCartas(this.jugador);
    }
}
sumarCartas(jugador:number[]):number{
    let suma:number=0;
for(let i=0;i<jugador.length;i++){
   suma +=jugador[i];
   return suma;
}
}
mezclarCartas():void{

}
plantarse():void{

    if(this.sumarCartas(this.jugador)<21)
        console.log("plantarse");
    
}
}