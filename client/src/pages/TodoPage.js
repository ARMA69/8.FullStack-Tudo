import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';

const TodoPage = ({user}) => {
    const [todos, setTodos] = useState([])
    
    useEffect(()=>{

    },[])

    return (
        
        <>      
            <h1>Todo List</h1>
          <h3>
                    TASK -- Your Task Here -- {user.firstName} {user.lastName}
                    <TodoList todos={todos}/>

        </h3>

        </>

    );
}

export default TodoPage;
