//P.1.7. Escreva um programa que exiba um menu contendo 3 alternativas: “1. Dúvidas”,
//“2.Reclamações”, “3.Sair”. O usuário deve digitar a palavra correspondente à opção do menu e,
//dependendo da opção, deve ser fornecida uma orientação ao usuário. Exemplo: Caso o usuário
//digite “Dúvidas” exiba: “Suas dúvidas devem ser encaminhadas para o email
//duvidas@email.com”. Esse programa deve ser escrito em TypeScript e deve fazer uso do bloco
//switch.

import {somar,subtrair,despedir}from "./ex1_7_modelo_wga"
import * as prompt_sync from "prompt-sync"

const prompt = prompt_sync();
let opcao:string;
opcao = prompt("Digite sua opção: ");
let resultado:number;

switch(opcao){
    case "somar":
        resultado = somar(parseInt(prompt("Insira o primeiro valor: ")),parseInt(prompt("Insira segundo valor: ")));
        console.log(resultado);
        break;
    case "subtrair":
        resultado = subtrair(parseInt(prompt("Insira o primeiro valor: ")),parseInt(prompt("Insira segundo valor: ")));
        console.log(resultado);
        break;
    case "despedir":
        console.log(despedir());

}

export{}