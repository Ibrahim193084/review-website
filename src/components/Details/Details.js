import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([])
    useEffect(()=>{
        fetch(`./fakeData.json/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Details;