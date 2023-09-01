//P.1.4. Escreva um programa, em TypeScript, que solicite que o usuário digite duas letras e diga qual delas vem antes e qual vem depois no alfabeto.

class Comparar {
    dado1: string;
    dado2: string;
  
    constructor(dado1: string, dado2: string) {
      this.dado1 = dado1;
      this.dado2 = dado2;
    }
  
    print() {
      if (this.dado1 < this.dado2) {
        console.log(`A letra ${this.dado1} vem antes de ${this.dado2}`);
      } else {
        console.log(`A letra ${this.dado2} vem antes de ${this.dado1}`);
      }
      if(this.dado1 == this.dado2){
        console.log(`As letras ${this.dado1} e ${this.dado2} são iguais`);
      }
    }
  }
  
  const analise = new Comparar("b", "b");
  analise.print();
  