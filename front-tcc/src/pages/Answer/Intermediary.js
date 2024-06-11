import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddAnswer from '../../components/Answer/Intermediary/add';
import UpAnswer from '../../components/Answer/Intermediary/Update';
import DelAnswer from '../../components/Answer/Intermediary/Delete';

export default function IntermediaryAnswer(){
    return(
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <AddAnswer/>
            <UpAnswer/>
            <DelAnswer/>
            
            
        </div>
    );
}