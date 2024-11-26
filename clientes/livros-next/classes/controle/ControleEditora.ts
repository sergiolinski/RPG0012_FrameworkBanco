import Editora from "../modelo/Editora";

const editoras: Editora[] = [
    (new Editora(1,'Alta Books')),
    (new Editora(2,'Pearson')),
    (new Editora(3,'Addison Wesley')),

]

class ControleEditora {
    getNomeEditora(codEditora: number): string {
        const editorapequisada = editoras.filter((editora) => editora.codEditora === codEditora);
        return editorapequisada.length > 0 ? editorapequisada[0].nome : 'Desconhecida';
    }

    getEditoras(): Array<Editora> {
        return editoras;
    }

    incluir(editora: Editora):void{
        const codigoNovo = editoras.length > 0 ?
            Math.max(...editoras.map(e => e.codEditora)) + 1:
            1;
        editora.codEditora = codigoNovo;
        editoras.push(editora);
    }
}

export default ControleEditora