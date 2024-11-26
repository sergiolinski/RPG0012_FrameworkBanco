import {Component, OnInit} from '@angular/core';
import {Editora} from "../editora";
import {Livro} from "../livro";
import {ControleEditoraService} from "../controle-editora.service";
import {ControleLivrosService} from "../controle-livros.service";

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  servEditora: ControleEditoraService;
  servLivros: ControleLivrosService;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }

  async ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    this.livros = await this.servLivros.obterLivros();
  }

  excluir = async (codigo: string) => {
   await this.servLivros.excluir(codigo);
    this.livros = await this.servLivros.obterLivros();
  }

  obterNome =  (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
