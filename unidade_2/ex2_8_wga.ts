//P.2.8. Defina uma classe que modele uma caixa d’água. A caixa deve conter uma determinada quantidade de líquido (em litros). Defina um método, que retorna o valor total em litros, obtido de modo recursivo extraindo litro a litro a capacidade da caixa d´água até esgotar sua capacidade (esvaziar).

class caixaAgua{

    volume:number;

    constructor(volume:number){
        this.volume = volume;
    }

    esvaziar():number{
        if(this.volume == 1 || 0){
            return 1;
        }else{
            return (this.volume - 1);
        }
    }
}