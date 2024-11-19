


import React from 'react';

export default function Card(props) {
    return (
        
                <div className='container d-flex'>
                    <div className='card mt-3' style={{"width":"100rem"}}>
                        <img src={props.imgSrc} className="card" alt={props.name} />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <h5 className="card-title">{props.category}</h5>
                            <p className="card-text">{props.description}</p>
                           
                        </div>
                    </div>
                
            </div>
        
    );
}