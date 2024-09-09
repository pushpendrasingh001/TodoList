import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan,faPen} from '@fortawesome/free-solid-svg-icons'

function Todolist(props) {
  return (
    <div >
<div className="flex items-center max-w-xs ml-5 m-3 p-2 border border-gray-300 rounded-md">

  <input type="text" className="flex-1 bg-transparent border-none p-2" placeholder={props.item} readOnly />


  <FontAwesomeIcon
    className="ml-2 cursor-pointer"
    icon={faPen} onClick={()=>props.editText()}
  />

  <input type="checkbox" className="checkbox cursor-pointer checkbox-success ml-2" />

  
  <FontAwesomeIcon
    className="ml-2 cursor-pointer"
    onClick={() => props.deleteItem(props.index)}
    icon={faTrashCan}
  />
</div>
  </div>

  )
}

export default Todolist
