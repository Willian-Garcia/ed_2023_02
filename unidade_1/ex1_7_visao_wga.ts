import {somar,subtrair,despedir}from "./ex1_7_modelo_wga"

let escolha:string;
escolha = "despedir";
let resultado:number;

switch(escolha){
    case "somar":
        resultado = somar(1,2);
        console.log(resultado);
        break;
    case "subtrair":
        resultado = subtrair(1,2);
        console.log(resultado);
        break;
    case "despedir":
        console.log(despedir());

}