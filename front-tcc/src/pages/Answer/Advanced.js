import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddAnswer from '../../components/Answer/advanced/Add';
import UpAnswer from '../../components/Answer/advanced/Update';
import DelAnswer from '../../components/Answer/advanced/Delete';

export default function AdvancedAnswer(){
    return(
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <AddAnswer/>
            <UpAnswer/>
            <DelAnswer/>
            
            
        </div>
    );
}