import React,{useState} from 'react'

function Todoinput(props) {
const[inputText,setInputText]=useState('');
  return (
    <>
       <div className='m-4 ml-5'>
      <input type="text"
       value={inputText}
       placeholder="Add your task ....." 
       onChange={e=>{setInputText(e.target.value)}}
       className="input input-bordered input-accent w-full max-w-xs" />
      <button onClick={()=>{props.addList(inputText) 
        setInputText("")}} className="btn btn-success m-3">Add Task</button>
  

      </div>
      </>
  )
}

export default Todoinput
