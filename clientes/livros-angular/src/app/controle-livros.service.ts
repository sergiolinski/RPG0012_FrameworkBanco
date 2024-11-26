import {Injectable} from '@angular/core';
import {Livro} from "./livro";

interface LivroMongo {
  _id: string;
  codigo: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[]
}

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  public baseUrl = "http://localhost:3030/livros"


  constructor() {
  }


  async obterLivros() {
    const resposta = await fetch(this.baseUrl, {
      method: "GET"
    });
    const respostaJson = await resposta.json()
    return respostaJson.map((livro: any) => {
      const newlivro = new Livro()
      newlivro.codigo = livro._id;
      newlivro.codEditora = livro.codEditora;
      newlivro.titulo = livro.titulo;
      newlivro.resumo = livro.resumo;
      newlivro.autores = livro.autores;
      //console.log(newlivro)
      return newlivro;
    });
  }

  async incluir(livro:any) {
    livro._id = null;
    delete livro.codigo;
    //console.log(livro)
    const resposta = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livro)
    });
    return resposta.ok
  }

  async excluir(codigo: string) {
    const resposta = await fetch(`${this.baseUrl}/${codigo}`, {
      method: "DELETE"
    });
    return resposta.ok;

  }
}
