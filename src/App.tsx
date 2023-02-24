import { ThemeProvider, H1, Text } from '@passfort/castle'
import '@passfort/castle/lib/index.css'
import TodoForm from './TodoForm'
import CompletedList from './CompletedList'
import TodoList from './TodoList'
import { useEffect, useState } from 'react'

export type TodoItem = {
  id: number,
  todo: string,
  completed: boolean
}

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [anyItemsTodo, setAnyItemsTodo] = useState(false);
  const [anyItemsCompleted, setAnyItemsCompleted] = useState(false);

  useEffect(() => {
    setAnyItemsCompleted(false);
    setAnyItemsTodo(false);

    if (todos.length > 0) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].completed) {
          setAnyItemsCompleted(true);
        }
        if (!todos[i].completed) {
          setAnyItemsTodo(true);
        }
      }
    }

  }, [todos]);

  return (
    <ThemeProvider>
      <H1 mt={3} ml={3}>Todo List</H1>
      <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      {anyItemsTodo ? <TodoList todos={todos} setTodos={setTodos} /> : null}
      {anyItemsCompleted ? <CompletedList todos={todos} setTodos={setTodos} /> : null}
    </ThemeProvider>
  );
}

export default App;
