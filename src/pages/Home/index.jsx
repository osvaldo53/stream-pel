
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';
import Introducao from "../../components/Introducao";
import Dispositivos from "../../components/Dispositivos";
import Streamings from "../../components/Streamings";
import Canais from "../../components/Canais";
import Footer from "../../components/Footer";
// /movie/now_playing?api_key=cddbb0e44307d77c59eef7c6ecf25c5c&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key: 'cddbb0e44307d77c59eef7c6ecf25c5c',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 8))
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if (loading) {
        return(
            <div className="loading">
                <h2>Carregando...</h2>
            </div>
        )
    }

    return(
        <div className="container">

            <Introducao/>

            <Dispositivos/>

            <Streamings/>

            <Canais/>

            <h1 className="titulos-sessao">Lançamentos do Cinema</h1>

            <div className="carousel-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

            <Footer/>
        </div>
    )
}

export default Home;