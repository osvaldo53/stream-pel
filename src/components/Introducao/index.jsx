
import './introducao.css';
import img1 from './familia-assistindo.jpg';

function Introducao() {
    return(
        <div className="introducao">
            <h1 className='intro-l1'>O MELHOR DA TV</h1>
            <h1 className='intro-l2'>E STREAMING</h1>
            <p className='intro-l3'>Para você e sua família!</p>
            <img className='img1' src={img1} alt="Familia assistindo TV" />

            <h1 className='intro-l4'>+ DE 85.000 <span className='orange'>CONTEÚDOS</span></h1>
        
            <div className="intro-listas">
                <ul>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>CANAIS</li>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>FILMES</li>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>SÉRIES</li>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>NOVELAS</li>
                </ul>
                <ul>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>DOCUMENTÁRIOS</li>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>FUTEBOL</li>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>DESENHOS</li>
                    <li><span class="material-symbols-outlined check orange">check_circle</span>ANIMES</li>
                </ul>
            </div>
        </div>
    )
}

export default Introducao;