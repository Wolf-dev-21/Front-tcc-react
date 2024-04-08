import './App.css';
//usuario
import LoginDev from './pages/LoginDev';
import Register from './components/Register';

//Linguagem
import AdicionarLing from '../src/pages/Linguagem';
import UpLang from './components/Linguagem/AtualizarLingua';
import DelLang from './components/Linguagem/DeleteLingua';

//Teoria
import AddTeoria from './components/Teoria.js/AdicionarTeoria';
import UpTeoria from './components/Teoria.js/AtulalizarTeoria';
import DelTeoria from './components/Teoria.js/DeletarTeoria';

function App() {
return (
    // <div className="App">
    // <div>
    //     <LoginDev/>
    // </div>
    // </div>  

    // <div className="App">
    //     <div>
    //     <Register/>
    //     </div>
    // </div> 

    // <div className="App">
    //     <div>
    //     <AdicionarLing/>
    //     </div>
    // </div>

    // <div className="App">
    //     <div>
    //     <UpLang/>
    //     </div>
    // </div>

    // <div className="App">
    //     <div>
    //     <DelLang/>
    //     </div>
    //     </div>

    // <div className="App">
    //     <div>
    //     <AddTeoria/>
    //     </div>
    //     </div>

    // <div className="App">
    //     <div>
    //     <UpTeoria/>
    //     </div>
    //     </div>

    // <div className="App">
    //     <div>
    //     <DelTeoria/>
    //     </div>
    //     </div>
    


    <div className="App">
        <div>
        <LoginDev/>
        <Register/>
        <AdicionarLing/>
        <UpLang/>
        <DelLang/>
        <AddTeoria/>
        <UpTeoria/>
        <DelTeoria/>
        </div>
    </div>
    
);
}

export default App;