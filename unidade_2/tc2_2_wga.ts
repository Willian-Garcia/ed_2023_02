/* 
TC.2.2. Dê um exemplo de algoritmo recursivo que apresente complexidade espacial superior a
outro, também recursivo, porém distinto. Ilustre esboçando os dados de programa e entrada
na pilha de execução. OBS: Seu exemplo não precisa conter código de programação mas sim
explicar o porquê da complexidade computacional superior utilizando pseudocódigo para
representar os dados analisados.
*/

function fatorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const resultadoFatorial = fatorial(5);
console.log(resultadoFatorial); // Saída: 120

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const resultadoFibonacci = fibonacci(5);
console.log(resultadoFibonacci); // Saída: 5

/* 
Cálculo de fatorial(5):

Chamada inicial: fatorial(5)
fatorial(5) chama fatorial(4)
fatorial(4) chama fatorial(3)
fatorial(3) chama fatorial(2)
fatorial(2) chama fatorial(1)
fatorial(1) chama fatorial(0)
Neste caso, o algoritmo de cálculo do fatorial tem uma pilha de chamadas recursivas que cresce linearmente com o valor de entrada n. Portanto, a complexidade espacial é O(n).

Cálculo de fibonacci(5):

Chamada inicial: fibonacci(5)
fibonacci(5) chama fibonacci(4) e fibonacci(3)
fibonacci(4) chama fibonacci(3) e fibonacci(2)
fibonacci(3) chama fibonacci(2) e fibonacci(1)
fibonacci(2) chama fibonacci(1) e fibonacci(0)
Neste caso, o algoritmo de cálculo de Fibonacci tem uma pilha de chamadas recursivas que cresce exponencialmente com o valor de entrada n. Isso ocorre porque, para calcular fibonacci(n), ele chama fibonacci(n-1) e fibonacci(n-2), resultando em uma árvore de chamadas recursivas de profundidade exponencial.

Portanto, a complexidade espacial do algoritmo de Fibonacci é O(2^n), o que é significativamente maior do que a complexidade espacial do algoritmo de cálculo do fatorial. Isso ilustra que nem todos os algoritmos recursivos têm a mesma complexidade espacial, e é importante escolher algoritmos que sejam eficientes em termos de uso de memória, quando apropriado.
*/