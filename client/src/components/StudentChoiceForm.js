import React, {useState, useEffect, } from 'react';
import { Form, } from "semantic-ui-react";
import axios from 'axios';
import ShowAnswer from './teacher/ShowAnswer';
import { Link, } from 'react-router-dom';


const StudentChoiceForm = (props) => {
    const [answer, setAnswer] = useState([])
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/api/questions/${props.question_id}/choices`,  { answer, }) 
        debugger
        }
     
    
    
    
    
    const handleChange = (e) => {
        setAnswer( e.target.value)
       
    }

    return (
        <>
        {console.log("answer:", answer)}
        {console.log("handleSubmit:", handleSubmit)}

       
        
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                placeholder="answer"
                value={answer}
                onChange={handleChange}
            
            />
            <Form.Button style={{backgroundColor: "#2d248a", color: "white",}}>Submit</Form.Button>
          
        </Form>

        </>
    )
}

export default StudentChoiceForm;
