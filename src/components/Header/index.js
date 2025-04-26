import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h1>My Header</h1>

            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/sobre">About</Link>
                <Link to="/informacoes/contato">Contato </Link>

            </div>
        </header>
    )
}

export default Header;