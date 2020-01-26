import React from 'react';
import services from '../../imagens/bloco_services.svg';


const BestServices = () => {

    return(
        <div className="services">
            <img className="img-fluid" src={services} alt="" />
            <div>
                <a>The best services ready</a>
                <a>To serve you</a>
                <a>Far far away, behind the word mountains, far from</a>
                <a>the countries Vokalia and Consonantia, there live the</a>
                <a>blind texts.</a>
                <a>Separated they live in Bookmarksgrove right at the</a>
                <a>coast of the Semantics, a large language ocean.</a>
                <a>A small river named Duden flows by their place and</a>
                <a>supplies it with the necessary regelialia</a>
                <button>Know More</button>
            </div>
        </div>
    );
}

export default BestServices;