// Função recursiva para calcular o fatorial de um número
export function fatorial_wga(n: number, depth: number = 0): number {
    if (n === 0) {
      console.log("*".repeat(depth) + "fatorial(0) = 1");
      return 1;
    } else {
      console.log("*".repeat(depth) + `fatorial(${n}) = ${n} * fatorial(${n - 1})`);
      const result = n * fatorial_wga(n - 1, depth + 1);
      console.log("*".repeat(depth) + `Resultado parcial de fatorial(${n}) = ${result}`);
      return result;
    }
  }
  
  // Função recursiva para gerar a sequência de Fibonacci
 export function fibonacci_wga(n: number, depth: number = 0): number {
    if (n <= 1) {
      console.log("*".repeat(depth) + `fibonacci(${n}) = ${n}`);
      return n;
    } else {
      console.log("*".repeat(depth) + `fibonacci(${n}) = fibonacci(${n - 1}) + fibonacci(${n - 2})`);
      const result = fibonacci_wga(n - 1, depth + 1) + fibonacci_wga(n - 2, depth + 1);
      console.log("*".repeat(depth) + `Resultado parcial de fibonacci(${n}) = ${result}`);
      return result;
    }
  }