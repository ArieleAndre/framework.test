import React,{ useState, useEffect, useCallback } from 'react';

import Menu from '../../components/Menu';
import api from '../../services/api';

const Todo = () => {

    const feito = 'Feito';
    const fazer = 'pender';

    const [todo, setTodo] = useState([]);
    const [cacheTodo, setCacheTodo] = useState([]);
    const [textInput, setTextInput] = useState('');
    
    useEffect(async () => {
        const response = await api.get('/todos');
        setTodo(response.data);
        setCacheTodo(response.data);
    }, []);
   
    function handleSubmit(e) {
        e.preventDefault();

        if (textInput === 'todos') {
            setTodo(cacheTodo);
            return;
        }
        
        const filteredTodo = cacheTodo.filter(t => t.completed == textInput);

        setTodo(filteredTodo);
    }

    return (
        <>
        <Menu/>
        <h1>To-do</h1>

        <form onSubmit={handleSubmit}>
           <select name="filter" onChange={(e) => setTextInput(e.target.value)}>
               <option selected="selected">...selecione</option>
               <option value="1">Feito</option>
               <option value="0">Pendente</option>
               <option value="todos">Todos</option>
           </select>
            <button type="submit">Filtrar</button>
        </form>

    
        <table border='1'>
        <tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
        {todo.map(todo => (
            <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Feito': 'Pendente'}</td>
            </tr>
        ))}
        </table>
        </>
    );
}

export default Todo;