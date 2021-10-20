import React from 'react';
import { Link} from 'react-router-dom';

const Services = ({service}) => {
  const{key,name,img,des}=service;
  console.log(service);
    
    return (
       <div className="col">
            <div className="card">
            <img src={img} height="250px" className="card-img-top " alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{des}</p>
            </div>
            
              <Link to={`/details/${key}`}>
                 <button type="button" class="btn btn-outline-primary w-100">Details</button>
               </Link>
            
            </div> 
            </div>
    );
};

export default Services;


