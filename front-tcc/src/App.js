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

//Task
import Task from './pages/Task/Task';

//Stage
import Stage from './pages/Stage/Stage';

//Answer
import Answer from './pages/Answer/Basic';
import Answer from './pages/Answer/Intermediary';
import Answer from './pages/Answer/Advanced';

function App() {
return (
    <div className="App">
    <div>
        <BrowserRouter>
            <Container>
                <Routes>
                    
                        
                        <Route index element={<LoginDev/>}/>
                        <Route path='/Register' element={<Register/>}/>

                        <Route path='/Linguagem' element={<Linguagem/>}/>
                        <Route path='/Teoria' element={<Teoria/>}/>

                        <Route path='/Task' element={<Task/>}/>

                        <Route path='/Stage' element={<Stage/>}/>

                        <Route path='/Answer' element={<Answer/>}/>
                        <Route path='/Answer' element={<Answer/>}/>
                        <Route path='/Answer' element={<Answer/>}/>

                </Routes>
            </Container>
        </BrowserRouter>
    </div>
    </div>  
);
}

export default App;