import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTeoria from "../../components/Teoria.js/AdicionarTeoria";
import UpTeoria from "../../components/Teoria.js/AtulalizarTeoria";
import DelTeoria from "../../components/Teoria.js/DeletarTeoria";

export default function Teoria(){
    return (
        <div>
            <Link to='/Linguagem'>Linguagem</Link>
            <AddTeoria/>
            <UpTeoria/>
            <DelTeoria/>
        </div>
    );

}