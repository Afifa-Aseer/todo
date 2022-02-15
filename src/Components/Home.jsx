import React, { useState } from 'react'
import Todolists from "./todolist"
import "./style.css"
const Home = () => {
    const [list,setlist]=useState("")
    const [addlist,setaddlist]=useState([])
    // const [indexValue, setIndexValue] = useState("");

    const itemEvent = (event) => {
        setlist(event.target.value);
    }
   
   
    const addtodo = () => {
            setaddlist((oldItems)=>{
            return[...oldItems,list];
    }
    )
    setlist("")
    }


  const deltodo = () => {
    setaddlist([]);
  };

  const deleteitem=(id)=>{
    // console.log('hello')
    setaddlist((oldItems)=>{
      return oldItems.filter((ind)=>{
        return ind !== id;
      });
    })
    }
    

    // const handleChange = (e) => {
    //   console.log("hi"+e)
      // console.log(editInputValue);
      // todo.splice(indexValue, 1, editInputValue);
      // setTodo([...todo]);
      // setIndexValue("");
      // setEditInputValue("");
    // };


    // const handleChange = ({ target: { value, name } }) => {
    //   setState({ ...state, [name]: value });
    // };
    
    
  return (
    <>
      <div className="main_div">
          <div className="center_div">
            <div className="header">
              <br />
              <h1>ToDo List</h1>
              <br />
              <div className="todoinput d-flex">
              <input type="text" value={list} placeholder='Add an items' onChange={itemEvent}/>
              <button className='addBtn' onClick={addtodo}>ADD</button>
              <button className ='delBtn' onClick={deltodo}>DELETE</button>
              </div>
              </div>
              <ul>
            {  
          addlist.map((itemvalue,index)=>{
                return(
                  <Todolists key ={index} text={itemvalue} id={itemvalue} onSelect={deleteitem} />

                )
                        }
                        )
              }
              </ul>
          </div>
      </div>
    </>
  )
}
export default Home