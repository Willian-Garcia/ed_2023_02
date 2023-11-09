//P.4.1. Desenvolva um programa que leia os dados de um arquivo de texto e que armazene cada uma das palavras em uma lista encadeada (cada nó da lista contém uma palavra). Depois de carregar os dados na lista, o programa solicita ao usuário a digitação de uma palavra e então faz a busca sequencial e informa a posição da palavra na lista. Caso a palavra apareça mais de uma vez, o programa deve informar isso na saída.

import { MyNode, List } from "./list";
import * as fs from "fs";
import * as readline from "readline";

// Função para ler as palavras do arquivo de texto e armazená-las na lista encadeada
function readWordsFromFile(filename: string): List<string> {
  const wordList = new List<string>();
  const fileContents = fs.readFileSync(filename, "utf-8");
  const words = fileContents.match(/\b\w+\b/g);

  if (words) {
    for (const word of words) {
      wordList.add(new MyNode<string>(word));
    }
  }

  return wordList;
}

const filename = "./p3/texto.txt"; // Substitua pelo nome do seu arquivo de texto
const wordList = readWordsFromFile(filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a palavra que deseja buscar: ", (userInput: string) => {
  const result = findWordPositions(wordList, userInput);
  if (result.positions.length > 0) {
    console.log(`A palavra "${userInput}" aparece nas posições:`);
    for (let i = 0; i < result.positions.length; i++) {
      console.log(`- Posição ${i + 1}: ${result.positions[i]}`);
    }
    console.log(`A palavra "${userInput}" aparece ${result.count} vezes.`);
  } else {
    console.log(`A palavra "${userInput}" não foi encontrada no arquivo.`);
  }
  rl.close();
});

// Função para buscar a posição de uma palavra na lista
function findWordPositions(wordList: List<string>, targetWord: string): { positions: number[], count: number } {
  const positions: number[] = [];
  let currentNode: MyNode<string> | undefined = wordList.start;
  let index = 0;
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

