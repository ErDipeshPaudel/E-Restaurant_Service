import Header from './Header'
import Cart from '../features/cart/Cart'
import CartOverview from '../features/cart/CartOverview'

import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

function AppLayout(){
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    // console.log(navigation)
    return(
        <div className='layout'>
            
            {isLoading && <Loader/>}

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