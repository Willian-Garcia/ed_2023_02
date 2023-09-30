//P.2.8. Defina uma classe que modele uma caixa d’água. A caixa deve conter uma determinada quantidade de líquido (em litros). Defina um método, que retorna o valor total em litros, obtido de modo recursivo extraindo litro a litro a capacidade da caixa d´água até esgotar sua capacidade (esvaziar).

class CaixaAgua_wga {
    volume: number;
  
    constructor(volume: number) {
      this.volume = volume;
    }
  
    esvaziar_wga(): number {
      if (this.volume === 0) {
        return 0; // A caixa já está vazia
      } else {
        console.log(`Esvaziando 1 litro. Restam ${this.volume - 1} litros.`);
        this.volume -= 1;
        return 1 + this.esvaziar_wga(); // Chama recursivamente para esvaziar o restante
      }
    }
  }
  
  const minhaCaixa = new CaixaAgua_wga(10);
  console.log(`Total litros retirados: ${minhaCaixa.esvaziar_wga()}`);