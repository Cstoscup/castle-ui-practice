import React from 'react'
import { Box, Text, Icon } from '@passfort/castle'

function Todo({item, index, todos, setTodos}) {
  const markTodoComplete = (e) => {
    e.preventDefault();
    console.log(item);
    item.completed = !item.completed;
    setTodos([...todos]);
  }

  const deleteItem = (e) => {
    e.preventDefault();
    let index = todos.indexOf(item);
    let oldTodos = todos;
    oldTodos.splice(index, 1);
    setTodos([...oldTodos]);
  }

  return (
    <Box key={index} display='flex' py={3} px={2} my={3} mx='auto' w='90%' border='1px' borderRadius='3'>
      <Text flexGrow={1}>{item.todo}</Text>
      {item.completed ? <Icon px={2} icon="undo" onClick={(e) => { markTodoComplete(e) }} /> : <Icon px={2} icon="check" onClick={(e) => { markTodoComplete(e) }} />}
      <Icon px={2} icon="edit" />
      <Icon px={2} icon="delete" onClick={(e) => { deleteItem(e) }} />
    </Box>
  )
}

export default Todo