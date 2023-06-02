import Tema from './Tema'
import User from './User';


interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    usuario?: User | null 
    tema?: Tema| null
}

export default Postagem;