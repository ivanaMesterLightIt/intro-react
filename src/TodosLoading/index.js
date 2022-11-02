import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return (
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text">Estamos cargando, no desesperes...</p>
        </div>
    );
}

export { TodosLoading };