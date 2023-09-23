import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let n1_wga:number = parseInt(prompt("Digite o primeiro número:"));
let n2_wga:number = parseInt(prompt("Digite o segundo número:"));

if (n1_wga <= n2_wga){
    console.log("O", n1_wga," é menor ou igual ao", n2_wga)
}
else {
    console.log("O", n1_wga,"é o maior.")
}

