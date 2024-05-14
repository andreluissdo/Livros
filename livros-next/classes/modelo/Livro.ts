export class Livro {
    // Campos da classe
    public codigo: number;
    public codEditora: number;
    public titulo: string;
    public resumo: string;
    public autores: string[];

    // Construtor da classe
    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }

    // Métodos de acesso
    getCodigo(): number {
        return this.codigo;
    }

    setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    getCodEditora(): number {
        return this.codEditora;
    }

    setCodEditora(codEditora: number): void {
        this.codEditora = codEditora;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    getResumo(): string {
        return this.resumo;
    }

    setResumo(resumo: string): void {
        this.resumo = resumo;
    }

    getAutores(): string[] {
        return this.autores;
    }

    setAutores(autores: string[]): void {
        this.autores = autores;
    }
}