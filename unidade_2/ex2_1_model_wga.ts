//P.2.1. Desenvolva um programa recursivo para calcular o menor elemento presente em um array não ordenado.

function menor_recursiva_wga(a: number[]): number {
    if (a.length == 1) {
      console.log("Caso base atingido!");
      return a[0];
    } else {
      console.log("Chamada recursiva!");
      console.log("Invocando menor_recursiva_wga( ", a.slice(1, a.length), ");");
      let menor_restante = menor_recursiva_wga(a.slice(1, a.length));
      if (a[0] <= menor_restante) {
        return a[0];
      } else {
        return menor_restante;
      }
    }
  }
  
  export { menor_recursiva_wga };