import React, { useState } from 'react';
import Todoinput from './Components/Todoinput';
import Todolist from './Components/Todolist';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [editText, setEditText] = useState(''); 

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    const newListTodo = listTodo.filter((_, index) => index !== key);
    setListTodo(newListTodo);
    if (editIndex === key) {
      setEditIndex(null); 
    }
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(listTodo[index]);
  };

  const saveEdit = (index) => {
    const updatedList = listTodo.map((item, i) => (i === index ? editText : item));
    setListTodo(updatedList);
    setEditIndex(null); 
  };

  return (
    <div className='justify-center items-center ml-[40%] m-[2%]'>
      <div>
        <h1 className="text-3xl font-bold ml-[100px] m-5">TO DO LIST</h1>
        <Todoinput addList={addList} />
        <hr className='mr-[50%]'/>
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            editItem={startEdit}
            isEditing={editIndex === i}
            editText={editText}
            setEditText={setEditText}
            saveEdit={() => saveEdit(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
