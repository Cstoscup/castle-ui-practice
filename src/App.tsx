import { ThemeProvider, H1, useBoolean } from '@passfort/castle'
import '@passfort/castle/lib/index.css'
import TodoForm from './TodoForm'
import CompletedList from './CompletedList'
import TodoList from './TodoList'
import { createContext, useEffect, useState } from 'react'

export type TodoItem = {
  id: number,
  todo: string,
  completed: boolean
}

export const TodosContext = createContext<any>(null);

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [anyItemsTodo, setAnyItemsTodo] = useBoolean();
  const [anyItemsCompleted, setAnyItemsCompleted] = useBoolean();

  useEffect(() => {
    setAnyItemsCompleted.off();
    setAnyItemsTodo.off();
    console.log(todos);
    if (todos.length > 0) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].completed) {
          setAnyItemsCompleted.on();
        }
        if (!todos[i].completed) {
          setAnyItemsTodo.on();
        }
      }
    }

  }, [todos]);

  return (
    <ThemeProvider>
      <H1 mt={3} ml={3}>Todo List</H1>
      <TodosContext.Provider value={[todos, setTodos]}>
        <TodoForm todo={todo} setTodo={setTodo} />
        {anyItemsTodo ? <TodoList /> : null}
        {anyItemsCompleted ? <CompletedList /> : null}
      </TodosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
