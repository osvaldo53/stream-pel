
import './streamings.css';
import streamings from './streamings.png';

function Streamings() {
    return(
        <section className='section-streamings'>
            <h1>CONTEÚDO DAS</h1>
            <h1 className='orange'>PRINCIPAIS PLATAFORMAS!</h1>
            <img className='streamings-img' src={streamings} alt="Plataformas de Streaming" />

        </section>
    )
}

export default Streamings;