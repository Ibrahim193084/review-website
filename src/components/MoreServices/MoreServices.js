import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MoreService from '../MoreService/MoreService';

const MoreServices = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])


    return (
        <div>
                <h1 className="text-center my-5 text-white">Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    teachers?.map(teacher => <MoreService teacher={teacher} key={teacher.id}/>)
                }
            </Row>
        </div>
    );
};

export default MoreServices;