//P.1.5. Escreva um programa, em TypeScript, que solicite que o usuário digite duas palavras e diga qual delas aparece antes da outra no dicionário. O programa não deve solicitar nenhuma informação adicional por parte do usuário e supõe que as palavras são escritas somente com caracteres de ‘a’ a ‘z’. Para esse caso, especifique, também, o algoritmo em pseudocódigo, conforme notação explicada em sala de aula. Utilize o método de string charCodeAt().

import promptSync from "prompt-sync";

const prompt = promptSync();

//Essa função recebe uma string palavra e a transforma em uma sequência de números, onde cada número representa a posição da letra no alfabeto. 
function transformar_wga(palavra: string): number[] {     
    const numeros: number[] = [];
    for (let i = 0; i < palavra.length; ++i) {
        const numero = palavra.charCodeAt(i);
        if (numero >= 65 && numero <= 90) // Latin - maiúsculo 
            numeros.push(numero - 64);
        else if (numero >= 97 && numero <= 122) // Latin - minúsculo
            numeros.push(numero - 96);
    }
    //console.log(numeros);
    return numeros;

}

function comparar(palavra1: string, palavra2: string): string {
    const numeros1 = transformar_wga(palavra1);
    const numeros2 = transformar_wga(palavra2);

    let i = 0;
    while (i < numeros1.length && i < numeros2.length) {
        if (numeros1[i] < numeros2[i]) {
            return palavra1;
        } else if (numeros1[i] > numeros2[i]) {
            return palavra2;
        }
        i++;
    }

    if (numeros1.length === numeros2.length) {
        return palavra1; // Palavras iguais
    } else {
        return numeros1.length < numeros2.length ? palavra1 : palavra2;
    }
}

export {transformar_wga, comparar}
