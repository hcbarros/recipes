import React from 'react';
import ReactDOM from 'react-dom'
import illustration from '../../imagens/Illustration.svg';

  

const Illustration = () => {

    return (
        <div>
            <span className="links">
                <a href="#">HEALTHY RECIPES</a>
                <a href="#">BLOG</a>
                <a href="#">JOIN</a>
                <button>REGISTER</button>
            </span>
            <div className="illustration">
                <div className="startStrings"> 
                    <a>Healthy Food</a>
                        
                    <div>
                        <div>Ready for</div>
                        <div>trying a new</div>
                        <div>recipe?</div>                    
                    </div>
                    <div className="form-group input col-xs-10 my-3">
                            <input
                                id="input"
                                className="form-control col-xs-4 mr-3"
                                type="search"
                                placeholder="Search healthy recipes"
                                aria-label="Search"
                            />            
                            <button class="btnSearch"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <img className="img-fluid" src={illustration} alt="" />
                
            </div>          
        </div>
    );
}

export default Illustration;