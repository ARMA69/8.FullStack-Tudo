import React from 'react';

const TodoPage = ({user}) => {
    return (
        <h3>
            TASK -- Your Task Here -- {user.firstName} {user.lastName}
        </h3>
    );
}

export default TodoPage;
