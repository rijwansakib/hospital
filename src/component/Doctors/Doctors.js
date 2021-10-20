import { useEffect, useState } from "react";
import DoctorCart from "../DoctorCart/DoctorCart";

const Doctors = () => {
    const[doctors,setDoctors]=useState([])

     
    useEffect(()=>{
        fetch('doctor.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDoctors(data)
        })
    },[])
    return (
        <div>
            <h1 className="text-danger text-center mt-5">XYZ General Hospital Doctors</h1>
        
        <div className="w-75 mx-auto row row-cols-1 row-cols-md-4 g-5 mt-5 ">
                       {
                            doctors.map(doctor=><DoctorCart
                                key={doctor.key}
                                doctor={doctor}
                          
                            >
                            </DoctorCart>)
                        }
        </div>
    </div>
    );
};

export default Doctors;