import React, { useState } from 'react';

import TodoData from './TodoData';

const App = () => {
  // Initialize todos with data from localStorage if available
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('Todo');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // Saving input field data 
  const [work, setWork] = useState('')

  localStorage.setItem('Todo', JSON.stringify(todos))
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 ">

        <div className=" bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg  rounded-lg px-4 py-4 w-[90%] md:w-[50%] lg:w-[50%] xl:w-[40%] min-h-[50vh] overflow-auto">

          {/* heading */}
          <h1 className='text-2xl px-8 font-bold'>Todo List</h1>

          {/* Input field and add btn */}
          <div className="addTodo flex flex-col md:flex-row justify-between px-8 my-4">

            <input className='rounded-full w-full md:w-[80%] mb-2 md:mb-0 px-4 py-2 outline-none b-0 text-xl border  border-emerald-500' value={work} onChange={(e) => { setWork(e.target.value) }} type="text" placeholder='Add your Todos...' />
            <button className=' bg-emerald-500 text-white py-4 px-5 rounded-full hover:bg-emerald-600 mt-2 md:mt-0 md:ml-4' onClick={() => {

              setTodos((prevState) => [...prevState, work])
              // updating input field after assiging work in todos
              setWork("")

            }} >Add</button>
            
          </div>

          {/* Showing Tododata */}
          <div className=" overflow-auto ">
            <TodoData todos={todos} setTodos={setTodos} />
          </div>

        </div>
      </div>
    </>
  );
};

export default App;


