//P.1.1. Crie um programa em typescript e defina:
//a) Uma variável que tenha anotação explícita de tipo numérico.
const numerico = 22;
//b) Uma variável que tenha anotação explícita de tipo string.
const string = "aha";
//c) Uma variável que não tenha anotação explícita de tipo mas que receba um valor lógico.
const logico = true;
//d) Uma variável que seja um JSON contendo propriedades de tipo numérico e de tipo string.
var json = {
    a: "a",
    b: 1,
    C: "c",
  };
//e) Um array numérico com anotação explícita de tipo.
const array_numerico = [1,2,3];

//Execute cada um desses programas e mostre na saída os valores e os tipos utilizando a função typeof()
console.log(typeof(numerico));
console.log(typeof(string));
console.log(typeof(logico));
console.log(typeof(json));
console.log(typeof(array_numerico));