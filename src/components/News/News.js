import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const News = () => {
    return (
        <div className="my-5">
            <h1 className="text-center my-5">Latest News</h1>
            <Row xs={1} md={4} className="g-4">
            <Col>
      <Card style={{height: '550px',margin:'auto'}}>
        <Card.Img className="w-100 h-75" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eyKYH6rFWPKQIw5EiODugSM2rV-9naM0iA&usqp=CAU" />
        <Card.Body>
        <Card.Text>
              October 1, 2021 | 1 comment
        </Card.Text>
          <Card.Title>Back-To-School: Tutoring as a Proactive Tool</Card.Title>
     
        
          <button className="btn btn-primary rounded-pill">Read More</button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{height: '550px',margin:'auto'}}>
        <Card.Img className="w-100 h-75" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkT79IQLcN8wulNIkak0wGHvy27PewDhS2w&usqp=CAU" />
        <Card.Body>
        <Card.Text>
              October 2, 2021 | 1 comment
        </Card.Text>
          <Card.Title>10 Tips How to Find Your Ideal Tutor</Card.Title>
          <button className="btn btn-primary rounded-pill">Read More</button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{height: '550px',margin:'auto'}}>
        <Card.Img className="w-100 h-75" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3i-cHgtheYPJubjXLrDd8LvxchGxaEuU0_w&usqp=CAU" />
        <Card.Body>
        <Card.Text>
              October 3, 2021 | 1 comment
        </Card.Text>
          <Card.Title>How to Find Your best Teacher</Card.Title>
          <button className="btn btn-primary rounded-pill">Read More</button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{height: '550px',margin:'auto'}}>
        <Card.Img className="w-100 h-75" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjTuVtQgWLS7xiuiJd0xoZIG8RIcke-GKkw&usqp=CAU" />
        <Card.Body>
        <Card.Text>
              October 4, 2021 | 1 comment
        </Card.Text>
          <Card.Title>The Future of The Tutors Association</Card.Title>
          <button className="btn btn-primary rounded-pill">Read More</button>
        </Card.Body>
      </Card>
    </Col>
               
            </Row>
        </div>
    );
};

export default News;