import {Link} from 'react-router-dom'
function Header (){
    return(
        <header>
            <Link to ='/'>E-Restaurant</Link>
            <p>By Er. Dipesh Paudel</p>
        </header>
    )
}

export default Header;