import { Card, Col } from "react-bootstrap";


const MoreService = (props) => {
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
          <button className="btn btn-primary rounded-pill">View Tutor</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default MoreService;