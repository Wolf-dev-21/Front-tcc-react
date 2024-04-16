// Naveg Pagina
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

import './App.css';

//usuario
import LoginDev from './pages/Login/LoginDev';


//Linguagem
import Linguagem from './pages/Linguagem/Linguagem';


//Teoria
import Teoria from './pages/Teoria/Teoria';
import Register from './components/Register';

function App() {
return (
    <div className="App">
    <div>
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path='/' element={<NavBar/>}>
                        
                        <Route index element={<LoginDev/>}/>
                        <Route path='/Register' element={<Register/>}/>

                        <Route path='/Linguagem' element={<Linguagem/>}/>

                        <Route path='/Teoria' element={<Teoria/>}/>
                    </Route>
                </Routes>
            </Container>
        </BrowserRouter>
    </div>
    </div>  
);
}

export default App;