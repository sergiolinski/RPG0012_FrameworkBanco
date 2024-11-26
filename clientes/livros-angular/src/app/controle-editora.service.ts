import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Editora[];

  constructor() {
    this.editoras = [
      { codEditora: 1, nome: 'Alta Books' },
      { codEditora: 2, nome: 'Pearson' },
      { codEditora: 3, nome: 'Addison Wesley' },
    ];
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find((editora) => editora.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

}
