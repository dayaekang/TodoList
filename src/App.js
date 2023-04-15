import React, { useState } from 'react';
import Header from './todoList/components/Header/Header';
import TodoList from './todoList/components/TodoList/TodoList';
import { DarkModeProvider } from './todoList/context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

export default function App() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <DarkModeProvider>
            <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
            <TodoList filter={filter}/>
        </DarkModeProvider>
    );
}
























// import React, { useState } from 'react';
// import Header from './todoList/components/Header/Header';
// import TodoList from './todoList/components/TodoList/TodoList';
// import { DarkModeProvider } from './todoList/context/DarkModeContext';


// const filters = ['all', 'active', 'completed']; 

// function App() {
    
//     const [filter, setFilter] = useState(filters[0]);
//     const isDarkMode = false;

//     return (
//         <>
//        <DarkModeProvider>
//             <Header
//              filters={filters}
//              filter={filter}
//              onFilterChange={setFilter}/>
//             <TodoList filter={filter}/>
//         </DarkModeProvider>
//         </>
//     );
// }


// export default App;