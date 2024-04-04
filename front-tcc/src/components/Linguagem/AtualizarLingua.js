import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpLang() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [idLanguage, setIdLanguage] = useState('');

    async function updateLang(event) {
        event.preventDefault();

        const dataLang = { name, description, idLanguage}

        try {
            await api.put('/language', dataLang)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Lingagem</h1>
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
                    placeholder='atualizar descrição'
                    value={description}
                    onChange={(event) => { setDescription(event.target.value) }}
                >
                </input>

                <input
                type='text'
                required
                placeholder='Id da Linguagem'
                value={idLanguage}
                onChange={(event) => { setIdLanguage(event.target.value) }}
                
                >
                    
                </input>

                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpLang;