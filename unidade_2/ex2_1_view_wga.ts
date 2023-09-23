//P.2.1. Desenvolva um programa recursivo para calcular o menor elemento presente em um array não ordenado.

import { menor_recursiva_wga} from "./ex2_1_model_wga";

let a: number[] = [1, 4, 0.1, 20, 7];
console.log("Array original:");
console.log(a);
let menor = menor_recursiva_wga(a);
console.log("O menor número do array é: ", menor);