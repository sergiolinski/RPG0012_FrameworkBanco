import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleEditora from './controle/ControleEditora';
import ControleLivros from './controle/ControleLivros';

const LivroDados = () => {

  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : '');

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const autoresArray = autores.split('\n').map(autor => autor.trim());

    const novoLivro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
      codEditora: codEditora,
    };

    controleLivro.incluir(novoLivro).then(() => {
      navigate('/livros');
    });
  };

  return (
    <main className='container'>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className='form-group mb-3'>
          <label htmlFor='titulo'>Título</label>
          <input 
            type='text'
            id='titulo'
            className='form-control'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}required
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='resumo'>Resumo</label>
          <textarea 
            id='resumo'
            className='form-control'
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}required
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='editora'>Editora</label>
          <select 
            id='editora'
            className='form-control'
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
            </select>
        </div>
        <div className='form-group mb-3'>
          <label>Autores</label>
          <textarea 
            id='autores'
            className='form-control'
            value={autores}
            onChange={(e) => setAutores(e.target.value)}required
          />
        </div>
        
        <button type='submit' className='btn btn-primary'>
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;