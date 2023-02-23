import { ThemeProvider, H1, Text } from '@passfort/castle'
import '@passfort/castle/lib/index.css'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <ThemeProvider>
      <H1 mt={3} ml={3}>Todo List</H1>
      <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <Text>Items left to do...</Text>
      {
        todos.map((item, index) => {
          if (item.completed === false) {
            return <Todo item={item} index={index} todos={todos} setTodos={setTodos} />;
          } else {
            return null;
          }
        })
      }
      <Text>Completed Items</Text>
      {
        todos.map((item, index) => {
          if (item.completed === true) {
            return <Todo item={item} index={index} todos={todos} setTodos={setTodos} />;
          } else {
            return null;
          }
        })
      }
    </ThemeProvider>
  );
}

export default App;
