import React from 'react';


export default function ReportItem ({item}) {
 
    return (              
                <div className="card report shadow mb-4 bg-white rounded">
                    <img className="img-fluid" src={item.image} alt="" />
                    
                    <div >
                        <h5 className="card-title">{item.title}</h5>
                        <div>
                            <div className="img-fluid" 
                                style={{backgroundImage: `url(${item.author_image})`}}></div>
                            <a>{item.author_name}</a>
                        </div>
                    </div>
                </div>                     
    );
}


