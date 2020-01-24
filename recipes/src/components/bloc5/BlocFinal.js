import React from 'react';
import ReactDOM from 'react-dom'
import blocFinal from '../../imagens/bloco_final_image.svg';
  

const BlocFinal = () => {

    return (
        <div>
            <div className="illustration member">
                <div className="joinMember"> 
                                            
                    <div>
                        <div>Join our membership</div>
                        <div>to get special offer</div>                                      
                    </div>
                    <div className="form-group col-xs-10 my-3">
                            <input
                                id="input"
                                className="form-control col-xs-4 mr-3"
                                type="search"
                                placeholder="Enter your email address"
                                aria-label="Search"
                            />            
                            <button class="btnSearch">join</button>
                    </div>
                </div>
                <img className="img-fluid" src={blocFinal} alt="" />
                
            </div>
            <div>
                <a>@Copyrights 2019 Stack. All Rights Reserved.</a>
                <a>Privacy Policy</a>
                <a>Terms and Conditions</a>             
            </div>
        </div>
    );
}

export default BlocFinal;