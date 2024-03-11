import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function Register() {
const [userName , setNome] = useState('');

const [userEmail , setEmail] = useState('');

const [userPassword , setSenha] = useState('');

const [typeUser , setUser] = useState('comum');

async function register (event){
    event.preventDefault();

    const dataUser = {userName, userEmail, userPassword, typeUser}

    try{
        await api.post(`/user/register`, dataUser)
        alert('Cadastro realizado')
    } catch(error) {
        alert(`Erro ao cadastrar ${error}`)
    }

}

return (
    <div className="App">
    <h1>Cadastro</h1>
    <form onSubmit={register} className='form'>
        <input 
        type='text' 
        required 
        placeholder='Digite teu nome'
        value={userName}
        onChange={(event)=>{setNome(event.target.value)}}
        >
        
        </input>

        <input 
        type='email' 
        required 
        placeholder='Digite seu email'
        value={userEmail}
        onChange={(event)=>{setEmail(event.target.value)}}
        >
        </input>

        <input 
        type='password' 
        required 
        placeholder='Digite sua senha'
        value={userPassword}
        onChange={(event)=>{setSenha(event.target.value)}}
        >
        </input>

        <input 
        type='text' 
        required 
        placeholder='Tipo de usuário'
        value={typeUser}
        onChange={(event)=>{setUser(event.target.value)}}
        >
        </input>

        <button type='submit'>
        cadastrar
        </button>
    </form>
    </div>
);
}

export default Register;