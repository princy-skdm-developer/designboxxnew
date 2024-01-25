import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TeamData from "../Component/TeamData";
import prof from "../Images/original.jpg";
const Team = ({data}) => {
  return (
    <div>
         <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center  owl-loaded owl-drag">
              <div className="row">
                  {data.map((value) => {
                    const {Tname,Desig,Timage } = value;

                    return (
                      <>
                        {/* <SwiperSlide> */}
                          <div className="col-lg-3 col-md-6  col-12">
                            <div className="info-box">
                              <img src={Timage} alt="Thumb" />
                              <div className="info-title">
                                <h5>{Tname}</h5>
                                <span>{Desig}</span>
                              </div>
                            </div>
                          </div>
                      
                      </>
                    );
                  })}
               </div>
              </div>
    </div>
  )
}

export default Team