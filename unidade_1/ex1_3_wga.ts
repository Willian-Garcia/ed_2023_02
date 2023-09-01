//P.1.3 Escreva um programa, em TypeScript, que solicite que o usuário digite dois números e imprima o maior deles.

class Maior {
  valor1: number;
  valor2: number;

  constructor(valor1: number, valor2: number) {
    this.valor1 = valor1;
    this.valor2 = valor2;
  }

  print() {
    if (this.valor1 < this.valor2) {
      console.log(`Número ${this.valor2} é maior`);
    } else {
      console.log(`Número ${this.valor1} é maior`);
    }
  }
}

const teste = new Maior(3, 1);
teste.print();
