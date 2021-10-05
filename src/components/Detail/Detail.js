import { useEffect, useState } from "react";
import { useParams } from 'react-router';


const Detail = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState()
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => data.filter(detail =>{
            return detail.id===id;
        }))
        .then((matched) =>setDetail(matched[0]))
    },[])
    console.log(detail)

    return (
        <div>
            
        </div>
    );
};

export default Detail;