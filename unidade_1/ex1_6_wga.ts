//P.1.6. Repita o exercício P.1.5 mas utilizado operadores relacionais ao invés do método charCodeAt().

class Compararacao {
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