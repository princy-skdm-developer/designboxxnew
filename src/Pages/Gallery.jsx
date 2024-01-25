
import '../Css/Gallery.css';
import React, { useState,useLayoutEffect } from 'react';
import Tabs from "./Tabs";
import Items from "./Items";
import GalleryData from '../Component/GalleryData';
import MyBackgroundImage from "../Images/galleryBanner.jpg";
import Footer from '../Component/Footer';
const Gallery = () => {
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
        <h1>Gallery</h1>
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


      <div id="portfolio" className="portfolio-area default-padding">
    <div className="container">
      <div className="portfolio-items-area text-center">
        <div className="row">
          <div className="col-md-12 portfolio-content">

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
  )
}

export default Gallery