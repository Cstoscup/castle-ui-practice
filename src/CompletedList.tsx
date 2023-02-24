import React from 'react'
import { Box, Text } from '@passfort/castle'
import Todo from './Todo'
import { TodoItem } from './App'

type Props = {
  todos: TodoItem[],
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

function CompletedList({ todos, setTodos }: Props) {
  return (
    <Box>
      <Text my={3} mx='auto' w='90%'>Completed Items!</Text>
      {
        todos.map((item, index) => {
          if (item.completed === true) {
            return <Todo key={index} item={item} index={index} todos={todos} setTodos={setTodos} />;
          } else {
            return null;
          }
        })
      }
    </Box>
  )
}

export default CompletedList