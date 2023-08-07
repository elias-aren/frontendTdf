"use strict";
exports.__esModule = true;
exports.tragamonedas = void 0;
var tragamonedas = /** @class */ (function () {
    function tragamonedas(paramCarretel1) {
        this.carretel1Azar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.carretel1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.carretel2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.carretel3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.carretel1Azar = paramCarretel1;
        this.carretel2Azar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    //girarCarreteles(maximo:number,minimo:number):void{
    // for(let i=0;i< this.carretel1.length;i++){
    //let azar1:number=Math.floor(Math.random()*(maximo-minimo)+minimo)
    // this.carretel1Azar.push(azar1);
    // this.carretel2Azar.push(azar1);
    //this.carretel3Azar.push(azar1);
    // }
    //}
    tragamonedas.prototype.girarCarreteles = function (carretel1Azar) {
        for (var i = 0; i < this.carretel1.length; i++) {
            var maximo = 10;
            var minimo = 0;
            var azar1 = Math.floor(Math.random() * (maximo - minimo) + minimo);
            this.carretel1Azar.push(azar1);
        }
    };
    tragamonedas.prototype.girarCarretel234 = function (carretel1) {
        //for(let i=0;i<7;i++){
        // let carreteAux:number[]=[0,0,0,0,0,0,0,0,0,0];
        //carreteAux[0]=this.carretel1[9];
        //this.carretel2Azar[0]=this.carretel1[9];
        for (var i = 0; i < 9; i++) {
            var carreteAux = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            carreteAux[0] = this.carretel1[9];
            //for(let i=0;i<9;i++){
            carreteAux[i + 1] = carretel1[i];
            //}
            //for(let i=0;i<9;i++){
            //carretel1[i]=carreteAux[i];
            //carreteAux[i]=0;
            return carreteAux;
        }
        //return carretel1;
    };
    //return carretel1;
    //return this.carretel2Azar; 
    //}
    //return carretel1;
    //}
    // return this.carretel2Azar; 
    tragamonedas.prototype.compararCarreteles = function () {
        for (var i = 5; i < 8; i++) {
            if (this.carretel1Azar[i] == this.carretel2Azar[i]) {
                var carretele1y2 = this.carretel1Azar[i];
                if (carretele1y2 == this.carretel3Azar[i]) {
                    console.log("felicidades, ganaste");
                }
                else {
                    console.log("segui participando");
                }
            }
        }
    };
    return tragamonedas;
}());
exports.tragamonedas = tragamonedas;
var carret1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tragamonedas1 = new tragamonedas(carret1);
console.log(tragamonedas1.girarCarretel234(carret1));
//console.log(tragamonedas1.girarCarreteles(10,0));
//console.log(tragamonedas1)
