import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoAsync, fetchTodos } from './store/todoSlice';

import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css'

function App() {
  const [text, setText] = useState('');

  const { status, error } = useSelector(state => state.todos)

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodoAsync(text));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='App'>
      <InputField
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />

      {status === 'loading' && <h3>Loading...</h3>}

      {error && <h3>An error occurred: {error}</h3>}

      <TodoList />
    </div>
  );
}

export default App
