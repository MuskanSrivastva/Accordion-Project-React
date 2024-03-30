import React, { useState } from 'react'
import { FaPlusCircle,FaMinusCircle  } from "react-icons/fa";

const MyAccordion = ({question,answer}) => {
    const[show,setShow] = useState(false);
  return (
    <>
    <div className="main-heading">
        <p onClick={() => setShow(!show)}> 
        {show? <FaMinusCircle /> : <FaPlusCircle />}</p>
        <h5>{question}</h5>
    </div>
        {show && <p  className='answer'>
        {answer}</p>}
    </>
  )
}

export default MyAccordion
