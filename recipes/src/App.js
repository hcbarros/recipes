import React, { Component } from 'react';
import Slider from 'react-slick';
import Illustration from './components/bloc1/Illustration';
import RecipeItem from './components/bloc2/RecipeItem';
import recipes from './components/bloc2/Recipes';
import BestRecipes from './components/bloc2/BestRecipes';
import BestServices from './components/bloc3/BestServices';
import ReportItem from './components/bloc4/ReportItem';
import reports from './components/bloc4/Reports';
import ArrowButton from './components/bloc4/ArrowButton';
import OurBlog from './components/bloc4/OurBlog';
import BlocFinal from './components/bloc5/BlocFinal';



class App extends Component {
  
  
  render() {        
    
    const settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 3.2,
      nextArrow: <ArrowButton /> 
    };

    return (
      
      <div>
        <Illustration/>
        <div className="bloc2">   
          <BestRecipes/>       
        <div className="container">
          
          <div className="row">
            {recipes.map(recipe =>
              <RecipeItem item={recipe} />
            )}
          </div>
        </div>
        </div>
          <BestServices/>    

          <div className="bloc4">   
          	  <OurBlog/>       
            <Slider {...settings}>
                      
                {reports.map(report =>
                  <ReportItem item={report} />
                )}
              
            </Slider>
          </div> 

          <BlocFinal/>        

      </div>
    );
  }
}

export default App;
