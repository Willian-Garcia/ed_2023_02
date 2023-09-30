//P.2.3. Desenvolva um programa recursivo que calcule o fatorial do n-ésimo número. Faça a análise de desempenho do programa através da criação do cache para chamadas repetidas à função utilizando o mesmo argumento. Considere que a função é um método de uma classe denominada de Factorial. Crie um gráfico que mostre a evolução do tempo de execução para repetidas chamadas à mesma função, comparando a versão com e sem cache, aumentando-se o número de vezes que a função e invocada, fixando-se n (preferencialmente um valor alto que não gere estouro de pilha).

class FatorialCalculador {
    listaResultados: number[] = [];
 
     calcularFatorialComArmazenamento(n: number): number {
         if (n === 0 || n === 1) {
             return 1;
         } else {
             const fatorialNMenos1 = this.calcularFatorialComArmazenamento(n - 1);
             this.listaResultados.push(fatorialNMenos1);
             const fatorialN = n * fatorialNMenos1;
             return fatorialN;
         }
     }
 
    obterListaResultados(): number[] {
         return this.listaResultados;
     }
 }
 
 const fatorialCalculador = new FatorialCalculador();
 const resultado1 = fatorialCalculador.calcularFatorialComArmazenamento(5);
 const listaResultados = fatorialCalculador.obterListaResultados();
 
 console.log("Resultado do fatorial:", resultado1);
 console.log("Lista de resultados intermediários:", listaResultados);

 