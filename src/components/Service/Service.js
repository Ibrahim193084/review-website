
import { Card, Col } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
const Service = (props) => {
    const {name, id, subject, salary, about, img} = props.teacher
    const history = useHistory()
    const buttonHandler = ()=>{
      history.push(`services/${id}`)

    }
  
   
    return (
        <div>
             <Col>
      <Card style={{height: '500px',margin:'auto'}}>
        <Card.Img className="w-100 h-100" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {subject}
          </Card.Text>
          <Card.Text>
              {salary}
          </Card.Text>
          <button onClick={buttonHandler}
          className="btn btn-primary rounded-pill">View Tutor</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;