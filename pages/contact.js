import React from 'react'
import Adress from '../components/Adress';
import Form from '../components/Form';
import Slider from '../components/SliderPage';


import SocialMedia from '../components/SocialMedia'
import Map from '../components/Map'

function contact() {
  
    
    return (
      <div className="container-main footer__container">


        <Slider />
<     div>
        <div className="row g-2 ">
          <div className="col-sm-12">
            <Form />
          </div>

            <div className="col-sm-12 col-md-6 my-2 ">
              <SocialMedia className="h-100 m-2" />
            </div>
            <div className="col-sm-12 col-md-6 my-2">
              <Adress className="h-100" />
            </div>

            <div className="col-sm-12">
              <Map />
            </div>
           </div>
        </div>
        <style jsx>
          {`
                
                .footer__container{
                    
                    width:100%;
                    background-color:#008080;
                    border-radius:2px
                    }

               
                }
              
                `}
        </style>
      </div>
    );
}

export default contact
