import * as React from 'react';
import List from '@mui/material/List';
import {useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
import {Box, Typography} from '@mui/material'


const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export default function CheckboxList() {

  const [todos, setTodos] = useState(getTodos())
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    
  },[todos])
  const deleteTodo = (idx)=> {
    setTodos(prevTodo=>{
      return prevTodo.filter( (todo)=> todo.id !== idx)})

  }
  const toggleTodo = (id)=>{
    setTodos(prevTodo=>{
     return prevTodo.map((todo) => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }else{
        return todo;
      }
     })
    })
  }
  const addTodo = (text)=>{
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos(prevTodos => {
      return [...prevTodos, newTodo];
    });
  };
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      //  height: '100vh',
      flexDirection: 'column',
      maxWidth: 360,
      p: 1,
      margin: ' auto',
     }}>
        <Typography variant="h4">Todo List</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) =>( 

            <TodoItem todo= {todo} key= {todo.id} removeTodo = {()=> deleteTodo(todo.id) } toggleTodo= {toggleTodo}/>

          ))}
        </List>
       <TodoForm addTodo={addTodo} />
    </Box>
  );
}
