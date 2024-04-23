import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddLang from '../../components/Linguagem/AdicionarLingua';
import UpLang from '../../components/Linguagem/AtualizarLingua';
import DelLang from '../../components/Linguagem/DeleteLingua';


export default function Linguagem(){
    return (
        <div>
            <Link to='/Teoria'>Teoria</Link>
            <AddLang/>
            <UpLang/>
            <DelLang/>
            
        </div>
    );

}

