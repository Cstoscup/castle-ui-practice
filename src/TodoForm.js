import React from 'react'
import { Box, FormControl, FormLabel, FormHint, FormError, Input } from '@passfort/castle'

function TodoForm({ todo, setTodo, todos, setTodos }) {


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), todo, completed: false}]);
  }

  const handleChange = (e) => {
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