import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddAnswer from '../../components/Answer/advanced/Add';
import UpAnswer from '../../components/Answer/advanced/Update';
import DelAnswer from '../../components/Answer/advanced/Delete';

export default function AdvancedAnswer(){
    return(
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <Link to='/Teoria'>Teoria</Link>
            <Link to='/Stage'>Stage</Link>
            <Link to='/Task'>Task</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>

            <AddAnswer/>
            <UpAnswer/>
            <DelAnswer/>
            
            
        </div>
    );
}