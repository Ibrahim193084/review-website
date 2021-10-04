import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, id, subject, salary, about, img} = props.teacher
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
          <Link to={`services/${id}`}>
          <button className="btn btn-primary rounded-pill">View Tutor</button>
          </Link>
     
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;