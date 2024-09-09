import React,{useState} from 'react'
import Todoinput from './Components/Todoinput'
import Todolist from './Components/Todolist';


function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
   if(inputText!=='') setListTodo([...listTodo,inputText]);
  }
  const deleteListItem=((key)=>{
    let newListTodo=[...listTodo];
  newListTodo.splice(key,1)
setListTodo([...newListTodo])})
  



const saveEdit=()=>{
  setTodos(listTodo.map(listItem,i))
}
  return (
    <div  className=' justify-center items-center ml-[40%] m-[2%]'>
<div> 
<h1 className="text-3xl font-bold ml-[100px] m-5">
      TO DO LIST
    </h1>
  <Todoinput addList={addList}/>
<hr />
{listTodo.map((listItem,i)=>{
  return(  <Todolist  key={i} index={i} item={listItem} deleteItem={deleteListItem}/>)
  
})}
</div>
    </div>  ) 
}

export default App
