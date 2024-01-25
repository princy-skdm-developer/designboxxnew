import React from "react";
import "../Css/Work.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/grid';
import "swiper/css/navigation";

// import { Navigation } from "swiper";
import { Grid, Pagination } from 'swiper';
const Work = ({ data }) => {
  
  return (
    <div>
     
            {/* <div className='row'>
            
                { */}
                  <Swiper
                
                grid={{
                  rows: 2,
                  fill: "row",
                }}

                
                  // navigation={true}
                  breakpoints={{
                    570: {
                      slidesPerView: 1,
                      spaceBetween: 70,
                      
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      
                    
                      spaceBetween: 30,
                    
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Grid, Pagination]}
                  // modules={[Navigation]}s
                  className="mySwiper1"
                > {
                    data.map((value) => {
                        const { id, CImage, CategoryName,Cap,Duration,Ctitle,Desc,Icon,Earn } = value

                        return (
                            <>
               <SwiperSlide>
                     
                      <div className="card" >
                        
                <img src={CImage} className="card-img-top" alt="" />
                <div className="overlay">
                <p>{Desc} </p>
                </div>
                <div className="card-body">
                  <div>
                  <h5 className="card-title"><img src={Icon} style={{width:20, height:20,marginRight:5}}></img>{CategoryName} <span>{Ctitle}</span></h5>
                  </div>
               
                  <p className="card-text" style={{color:"blue"}}><img src={Cap} style={{width:15, height:15,marginRight:5}}></img>{Earn}</p>
                  <p className="card-text" style={{fontSize:"13"}}>{Duration}</p>
                  
                </div>
          
                        {/* <div className="imgwrap">
                          <img src={CImage} className="" alt="" />
                        </div> */}
                      </div>
                   </SwiperSlide>
                   
             
              </>
                        )
                    })
                  }
               
                </Swiper>
                 {/* }
                
            </div> */}

            
        </div>
       
    )
  
}

export default Work;
