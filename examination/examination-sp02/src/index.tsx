import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const results = useState('')

    //const users = results[0]
    //const setUsers = results[1]
    const res2 = results.length;


    return (
        <p>Тут будет список пользователей {res2}</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Чему равно results.length?
