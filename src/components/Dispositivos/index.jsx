
import './dispositivos.css';

import iconBox from './icon-box.png';
import iconPc from './icon-pc.png';
import iconSmartphone from './icon-smartphone.png';
import iconTv from './icon-tv.png';
import icontNotebook from './icon-notebook.png';


function Dispositivos() {
    return(
        <div className="dispositivos">
            <h1 className='title-dispositivos'>Assista onde quiser:</h1>

            <section className='articles-dispositivos-container'>
                <article className="card-dispositivo">
                    <img src={iconTv} className='icon-dispositivo' alt="" />
                    <h2 className='title-card-dispositivo'>SmartTV</h2>
                </article>
                <article className="card-dispositivo">
                    <img src={iconBox} className='icon-dispositivo' alt="" />
                    <h2 className="title-card-dispositivo">Tv Box</h2>
                </article>
                <article className="card-dispositivo">
                    <img src={iconSmartphone} className='icon-dispositivo' alt="" />
                    <h2 className="title-card-dispositivo">Celular</h2>
                </article>
                <article className="card-dispositivo">
                    <img src={iconPc} className='icon-dispositivo' alt="" />
                    <h2 className="title-card-dispositivo">PC</h2>
                </article>
                <article className="card-dispositivo">
                    <img src={icontNotebook} className='icon-dispositivo' alt="" />
                    <h2 className="title-card-dispositivo">Notebook</h2>
                </article>
            </section>
        </div>
    )
}

export default Dispositivos;