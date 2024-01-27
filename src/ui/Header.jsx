import {Link} from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder';
function Header (){
    return(
        <header>
            <Link to ='/'>E-Restaurant</Link>
            <p>By Er. Dipesh Paudel</p>
            <SearchOrder/>
        </header>
    )
}

export default Header;