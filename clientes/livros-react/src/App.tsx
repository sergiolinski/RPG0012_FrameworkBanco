import LivroDados from './LivroDados';
import LivroLista from './LivroLista';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "../src/App.css"
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dados">
                Novo Livro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
