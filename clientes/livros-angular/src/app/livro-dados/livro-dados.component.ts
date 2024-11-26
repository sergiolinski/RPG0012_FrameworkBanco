import {Component, OnInit} from '@angular/core';
import {Livro} from "../livro";
import {ControleEditoraService} from "../controle-editora.service";
import {ControleLivrosService} from "../controle-livros.service";
import {Editora} from "../editora";
import {Router} from "@angular/router";

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})

export class LivroDadosComponent implements OnInit{
  livro : Livro;
  autoresForm: string = '';
  public editoras:Array<Editora> = [];


  constructor(private router:Router,private servLivros:ControleLivrosService, private servEditora:ControleEditoraService) {
    this.livro = new  Livro();
  }


  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    // console.log(this.editoras)
  }

  incluir = async () => {
    this.livro.autores = this.autoresForm.split('\n');

    await this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
