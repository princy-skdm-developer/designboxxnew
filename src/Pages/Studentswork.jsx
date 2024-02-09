import React, { useState,useLayoutEffect } from 'react';
import Tabs from "./Tabs";
import Footer from '../Component/Footer';
import StudWork from "../Component/StudWork";
import Art from './Art';
import MyBackgroundImage from "../Images/pagebanner.jpg";
const Studentswork = () => {

  const [data, setData] = useState(StudWork);

  // Store Category in CategoryData
  const categoryData = StudWork.map((value) => value.Category);

  // Get unique categories
  const tabsData = ['all', ...new Set(categoryData)];

  // Filter data based on selected category
  const filterCategory = (Category) => {
    if (Category === 'all') {
      setData(StudWork);
    } else {
      const filteredData = StudWork.filter((value) => value.Category === Category);
      setData(filteredData);
    }
  };

  return (
    <div>
 <div
        className="breadcrumb-area shadow dark text-center text-light"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Life At Designboxx</h1>
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
    <div className="container-fluid">
      <div className="portfolio-items-area text-center">
        <div className="row">
          <div className="col-md-12 portfolio-content">
          {/* <div className="site-heading text-center">
                <h2>Our Alumnis</h2>
                <br></br>
              </div> */}
             <Tabs filterCategory={filterCategory} tabsData={tabsData} />

                {/* Assuming StudWork is a component that displays the filtered data */}
                <Art data={data} />
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

export default Studentswork;