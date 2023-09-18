import './header.css';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <header>
            <Link className='logo' to="/" >
                <span className="logotipo material-symbols-outlined">play_circle</span>
                <span>PEL</span>
                <span className='orange'>FLIX</span>
            </Link>

            <Link className='favoritos' to="/favoritos">Meus filmes</Link>
        </header>
    )
}

export default Header;