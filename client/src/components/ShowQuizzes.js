import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container, Grid,   } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TakeQuiz from './TakeQuiz'
import ReactDOM from 'react-dom';



const ShowQuizzes = (props) => {
    
    const [ quizzes, setQuizzes ] = useState([])
    const [showForm, setShowForm] = useState(false);

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            setQuizzes(res.data);
          })
      }, [])

      const renderQuizzes = () => {
        return quizzes.map( quiz => (
          <>
          <Container>
            <Segment key={quiz.id}>
                <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header> {quiz.name} </Card.Header>
                    {/* <Card.Description> {quiz.description} </Card.Description> */}
                </Card.Content>
                </Card>
                <Button style={{backgroundColor: "#4F1A9E", color: "white",}} onClick={ <Link to={TakeQuiz} /> } >
                
                    Take Quiz
                </Button>
            </Card.Group>
            </Segment>
          </Container>
          <br />
          <br />
          <br />

          </>
        ))
      }
    
    
    return (
        <>

    {renderQuizzes()}
       
        </>
    )
}

export default ShowQuizzes;
