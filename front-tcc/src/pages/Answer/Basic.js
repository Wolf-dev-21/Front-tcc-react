import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddAnswer from '../../components/Answer/Basic/add';
import UpAnswer from '../../components/Answer/Basic/Update';
import DelAnswer from '../../components/Answer/Basic/Delete';

export default function BasicAnswer(){
    return(
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <AddAnswer/>
            <UpAnswer/>
            <DelAnswer/>
            
            
        </div>
    );
}