import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';
import { getTasks, createTask} from '../api/taskApi';
import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';

const TodoPage = (props) => {
    const [todos, setTodos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if(!props.user) {
            return navigate('/');
        }
        getTasks(props.user._id)
        .then(result => {
            setTodos(result.data);
        })
        .catch(error => {
            console.error(error);
        })
       
    }, []);

    const getNewTd = (data) =>{
        createTask({
            authorId: props.user._id,
            status: 'new',
            ...data
        }).then(({data: createdTask}) => {
            const newTodo=[...todos, createdTask];
            setTodos(newTodo)
        })
    }

    return (
        
        <>      
            <h1>Todo Page</h1>
            <TodoForm sendDate={getNewTd}/>
          <h3>
                    TASK -- Your Task Here -- {props.user.firstName} {props.user.lastName}
                    <TodoList todos={todos}/>

        </h3>
               
        </>

    );
}

export default TodoPage;
