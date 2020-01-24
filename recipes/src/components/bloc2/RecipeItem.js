import React from 'react';


export default function RecipeItem ({item}) {
 
    return (              
            <div className="col-sm-6 mt-2">
                <div className="card shadow mb-4 bg-white rounded">
                    <img className="img-fluid " src={item.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <button>See Recipe</button>
                    </div>
                </div>
            </div>         
    );
}


