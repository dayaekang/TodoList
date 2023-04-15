import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa";
import styles from './TodoItem.module.css'

export default function TodoItem({todo,onUdate,onDel}) {
    const {id, text, status} = todo;

    const handlechange= (e)=> {
        onUdate({...todo, status: e.target.checked ? 'completed' : 'active'})
    }

    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type='checkbox'
                id = {id} //checkbox로 label과 연결시켜주면 에러가 발생. 고유 id로 설정해주기
                checked={todo.status === 'completed'}
                onChange={handlechange}
            />
            <label htmlFor={id} className={styles.text}>{todo.text}</label>
        <span className={styles.icon}>
        <button className={styles.button} onClick={()=>onDel(id)}><FaRegTrashAlt/></button>
        </span>
        </li>
        );
}

