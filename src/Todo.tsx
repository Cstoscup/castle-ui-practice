import React from 'react'
import { Box, Text, Icon } from '@passfort/castle'
import { TodoItem } from './App'

type Props = {
  item: TodoItem,
  index: number,
  todos: TodoItem[],
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

function Todo({item, index, todos, setTodos}: Props) {
  const markTodoComplete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    item.completed = !item.completed;
    setTodos([...todos]);
  }

  const editItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    let newTodo = prompt('Edit your todo item:', item.todo);
    if (newTodo) {
      item.todo = newTodo;
    }
    setTodos([...todos]);
  }

  const deleteItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    let index = todos.indexOf(item);
    let oldTodos = todos;
    oldTodos.splice(index, 1);
    setTodos([...oldTodos]);
  }

  return (
    <Box key={index} display='flex' py={3} px={2} my={3} mx='auto' w='90%' border='1px' borderRadius="regular">
      <Text flexGrow={1}>{item.todo}</Text>
      {item.completed ? <Icon as="button" mx={2} icon="undo" onClick={(e) => { markTodoComplete(e) }} /> : <Icon as="button" mx={2} icon="check" onClick={(e) => { markTodoComplete(e) }} />}
      <Icon as="button" mx={2} icon="edit" onClick={(e) => { editItem(e) }} />
      <Icon as="button" mx={2} icon="delete" onClick={(e) => { deleteItem(e) }} />
    </Box>
  )
}

export default Todo