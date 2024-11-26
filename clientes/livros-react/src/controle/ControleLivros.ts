import Livro from "../modelo/Livro";

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
    _id: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

class ControleLivros {
    async obterLivros(): Promise<Livro[]> {
        try {
            const response = await fetch(baseURL, { method: 'GET' });
            const data = await response.json();

            if (Array.isArray(data)) {
                return data.map((livro: LivroMongo) => new Livro(livro._id, livro.codEditora, livro.titulo, livro.resumo, livro.autores))
            } else {
                console.error('Erro ao obter os livros: resposta não é um array', data);
                return [];
            }
        } catch (error) {
            console.error('Erro ao obter livros do servidor:', error);
            return [];
        }
    }

    async incluir(livro: Livro): Promise<boolean> {
        try {
            const livroMongo: LivroMongo = {
                _id: livro.codigo,
                codEditora: livro.codEditora,
                titulo: livro.titulo,
                resumo: livro.resumo,
                autores: livro.autores,
            };

            const response = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(livroMongo),
            });
    
            const data = await response.json();
            return data.ok;
        } catch (error) {
            console.error('Erro ao incluir livro:', error)
            return false;
        }
    }

    async excluir(codigo: string): Promise<boolean> {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: "DELETE",
            });

            const data = await response.json();
            return data.ok;
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            return false;
        }
    }
}

export default ControleLivros;