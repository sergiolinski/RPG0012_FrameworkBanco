class Livros {
  codigo: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores : string[];

  constructor(codigo: string, titulo: string, codEditora: number, resumo: string, autores: string[]) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
  }
}

export default Livros