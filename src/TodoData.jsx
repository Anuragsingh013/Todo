import React, { useState } from 'react';
import checkImage from './assets/check.png'
import circle from './assets/circle.png'

const TodoData = ({ todos, setTodos }) => {
  // Create a state to manage the checked state for each todo item
  const [checks, setChecks] = useState(new Array(todos.length).fill(false));

  const handleDelete = (index) => {
    setTodos(prevTodos => prevTodos.filter((item, i) => i !== index));
    // Remove the corresponding checked state when a todo is deleted
    setChecks(prevChecks => {
      const updatedChecks = [...prevChecks];
      updatedChecks.splice(index, 1);
      return updatedChecks;
    });
  };

  const handleCheckToggle = (index) => {
    setChecks(prevChecks => {
      const updatedChecks = [...prevChecks];
      updatedChecks[index] = !updatedChecks[index];
      return updatedChecks;
    });
  };

  return (
    <div className='px-10'>
      {todos.map((todo, index) => (
        <div className='flex justify-start items-center gap-4 relative mb-4' key={index}>
          {/* check uncheck logic */}
          {/* Use checks array to determine the checked state for each todo item */}
          {checks[index] ? <img className='w-8 h-8' src={checkImage} alt="Checked" onClick={() => handleCheckToggle(index)} /> : <img className='w-8 h-8' src={circle} alt="Unchecked" onClick={() => handleCheckToggle(index)} />}

          {/* content  */}
          <h1 className=' text-2xl'>{todo}</h1>

          {/* delete todo logic */}
          <button className='absolute right-2' onClick={() => handleDelete(index)}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;

