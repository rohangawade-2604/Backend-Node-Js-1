import {Routes , Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { SignUp } from '../Pages/SignUp'
import { Product } from '../pages/Product'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/product' element={<Product />} />
        </Routes>
    )
}