import { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora"

function LinhaLivro(props) {
  const {livro, excluir, controleEditora} = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);  
  
  return (
    <tr>
      <td>{livro.titulo}<br />
        <button className="btn btn-sm btn-danger" onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td></td>
      <td>
        <ul>{livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}</ul>
      </td>
    </tr>
  );
};

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const controleLivro = new ControleLivros();
    controleLivro.obterLivros().then((livro) => setLivros(livro));
    const carregarLivros = async () => {
      const livrosCarregados = await controleLivro.obterLivros(); 
      setLivros(livrosCarregados);
      setCarregado(true);
    };
    if (!carregado) {
      carregarLivros();
    }
  }, [carregado]); 

  const excluir = async (codigo) => {
    const controleLivro = new ControleLivros();
    await controleLivro.excluir(codigo).then(() => setCarregado(false));
  };
  
  return (
    <main className="container">
      <h1 className="text-start">Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark text-start"> 
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th></th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {Array.isArray(livros) && livros.length > 
          0 ? (
            carregado && livros.map((livro, index) => (
              <LinhaLivro
                key={index}
                livro={livro}
                excluir={excluir}
                controleEditora={controleEditora}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5}>Nenhum livro encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};