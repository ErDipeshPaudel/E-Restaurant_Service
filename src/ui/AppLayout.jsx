import Header from './Header'
import Cart from '../features/cart/Cart'
import CartOverview from '../features/cart/CartOverview'

import { Outlet } from 'react-router-dom'

function AppLayout(){
    return(
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Cart/>
            <CartOverview/>
        </div>
    )
}

export default AppLayout