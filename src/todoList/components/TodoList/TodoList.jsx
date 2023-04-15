import React, {useEffect, useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../Todo/TodoItem';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {

    const [todos, setTodos] = useState(TodoFromLocal)

    const handleAdd = (todo) => setTodos([...todos, todo])

    const handleUpdate = (updated) =>
             setTodos(todos.map((t)=>t.id === updated.id ? updated : t));

    const handleDel = (id) => setTodos(todos.filter(todo=> todo.id !==id));

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const filtered = getFilteredItems(todos, filter);
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
              {filtered.map((item) =>
               <TodoItem key={item.id} todo={item} onUdate={handleUpdate} onDel={handleDel}/>)

                // todos.map(todo => <TodoItem todos={todo} key={todo.id} onDel={onDel}/>)
              }  
            </ul>

            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function TodoFromLocal(){
    console.log('hi');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []
}

function getFilteredItems(todos, filter){
    if(filter === 'all') {
        return todos;
    }
    return todos.filter((todo)=> todo.status === filter)
}