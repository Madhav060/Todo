import React ,{useState} from 'react'

function Todo() {
     const [inputValue,setInput] = useState("");
     const [array,setArray] = useState([]);
     const handle = (event) =>
        {
                setInput(event.target.value);
                console.log(inputValue);
        }
     const Add = () =>
        {
            setArray([...array,inputValue]);
            setInput("");
        }
           const erase =(index) =>
            {   const newArray = array.filter((_, i) => i !== index);
                setArray(newArray);
            }
  return (
    <div>
            <input type='text' value={inputValue} placeholder='Enter new task' onChange={handle}/>
            <button onClick={Add}>Add</button>
            <div>
                 {array.map((element, index) => (
                  <li>{element} <button onClick={()=>erase(index)}>X</button></li>  
                  ))}
            </div>
            
    </div>
  )
}

export default Todo