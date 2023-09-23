// P.2.7. Defina uma classe MyArray que contenha um método que imprima de modo recursivo todos os elementos do array e que contenha outro método, também recursivo, que retorne os elementos do array em ordem reversa. 

class MyArray_wga {
    constructor(private array: any[]) {}
  
    imprimirRecursivo(index: number = 0) {
      if (index < this.array.length) {
        console.log(this.array[index]);
        this.imprimirRecursivo(index + 1);
      }
    }
  
    recursivoOrdemReversa(index: number = this.array.length - 1) {
      if (index >= 0) {
        console.log(this.array[index]);
        this.recursivoOrdemReversa(index - 1);
      }
    }
  }
  
  const numeros = [3,6,9,12,15];
  const myArray_JMM = new MyArray_wga(numeros);
  
  console.log("Elementos do array (recursivo):");
  myArray_JMM.imprimirRecursivo();
  
  console.log("Elementos do array (recursivo) em ordem reversa:");
  myArray_JMM.recursivoOrdemReversa();