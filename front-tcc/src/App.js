import './App.css';
//usuario
import LoginDev from './pages/Login/LoginDev';


//Linguagem
import Linguagem from './pages/Linguagem/Linguagem';


//Teoria
import Teoria from './pages/Teoria/Teoria';

function App() {
return (
    <div className="App">
    <div>
        <LoginDev/>
        <Linguagem/>
        <Teoria/>
        
        
    </div>
    </div>  
);
}

export default App;