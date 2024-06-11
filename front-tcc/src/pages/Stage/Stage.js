import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddStage from '../../components/Stage/AddStage';
import UpStage from '../../components/Stage/AtulStage';
import DelStage from '../../components/Stage/DelStage';

export default function Task(){
    return(
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <AddStage/>
            <UpStage/>
            <DelStage/>
            
            
        </div>
    );
}