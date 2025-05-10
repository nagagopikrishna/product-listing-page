import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import FavComponent from './components/FavComponent'
import Header from './components/Header'
import Cart from './components/Cart'
import Profile from './components/Profile'

const App = () =>(
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/fav' element={<FavComponent/>}></Route>
            <Route exact path='/cart' element = {<Cart/>}></Route>
            <Route exact path='/profile' element = {<Profile/>}></Route>
        </Routes>
    </BrowserRouter>

)

export default App