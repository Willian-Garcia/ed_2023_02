function FatorialCalcular1(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * FatorialCalcular1(n - 1);
    }
  }
  
  // Exemplo de uso da função:
  const resultado2 = FatorialCalcular1(5); // Isso calculará o fatorial de 5
  console.log(resultado2); // O resultado será 120