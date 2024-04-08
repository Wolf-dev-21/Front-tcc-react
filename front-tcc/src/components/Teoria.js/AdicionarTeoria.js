import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddTeoria() {
    const [name, setName] = useState('');
    const [teory, setTeory] = useState('');
    const [idLanguage, setIdLanguage] = useState('');
    const [idDifficulty, setIdDifficulty] = useState('');



    async function createTeory(event) {
        event.preventDefault();

        const dataTeory = {name, teory, idLanguage, idDifficulty}

        try {
            await api.post('/Teory', dataTeory)
            alert('Teoria adicionada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Teoria</h1>
            <form onSubmit={createTeory} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Nome da Teoria'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Descreva a teoria'
                    value={teory}
                    onChange={(event) => { setTeory(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da Linguagem'
                    value={idLanguage}
                    onChange={(event) => { setIdLanguage(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da dificuldade'
                    value={idDifficulty}
                    onChange={(event) => { setIdDifficulty(event.target.value) }}
                >
                </input>

                <button type='submit'>
                    Adicionar
                </button>
            </form>




        </div>


    );
}

export default AddTeoria;