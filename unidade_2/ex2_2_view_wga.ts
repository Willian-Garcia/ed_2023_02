//P.2.2. Desenvolva um programa recursivo que calcule o elemento como maior valor absoluto presente em um array não ordenado.

import { maior_absoluto_wga} from "./ex2_2_model_wga";

let a: number[] = [1, 4, 0, -20, 7,-500];
console.log("Array original:");
console.log(a);
let maior = maior_absoluto_wga(a);
console.log("O menor número do array é: ", maior);