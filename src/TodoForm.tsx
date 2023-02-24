import React, { useContext } from 'react'
import { Box, FormControl, FormLabel, FormHint, FormError, Input } from '@passfort/castle'
import { TodosContext } from './App'

type Props = {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

function TodoForm({ todo, setTodo }: Props) {
  const [todos, setTodos] = useContext(TodosContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), todo, completed: false}]);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo(e.target.value);
  }

  return (
    <Box my={3} mx='auto' w='90%'>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <FormControl>
          <FormLabel>What do you need to do today?</FormLabel>
          <Input onChange={(e) => {handleChange(e)}} />
          {todos.length === 0 ? <FormHint>Enter a todo item</FormHint> : null}
        </FormControl>
      </form>
    </Box>
  )
}

export default TodoForm