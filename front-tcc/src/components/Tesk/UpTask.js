import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpTeoria() {
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [explanation, setExplanation] = useState('');
    const [operationId, setOperationId] = useState('');
    const [stageId, setStageId] = useState('');
    const [taskId, setTaskId] = useState('');

    async function updateLang(event) {
        event.preventDefault();

        const dataTeory = { name, task,explanation,operationId, stageId, taskId}

        try {
            await api.put('/teory', dataTeory)
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
                    value={task}
                    onChange={(event) => { setTask(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID do estagio'
                    value={stageId}
                    onChange={(event) => { setStageId(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da teoria'
                    value={teoryId}
                    onChange={(event) => { setTeoryId(event.target.value) }}
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