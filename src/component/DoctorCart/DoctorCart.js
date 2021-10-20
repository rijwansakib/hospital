import React from 'react';
import { Link} from 'react-router-dom';

const DoctorCart = ({doctor}) => {
    const{key,photo,name,deg}=doctor;
    return (
              <div className="card mx-1">
                  
                    <img className="card-img-top" src={photo} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{deg}</p>
                    </div>
                    <Link to={`/doctorDetails/${key}`}>
                 <button type="button" class="btn btn-outline-primary w-100">Details</button>
                  </Link>
              </div>
        
    );
};

export default DoctorCart;