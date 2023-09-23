import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let n1_wga:number = parseInt(prompt("Digite o primeiro número:"));
let n2_wga:number = parseInt(prompt("Digite o segundo número:"));

let resultado_wga:string = ""; 

switch (true){
    case n1_wga > n2_wga:
        resultado_wga = "O primeiro número é o maior.";
        break;

    case n1_wga <= n2_wga:
        resultado_wga = "O primeiro número é menor ou igual ao segundo.";
        break;
}
console.log (resultado_wga);

export {};