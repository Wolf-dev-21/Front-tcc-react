import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTask from '../../components/Task/AddTask';
import UpTask from '../../components/Task/UpTask';
import DelTask from '../../components/Task/DeleteTask';

export default function Task(){
    return(
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <AddTask/>
            <UpTask/>
            <DelTask/>
            
            
        </div>
    );
}