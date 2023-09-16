//P.2.2. Desenvolva um programa recursivo que calcule o elemento com o maior valor absoluto presente em um array não ordenado.

function maior_absoluto_wga(a: number[]): number {
    if (a.length == 1) {
      console.log("Caso base atingido!");
      return a[0];
    } else {
      console.log("Chamada recursiva!");
      console.log("Invocando menor_recursiva_wga( ", a.slice(1, a.length), ");");
      let maior_absoluto = maior_absoluto_wga(a.slice(1, a.length));
      if (Math.abs(a[0])>= Math.abs(maior_absoluto)) {
        return a[0];
      } else {
        return maior_absoluto;
      }
    }
  }
  
  export { maior_absoluto_wga };