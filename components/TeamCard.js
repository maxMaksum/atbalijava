import React from 'react'

function Card(props) {
    return (
      <div>
        <div className="container m-2 p-2 card ">

            <div className="container d-flex flex-row card__container">
              <div className ="avatar__container  p-2">
                  <img src={props.image} className=" avatar p-2 " alt="..." />
              </div>

              <div className="ml-2 border border-light rounded ">
                <div className="p-3">
                  <h5 className="card-title text-left">{props.title}</h5>
                  <h6 className="card-title">{props.job}</h6>
                  <h6 className="card-title">{props.start}</h6>
                  <p className="card-text">
                  {props.motto}
                </p>
                </div>
                
              </div>
            </div>
            <div className="card-body container ">
               <p className="border border-light p-2">
                 {props.description}
               </p>
             </div>
        
        </div>
        <style jsx>{`

        .card__container {
            height: 200px;
            width: 100%;
            

          }
          .avatar__container {
            height: 200px;
            width: 200px; 

          }
          .avatar {
              vertical-align: middle;
              width: 150px;
              height: 150px;
              border-radius: 50%;
          
              background-color:#36454F;
             
              
            }
        `}</style>
      </div>
    );
}

export default Card
