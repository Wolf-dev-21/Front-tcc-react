import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddLang() {
const [name , ] = useState('');
const [description , setDescription] = useState('');



async function createLang (event){
    event.preventDefault();

    const lang = {name, description}

    try{
        await api.post(`/`, lang)
        alert('Cadastro realizado')
    } catch(error) {
        alert(`Erro ao adicionar ${error}`)
    }

}

return (
    <div className="App">
    <h1>Adicionar Linguagem</h1>
    <form onSubmit={createLang} className='form'>

        <input 
        type='text' 
        required 
        placeholder='Adicione a linguagem'
        value={name}
        onChange={(event)=>{setNome(event.target.value)}}
        >
        
        </input>

        <input 
        type='text' 
        required 
        placeholder='Descreva a Linguagem'
        value={description}
        onChange={(event)=>{setDescription(event.target.value)}}
        >
        
        </input>

        <button type='submit'>
        Adicionar
        </button>
    </form>
    </div>
);
}

export default AddLang;