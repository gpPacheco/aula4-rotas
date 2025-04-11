import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Error from './pages/Error';
import Produtos from './pages/Produtos';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/produtos/:id' element={<Produtos/>}/>

                <Route path='*' element={ <Error />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;