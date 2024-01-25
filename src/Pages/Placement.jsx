import React, { useState,useLayoutEffect } from 'react';
import Tabs from "./Tabs";
import Items from "./Items";
import GalleryData from '../Component/GalleryData';

import DNEG from "../Images/logos/DNEG.png";
import "../Css/Placement.css";
import MyBackgroundImage from "../Images/aboutBanner.jpg";
import Footer from '../Component/Footer'
// -----------brands-----------//
import Trechnicolor from "../Images/logos/Trechnicolor.png";
import Assemblage from "../Images/logos/Assemblage.png";
import DQ from "../Images/logos/DQ.png";
import PFW from "../Images/logos/PFW.png";
import Framestore from "../Images/logos/Framestore.png";
import Rockstar from "../Images/logos/Rockstar.png";
import zeetv from "../Images/logos/zeetv.png";
import redchillies from "../Images/logos/redchillies.png";
import lakshya from "../Images/logos/lakshya.png";
import legend from "../Images/logos/legend-3d-vfx-studio-pune.png";
// import anibrain from "../Images/logos/anibrain.png";
// import anibrain from "../Images/logos/anibrain.png";
// import anibrain from "../Images/logos/anibrain.png";
// import anibrain from "../Images/logos/anibrain.png";
// import anibrain from "../Images/logos/anibrain.png";
const Placement = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

const [data, setData] = useState(GalleryData)

// Store Category in CategoryData 
const categoryData = GalleryData.map((value) => {
    return value.Category
});
////////////

const tabsData = ["all", ...new Set(categoryData)];


// for all categoryData set 
const filterCategory = (Category) => {
    if (Category == "all") {
        setData(GalleryData)
        return;
    }
    const filteredData = GalleryData.filter((value) => {
        return value.Category == Category;
    })

    setData(filteredData);

}
  return (
    <div>
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Placement</h1>
              {/* <ul className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-home" /> Home
            </a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li className="active">About</li>
        </ul> */}
            </div>
          </div>
        </div>
      </div>

      <div className="placement-studios">
        <div className="wrap-site">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <h2>Students Placement Company</h2>
                <br></br>
              </div>
              <div className="col-sm-12">
                <ul>
                  <li>
                    <img alt="" height={90} src={DNEG} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={Trechnicolor} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={Assemblage} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={DQ} width={150} />
                  </li>
                  <li>
                    <img alt="" src={PFW} width={150} />
                  </li>
                  <li>
                    <img alt="" src={Framestore} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={Rockstar} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={zeetv} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={redchillies} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={legend} width={150} />
                  </li>
                  <li className="middle">
                    <img alt="" src={lakshya} width={150} />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/accenture.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/dreamworks.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/methodstudios.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/legend-3d-vfx-studio-pune.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/lakshya.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/mtv.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/famous.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/fwx.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/makuta.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/mpc.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/viacom18.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/pixamondo.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/goldenrobot.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/trace.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/bot.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/vfxwaala.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/tata.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/basilic-fly.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/limuons.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/contiloe.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/deluxe.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/rotomaker.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/H.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/tau-films.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/vistaprint.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/pcpl.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/icds.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/greenleaf.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/fluidmask.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      height={90}
                      src="/upload/files/Student Placement Logos/Redefine.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/88.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/bitware.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/supari.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      height={90}
                      src="/upload/files/Student Placement Logos/Redgod.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/climbmedia.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/wurfel.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/e-plus.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/bubble.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/after.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/hopmotion.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/labryinht.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      height={90}
                      src="/upload/files/Student Placement Logos/Green-Gold.png"
                      width={150}
                    />
                  </li>
                  <li className="middle">
                    <img
                      alt=""
                      src="/upload/files/Student Placement Logos/philm.png"
                      width={150}
                    />
                  </li>
                  <li>
                    <img
                      alt=""
                      height={90}
                      src="/upload/files/Student Placement Logos/RGBA-Studios.png"
                      width={150}
                    />
                  </li>
                </ul>
                <div className="clearfix">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className="portfolio-area default-padding">
    <div className="container-fluid">
      <div className="portfolio-items-area text-center">
        <div className="row">
          <div className="col-md-12 portfolio-content">
          <div className="site-heading text-center">
                <h2>Our Alumnis</h2>
                <br></br>
              </div>
          <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                                <Items data={data} />
            {/* <div className="mix-item-menu active-theme">
              <button className="active" data-filter="*">
                All
              </button>
              <button data-filter=".campus" className="">
                Campus
              </button>
              <button data-filter=".teachers">Teachers</button>
              <button data-filter=".education">Education</button>
              <button data-filter=".ceremony">Ceremony</button>
              <button data-filter=".students">Students</button>
            </div> */}
            {/* End Mixitup Nav*/}
           
          </div>
        </div>
      </div>
    </div>
  </div>
    
      <Footer/>
    </div>
  );
};

export default Placement;
