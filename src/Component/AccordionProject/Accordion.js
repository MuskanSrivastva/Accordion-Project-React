import React,{useState} from 'react'
import {questions} from './api'
import './Accordion.css'
import MyAccordion from './MyAccordion'

const Accordion = () => {
    const[data , setData] = useState(questions)
  return (
    <>
    <section className='main-div'>
    <h3>Question-Answer</h3>
      {
        data.map((curElememt) => {const{ id} = curElememt;
            return <MyAccordion key={id} {...curElememt}/>
      })
      }
    </section>
    </>
  )
}

export default Accordion
