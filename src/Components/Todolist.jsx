import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan, faSave} from '@fortawesome/free-solid-svg-icons';

function Todolist({ index, item, deleteItem, editItem, isEditing, editText, setEditText, saveEdit }) {
  return (
    <div className="flex items-center max-w-xs ml-5 m-3 p-2 border border-gray-300 rounded-md">
      {isEditing ? (
        <>
          <input
            type="text"
            className="flex-1 bg-transparent border p-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
             <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSave} 
            onClick={saveEdit}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            className="flex-1 bg-transparent border-none p-2"
            value={item}
            readOnly
          />
        
          <FontAwesomeIcon
            className="ml-2 cursor-pointer"
            icon={faPen}
            onClick={() => editItem(index)}
          />
        </>
      )}
      <input type="checkbox" className="checkbox cursor-pointer checkbox-success ml-2" />
      <FontAwesomeIcon
        className="ml-2 cursor-pointer"
        onClick={() => deleteItem(index)}
        icon={faTrashCan}
      />
    </div>
  );
}

export default Todolist;
