import React from 'react'
import Adress from './Adress'
import Form from './Form'
import { useRouter } from 'next/router'
import SocialMedia from './SocialMedia'
import Map from './Map'
function Footer() {
    const router = useRouter()
    console.log(router.pathname)
  
    return (
      
            <div className="footer__container w-100">

            <div className="container">
            { router.pathname === "/contact"? null : 
            
            <div className="row g-2 container ">

                <div className="col-sm-12 p-2 "> 
                    <Form /> 
                </div>

                <div className="col-sm-12 col-md-6 p-2"> 
                
                 <SocialMedia/> 
                
                 </div>
                <div className="col-sm-12 col-md-6 p-2">
                  <Adress /> 
                 </div>

                 <div className="col-sm-12 p-2"> <Map/> 
                </div>
               
            </div>
            }
            </div>

            <style jsx>
                {`
                
                .footer__container{
                    
                    width:100%;
                    background-color:#097969;
                    border-radius:2px;
                    }

               
                }
              
                `}

            </style>
          
            </div>     
     
    )
}

export default Footer
