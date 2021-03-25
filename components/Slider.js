import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
function Slider() {
   
const data = [
        {id:1,
        image:'/bckground.jpg',   
        caption:"Surface Deals",
        title: "lorem lorem lorem lorem",
        
        dataImage:[
                
                {id:11},
                { image:'/bckground.jpg'},
                {Caption:"top"}
            ]
        },

        {
            id:2,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",

            dataImage:
            [
            {id:12},
            { image:'/bckground.jpg'},
            {Caption:"top"}
            ]
        },

        {
            id:3,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem",
            dataImage:[
                {id:13},
                { image:'/bckground.jpg'},
                {Caption:"top"}


        ]
        },

        {
            id:4,
            image:'/bckground.jpg',
            caption:"Surface Deals",
            title: "lorem lorem lorem lorem lorem lorem lorem lorem",
            dataImage:[
                {id:14},
                { image:'/bckground.jpg'},
                {Caption:"top"}


            ]
        }
        

    ]
 
    
    const [newData, SetnewData] = useState(data)

    return (
        
        <div className ="container-main">
       
            <Swiper
                    spaceBetween={100}
                 
                    slidesPerView={1}
                    
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >
                    { newData.map(user=>(

                    <SwiperSlide key={user.id}>
                   
                   <div className="text-white card text-left" >
                        <img className="card-img-top w-100 m-0 p-0" src={user.image}/>
                    
                       

                        <div className="card-img-overlay ">
                            <h5 className="card-title">{user.caption}</h5>
                            <h6 className="card-text ">{user.title}</h6>
                          
                        </div>
                        </div>
                       
                   
                    </SwiperSlide>
                    ))}

                   

                
                </Swiper>
              

            <style jsx>
                {`
                
                .swiper-main{
                    margin-bottom:50 px;
                        width:14rem;
                      
                    }
                .card__container{
                   
                    width:100%:
                }

                .img-container{
                    height:100%;
                    width:100%;
                }

                .image__size{
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    object-position:center;
                    background-size: 100%;


                }
                

               
                }
              
                `}

            </style>

        </div>
    )
}

export default Slider
