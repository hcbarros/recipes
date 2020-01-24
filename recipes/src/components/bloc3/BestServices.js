import React from 'react';
import services from '../../imagens/bloco_services.svg';


const BestServices = () => {

    return(
        <div className="services">
            <img className="img-fluid" src={services} alt="" />
            <div>
                <p>The best services ready</p>
                <p>To serve you</p>
                <p>Far far away, behind the word mountains, far from</p>
                <p>the countries Vokalia and Consonantia, there live the</p>
                <p>blind texts.</p>
                <p>Separated they live in Bookmarksgrove right at the</p>
                <p>coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and</p>
                <p>supplies it with the necessary regelialia</p>
                <button>Know More</button>
            </div>
        </div>
    );
}

export default BestServices;