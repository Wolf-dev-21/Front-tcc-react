import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddLang() {
const [name, setName] = useState('');
const [description , setDescription] = useState('');



async function createLang (event){
    event.preventDefault();

    const dataLang = {name, description}

    try{
        await api.post('/language', dataLang)
        alert('Linguagem adicionada com sucesso.')
    } catch(error) {
        alert(`Erro ao adicionar ${error}`)
    }

}

async function updateLang (event){
    event.preventDefault();

    const upLang = {name, description, idLanguage}

    try{
        await api.put('/', dataLang)
        alert('Linguagem adicionada com sucesso.')
    } catch(error) {
        alert(`Erro ao Atualizar ${error}`)
    }

}

async function deleteLang (event){
    event.preventDefault();

    const delLang = {idLanguage}

    try{
        await api.put('/', dataLang)
        alert('Linguagem adicionada com sucesso.')
    } catch(error) {
        alert(`Erro ao Atualizar ${error}`)
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
        onChange={(event)=>{setName(event.target.value)}}
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


    
    <form onSubmit={updateLang} className='form'>
    <h1>Atualizar Linguagem</h1>



<input 
type='text' 
required 
placeholder='Adicione a linguagem'
value={name}
onChange={(event)=>{setName(event.target.value)}}
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

<input 
type='text' 
required 
placeholder='Id da Linguagem'
value={idLanguage}
onChange={(event)=>{setDescription(event.target.value)}}
>

</input>



<button type='submit'>
Atalizar
</button>
</form>
    </div>

    
);
}

export default AddLang;