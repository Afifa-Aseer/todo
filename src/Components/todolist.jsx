import React from 'react'
import "./style.css"

const Todolists = (props) => {
    



  return (
    <div >
      <div className="todostyle">
      {/* <button onChange={()=>{props.onChange(props.value)}}>edit</button> */}
      <li>{props.text}</li>
      <button className='justify-content-center delBtn' onClick={()=>{props.onSelect(props.id)}}>Del</button>
      </div>
    </div>
  )
}

export default Todolists
