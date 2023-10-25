import './style.css';
import {Link} from 'react-router-dom'
    

export const Menu = () => {
    return (
    <nav className='menu'>
        <ul>
            <li>
                <Link to='/'>Home</Link> 
                </li>
            <li>
                <Link to='/about' state={'this is state from ABOUT'}>About</Link> 
                </li>
                <li>
                <Link to='/posts'>posts</Link> 
                </li>
                <li>
                <Link to='/posts/10'>posts 10</Link> 
                </li>
                <li>
                <Link to='/redirect'>Redirect</Link> 
                </li>
        </ul>
    </nav>
    );
};