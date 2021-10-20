import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const{doctorDetailsKey}=useParams();
    const [doctorDetails,setDoctorDetails]=useState({});

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.find(d=>d.key===doctorDetailsKey)
                console.log(filterData);
                setDoctorDetails(filterData)

            });
    }, [doctorDetailsKey]);
    return (
        <div className="w-25 mx-auto">
            <div className="card mb-3 mt-5 mx-5">
                <img height="250px" className="card-img-top" src={doctorDetails.photo} alt="Card imgae cap" />
                <div className="card-body">
                <h5 className="card-title">{doctorDetails.name}</h5>
                <p className="card-text">{doctorDetails.deg}</p>
                </div>
            </div>

        </div>
    );
};


export default DoctorDetails;