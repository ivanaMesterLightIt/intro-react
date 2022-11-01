import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    
    const onClickButton = () => {
        alert('Aqui se deberia ver el modal')
    };

    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };