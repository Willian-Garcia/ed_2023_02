import { List, MyNode } from "./list";
import * as fs from 'fs';
import * as readline from "readline";

function lerArquivoEArmazenarEmLista(texto: string): List<string> {
    const listaPalavras = new List<string>();

    try {
        const conteudoArquivo = fs.readFileSync(texto, 'utf-8');
        const palavras = conteudoArquivo.split(/\s+/).filter(palavra => palavra.trim() !== '');

        for (const palavra of palavras.reverse()) {
            const node = new MyNode<string>(palavra);
            listaPalavras.push(node);
        }

        return listaPalavras;
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
        throw error;
    }
}

function encontrarPalavraNaLista(lista: List<string>, palavra: string): { posicoes: number[], quantidade: number } {
    const posicoes: number[] = [];
    let currentNode = lista.start;
    let index = 0; // Começamos a contar do número 1
    let quantidade = 0;

    while (currentNode) {
        if (currentNode.value === palavra) {
            posicoes.push(index);
            quantidade++;
        }

        currentNode = currentNode.next;
        index++;
    }

    return { posicoes, quantidade };
}

// Exemplo de uso
const caminhoDoArquivo = './p3/texto.txt';
const listaDePalavras = lerArquivoEArmazenarEmLista(caminhoDoArquivo);

// Exibe todo o texto do arquivo
console.log('Conteúdo do arquivo:');
const conteudoArquivo = fs.readFileSync(caminhoDoArquivo, 'utf-8');
console.log(conteudoArquivo);

// Imprime a lista de palavras
/*console.log('Lista de Palavras:');
let currentNode = listaDePalavras.start;
while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}
*/

// Solicita ao usuário a palavra a ser buscada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite a palavra que deseja buscar: ', (palavraABuscar) => {
    const result = encontrarPalavraNaLista(listaDePalavras, palavraABuscar);
    if (result.quantidade > 0) {
        console.log(`A palavra '${palavraABuscar}' aparece nas posições:`);
        for (let i = 0; i < result.posicoes.length; i++) {
            console.log(`- Posição ${result.posicoes[i]}`);
        }
        console.log(`A palavra '${palavraABuscar}' aparece ${result.quantidade} vezes.`);
    } else {
        console.log(`A palavra '${palavraABuscar}' não foi encontrada na lista.`);
    }

    rl.close();
});
