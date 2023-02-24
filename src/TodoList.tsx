import React, { useContext } from 'react'
import { Box, Text } from '@passfort/castle'
import Todo from './Todo'
import { TodoItem, TodosContext } from './App'


function TodoList() {
  const [todos] = useContext(TodosContext);

  return (
    <Box>
      <Text my={3} mx='auto' w='90%'>Items left to do...</Text>
      {
        todos.map((item: TodoItem, index: number) => {
          if (item.completed === false) {
            return <Todo key={index} item={item} index={index} />;
          } else {
            return null;
          }
        })
      }
    </Box>
  )
}

export default TodoList