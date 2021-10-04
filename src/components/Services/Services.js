import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div className="my-5">
            <h1 className="text-center my-5">Our Services</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    teachers.slice(0, 4)?.map(teacher => <Service teacher={teacher} key={teacher.id}/>)
                }
            </Row>
            
        </div>
    );
};

export default Services;