import { Livro } from "../modelo/Livro";

// Definir a variável livros, como Array<Livro>, contendo três elementos, no formato JSON
const livros: Array<Livro> = [
    new Livro(1, 1, "Box Harry Potter", "Um box de livros com a coletânea completa da maior aventura mágica do mundo", ["J. K. Rowling"]),
    new Livro(2, 2, "Donnie Darko", "Detalhes e explicações de um dos maiores classicos de viagem no tempo do cinema", ["Richard Kelly"]),
    new Livro(3, 3, "Duna", "Box contendo uma das maiores obras sobre vida em outros planetas", ["Frank Herbert"])

];

// Criar a classe ControleLivro
export class ControleLivros {
    // Método para obter todos os livros
    obterLivros(): Array<Livro> {
        return livros;
    }

    // Método para incluir um novo livro
incluir(novoLivro: Livro): void {
    // Encontrar o código mais alto e incrementar em um
    const novoCodigo = livros.reduce((max, livro) => Math.max(max, livro.getCodigo()), 0) + 1;

    // Verificar se o objeto novoLivro é uma instância de Livro
    if (novoLivro instanceof Livro) {
        // Definir o código do novo livro
        novoLivro.setCodigo(novoCodigo);
        // Adicionar o novo livro ao vetor
        livros.push(novoLivro);
    } else {
        console.error("Objeto novoLivro não é uma instância de Livro.");
    }
}


    // Método para excluir um livro com base no código
    excluir(codigo: number): void {
        // Encontrar o índice do livro com o código fornecido
        const index = livros.findIndex(livro => livro.getCodigo() === codigo);
        if (index !== -1) {
            // Remover o livro com splice
            livros.splice(index, 1);
        }
    }
}