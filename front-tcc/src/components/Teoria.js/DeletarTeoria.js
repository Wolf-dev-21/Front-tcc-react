import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function DelTeoria() {

    const [idTeory, setIdTeory] = useState('');

    async function deleteTeory(event) {
        event.preventDefault();

        const dataTeory = {idTeory}

        try {
            await api.delete('/Teory/:idTeory', dataTeory)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar Teoria</h1>
            <form onSubmit={deleteTeory} className='form'>

                <input
                type='text'
                required
                placeholder='Id da Linguagem para deletar'
                value={idTeory}
                onChange={(event) => { setIdTeory(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelTeoria;