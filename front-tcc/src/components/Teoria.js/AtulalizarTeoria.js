import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpTeoria() {
    const [name, setName] = useState('');
    const [teory, setTeory] = useState('');
    const [idLanguage, setIdLanguage] = useState('');
    const [idDifficulty, setIdDifficulty] = useState('');
    const [idTeory, setIdTeory] = useState('');

    async function updateLang(event) {
        event.preventDefault();

        const dataTeory = { name, teory, idLanguage, idDifficulty, idTeory}

        try {
            await api.put('/Teory', dataTeory)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Teoria</h1>
            <form onSubmit={updateLang} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Atualizar nome'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar Teoria'
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

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da teoria'
                    value={idTeory}
                    onChange={(event) => { setIdTeory(event.target.value) }}
                >
                </input>

                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpTeoria;