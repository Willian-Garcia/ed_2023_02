//P.4.1. Desenvolva um programa que leia os dados de um arquivo de texto e que armazene cada uma das palavras em uma lista encadeada (cada nó da lista contém uma palavra). Depois de carregar os dados na lista, o programa solicita ao usuário a digitação de uma palavra e então faz a busca sequencial e informa a posição da palavra na lista. Caso a palavra apareça mais de uma vez, o programa deve informar isso na saída.
//ARMAZENA DE FORMA GLOBAL O QUE É LIDO DO TXT


import { MyNode, List } from "./list";
import * as fs from "fs";
import * as readline from "readline";

let conteudoDoArquivo: string;

// CAMINHO DO ARQUIVO A SER LIDO
const caminhoDoTxt = './p3/texto.txt';

// FUNÇÃO DE LEITURA
function lerArquivoTxt(caminhoDoTxt: string, callback: (error: Error | null, data: string | null) => void) {
  fs.readFile(caminhoDoTxt, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      callback(err, null);
    } else {
      console.log('Conteúdo do arquivo lido com sucesso:', data);
      conteudoDoArquivo = data;
      callback(null, data);
    }
  });
}

// CHAMADA DA FUNÇÃO PARA LEITURA
lerArquivoTxt(caminhoDoTxt, (error, conteudoDoArquivo) => {
  if (conteudoDoArquivo !== null) {
    const wordList = new List<string>();

    // Divide o conteúdo em palavras e adiciona cada palavra à lista
    const separarPalavras = conteudoDoArquivo.split(' ');
    for (const palavra of separarPalavras) {
      const node = new MyNode<string>(palavra);
      wordList.push(node);
    }

    // Agora você pode usar a função findWordPositions para encontrar uma palavra na lista.
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Digite a palavra que deseja buscar: ", (userInput: string) => {
      const result = findWordPositions(wordList, userInput);
      if (result.positions.length > 0) {
        console.log(`A palavra "${userInput}" aparece nas posições:`);
        for (let i = 0; i < result.positions.length; i++) {
          console.log(`- Posição ${result.positions[i]}`);
        }
        console.log(`A palavra "${userInput}" aparece ${result.count} vezes.`);
      } else {
        console.log(`A palavra "${userInput}" não foi encontrada no arquivo.`);
      }
      rl.close();
    });
  }
});

// Função para buscar a posição de uma palavra na lista
function findWordPositions(wordList: List<string>, targetWord: string): { positions: number[], count: number } {
  const positions: number[] = [];
  let currentNode: MyNode<string> | undefined = wordList.start;
  let index = 1; // Começamos a contar do número 1
  let count = 0;

  while (currentNode) {
    if (currentNode.value === targetWord) {
      positions.push(index);
      count++;
    }

    currentNode = currentNode.next;
    index++;
  }

  return { positions, count };
}




