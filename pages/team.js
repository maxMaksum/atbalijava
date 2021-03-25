import React from 'react'
import TeamCard from '../components/TeamCard'
import Slider from '../components/SliderPage'

function team() {
    return (
      <div className="container-main">
        <Slider />
        <h3 className="card-title card-title text-dark text-center fw-bold pt-4 ">
          Our Team
        </h3>
        <p className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          accusamus fugit vitae ratione, impedit, officia nisi beatae provident
          voluptatem ipsam fugiat, laudantium libero tenetur minima amet maxime
          odio praesentium recusandae exercitationem. Repudiandae sequi
          doloremque velit totam pariatur? Quas quasi distinctio modi eius quam
          sed aperiam nobis dolorem quos perferendis ex temporibus eum
          blanditiis, aliquam debitis! Nesciunt iusto amet dolores repellat ut a
       
        </p>

        <div className="container">
            <div className="row">
            <div className="col col-sm-12 col-md-6 col-l-4">
                <TeamCard 
                 image= "./Copy.jpg"
                 title = "Mellisa"
                 job = " Tailor"
                 start = "Join since 2007"
                 motto = "motto : orem  doloremque velit totam pariatur?"
                 description ="lorem  doloremque velit totam pariatur? lorem  doloremque velit totam pariatur? lorem  doloremque velit totam pariatur? pariatur? lorem  doloremque velit totam pariatur? lorem  doloremque velit totam pariatur? 
                "
          />
                </div>

                <div className="col col-sm-12 col-md-6 col-l-4">
                <TeamCard 
                 image= "./Copy.jpg"
                 title = "Mellisa"
                 job = " Tailor"
                 start = "Join since 2007"
                 motto = "motto : orem  doloremque velit totam pariatur?"
                 description ="lorem  doloremque velit totam pariatur? lorem  doloremque velit totam pariatur? lorem  doloremque velit totam pariatur? pariatur? lorem  doloremque velit totam pariatur? lorem  doloremque velit totam pariatur? 
                "
          />
                </div>

            </div>

            
        

        </div>
       

       
      </div>
    );
}

export default team
