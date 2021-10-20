import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const{detailsKey}=useParams();
    const [servicesDetails,setServicesDetails]=useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.find(d=>d.key===detailsKey)
                console.log(filterData);
                setServicesDetails(filterData)

            });
    }, [detailsKey]);
    return (
        <div>
            <div className="card mb-3 mt-5 mx-5">
                <img height="250px" className="card-img-top" src={servicesDetails.img} alt="Card imgae cap" />
                <div className="card-body">
                <h5 className="card-title">{servicesDetails.name}</h5>
                <p className="card-text">{servicesDetails.des}</p>
                </div>
            </div>

        </div>
    );
};

export default Details;