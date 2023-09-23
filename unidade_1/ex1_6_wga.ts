//P.1.6. Repita o exercício P.1.5 mas utilizado operadores relacionais ao invés do método charCodeAt().

import promptSync from 'prompt-sync';

const prompt = promptSync();

const word1 = prompt('Digite a primeira palavra: ');
const word2 = prompt('Digite a segunda palavra: ');

if (word1 < word2) {
  console.log(`${word1} aparece antes de ${word2} no dicionário.`);
} else if (word1 > word2) {
  console.log(`${word2} aparece antes de ${word1} no dicionário.`);
} else {
  console.log('As palavras são iguais.');
}

/*Início
  
  Solicitar ao usuário que digite a primeira palavra e armazenar em word1
  Solicitar ao usuário que digite a segunda palavra e armazenar em word2

  Se word1 for menor que word2
    Exibir "word1 aparece antes de word2 no dicionário."
  Senão, se word1 for maior que word2
    Exibir "word2 aparece antes de word1 no dicionário."
  Senão
    Exibir "As palavras são iguais."

Fim*/


/*class Compararacao {
    palavraA: string;
    palavraB: string;
  
    constructor(palavraA: string, palavraB: string) {
      this.palavraA = palavraA;
      this.palavraB = palavraB;
    }
 
    print() {
      if (this.palavraA < this.palavraB) {
        console.log(`A palavra ${this.palavraA} vem antes de ${this.palavraB}`);
      } else if((this.palavraA > this.palavraB)){
        console.log(`A palavra ${this.palavraB} vem antes de ${this.palavraA}`);
      }
      if(this.palavraA == this.palavraB){
        console.log(`As palavras ${this.palavraA} e ${this.palavraB} são iguais`);
      }

      if(this.palavraA.length < this.palavraB.length){
        return `${this.palavraA} vem antes de ${this.palavraB}`;
      }else{
        return `${this.palavraB} vem antes de ${this.palavraA}`;
      }
    }
  }
  
  const resultados = new Compararacao("amar", "ama");
  resultados.print();
*/

/*function compararacao(palavraA:string, palavraB:string):string {
    if (palavraA < palavraB) {
        return `${palavraA} vem antes de ${palavraB}`;
      } else if (palavraA > palavraB){
        return `${palavraB} vem antes de ${palavraA}`;
      }
  
    if(palavraA.length < palavraB.length){
        return `${palavraA} vem antes de ${palavraB}`;
      }else{
        return `${palavraB} vem antes de ${palavraA}`;
      }
} 
       
  const palavraA = "amoroso";
  const palavraB = "amor";
  
  const resultados = compararacao(palavraA,palavraB);
  console.log(resultados);*/