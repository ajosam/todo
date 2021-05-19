import React,{useState} from 'react';
import './style/style.css';

function App() {
const [toDos,setTodos] = useState([]);
const [todo,setTodo] = useState('');
//const [rmtoDo,setRmTodo] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoops, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
           
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setTodos(toDos.filter(obj3=>{
                if(obj3.id === obj.id){
                  return null
                }
                return obj3
              }))
            }} className="fas fa-times"></i>
          </div>
        </div>
            )
          })
        }

        {
          toDos.map((obj)=>{
            if(obj.status){
              return <h1>{obj.text}</h1>
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
