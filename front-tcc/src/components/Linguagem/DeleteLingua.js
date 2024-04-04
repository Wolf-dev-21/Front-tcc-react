import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function DelLang() {

    const [idLanguage, setIdLanguage] = useState('');

    async function DeleteLang(event) {
        event.preventDefault();

        const dataLang = {idLanguage}

        try {
            await api.delete('/language/:idLanguage', dataLang)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar Lingagem</h1>
            <form onSubmit={DeleteLang} className='form'>

                <input
                type='text'
                required
                placeholder='Id da Linguagem para deletar'
                value={idLanguage}
                onChange={(event) => { setIdLanguage(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelLang;