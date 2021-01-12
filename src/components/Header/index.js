import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
    return ( 
    <header className={styles.Header}>
        <Link to="/">
        <h1>Project 3</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="">Logout</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
        </header> )
};

export default Header;