//P.1.5. Escreva um programa, em TypeScript, que solicite que o usuário digite duas palavras e diga
//qual delas aparece antes da outra no dicionário. O programa não deve solicitar nenhuma
//informação adicional por parte do usuário e supõe que as palavras são escritas somente com
//caracteres de ‘a’ a ‘z’. Para esse caso, especifique, também, o algoritmo em pseudocódigo,
//conforme notação explicada em sala de aula. Utilize o método de string charCodeAt().

function comparar(palavra1:string, palavra2:string):string {
  for (let i = 0; i < palavra1.length && i < palavra2.length; i++) {
    const a = palavra1.charCodeAt(i);
    const b = palavra2.charCodeAt(i);

    if (a < b) {
      return `${palavra1} vem antes de ${palavra2}`;
    } else if (a > b){
      return `${palavra2} vem antes de ${palavra1}`;
    }
  }

  if(palavra1.length < palavra2.length){
    return `${palavra1} vem antes de ${palavra2}`;
  }else{
    return `${palavra2} vem antes de ${palavra1}`;
  }
}

const palavra1 = "ama";
const palavra2 = "amar";

const resultado = comparar(palavra1,palavra2);
console.log(resultado);