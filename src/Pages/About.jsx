import React, { useState } from "react";
import "../Css/About.css";
import Tabs from "./Tabs";
import "../Css/Tabs.css";
import Team from "./Team";
import MyBackgroundImage from "../Images/aboutusBanner.jpg";
import aboutPic from "../Images/aboutBanner.jpg"
import aboutImg from "../Images/full photo.jpg";
import aboutImg1 from "../Images/rashmimam.png";
import TeamData from "../Component/TeamData";
import banner from "../Images/exploreBanner.jpg";

import "swiper/css";
import "swiper/css/navigation";

import Footer from "../Component/Footer";


const About = () => {
  const [data, setData] = useState(TeamData);

  // Store Category in CategoryData
  const categoryData = TeamData.map((value) => {
    return value.Category;
  });
  ////////////

  const tabsData = ["all", ...new Set(categoryData)];

  // for all categoryData set
  const filterCategory = (Category) => {
    if (Category == "all") {
      setData(TeamData);
      return;
    }
    const filteredData = TeamData.filter((value) => {
      return value.Category == Category;
    });

    setData(filteredData);
  };
  // --------------read more----------------
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 170) : text}
        <span onClick={toggleReadMore} className="read-or-hide" style={{color:"red"}}>
          {isReadMore ? "...Read more" : " Show less"}
        </span>
      </p>
    );
  };
  return (
    <div>
      <section
              className="breadcrumb-area shadow dark text-center text-light"
        style={{backgroundImage: `url(${MyBackgroundImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
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
      </section>

      <div className="about-area1  default-padding">
        <div className="container">
          <div className="row">
           
            <div className="col-md-12 info">
            <div className="portfolio-items-area">
        <h2>About Designboxx</h2>
   
              </div>
              {/* item */}
              <div className="item">
                <div className="info">
                  <p >
                    {/* <i className="fa fa-check" />  */}
                    DesignBoxx, is a cutting-edge educational institution that
                    paves the way for a dynamic future in Fashion Designing and
                    Interior Designing. Under the Chairmanship of Mr. Rajesh R.
                    Turakhia, Who has made a significant Impact In the field of
                    AVGC training across India by creating and successfully
                    executing two leading educational institution brands namely
                    Frameboxx 2.0 and MAAC over the last 25 years. His passion
                    to be in the Design field led him to start a fresh
                    Initiative in Fashion and interior Design by the name of
                    Designboxx. With the ever-evolving global market trends, the
                    demand for skilled professionals in these creative domains
                    is at an all-time high. <ReadMore >Our campus offers a comprehensive
                    and hands-on approach to education, ensuring that our
                    students are well-equipped to meet the challenges of the
                    industry. The fashion and interior design industries have
                    experienced remarkable growth over the years, reflecting the
                    increasing emphasis on personal expression and living
                    spaces. As per market data, the global fashion industry is
                    projected to continue expanding at a steady pace, creating
                    ample career opportunities for talented designers.
                    Simultaneously, the interior design market is witnessing a
                    surge, driven by the desire for innovative and aesthetically
                    pleasing living and working spaces. At DesignBoxx, we don't
                    just teach design. We nurture creativity, foster innovation,
                    and still a deep understanding of industry dynamics. Our
                    expert faculty, state-of-the-art facilities, and industry
                    connections ensure that our students gain practical skills
                    and insights that are highly sought after by employers. By
                    enrolling in our campus, you'll be on the path to a
                    promising future in these dynamic industries, where your
                    unique ideas and talents will shape the world of fashion and
                    interior design. Join us and be prepared to lead the way in
                    this exciting and flourishing market.</ReadMore>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
          <div className="portfolio-items-area">
        <h2>Meet the Managemnet</h2>
   
              </div>
      
            
                <div class="col-md-5 col-12 pb-3">
                  <div class="ownerImg ">
                    <img src={aboutImg} alt="" />

                  </div>
                
                </div>
              
              {/* </div> */}
              {/* </div> */}
            <div className="col-md-7 info">
            <div class="ownerDesc">
                    <h3>Rajesh R. Turakhia</h3>
                    <p>Founder & Chairman Designboxx </p>
                  
                  </div>
            <p>
                Rajesh R. Turakhia has made a significant impact in the field of
                AVGC training across India by creating and successfully
                executing two leading educational institution brands namely
                Frameboxx 2.0 and MAAC over the last 25 years. Under his
                leadership, both institutions have successfully mentored over
                2,00,000 students. His vision to enhance the quality and studio
                readiness of the workforce is reflected in the fact that most of
                the studios in India have students or animators trained under
                his tutelage.
             
                Curiosity incommode now led smallness allowance. Favour bed
                assure son things yet. Sh consisted consulted elsewhere
                happiness disposing household any old the. Widow downs.
                Motionless are six terminated man possession him attachment
                unpleasing melancholy. Sir smile arose one share. No abroad in
                easily relied an whence lovers temper by.
             
                Rajesh’s vision of MAAC began to take shape in 2001 as a
                Founder. Brimming with an impassioned mindset, Rajesh always
                wanted to bring a positive impact on the animation industry.
                He
                is also the founding force of ’24 FPS’, a revolutionary and
                industry-recognized competition, to give students and
                professionals their due recognition and fame in the Animation
                and VFX industry.
                <ReadMore>
                His visionary mindset saw him overlooking the state-of-the-art
                production studio, Maya Entertainment Limited (MEL) as a CEO and
                Executive Director. Mentoring the studio from 8 artists to
                strength of 500 artists, his initiatives soon made MEL one of
                the top five studios in India. Under his mentorship, MEL worked
                on some of the country’s most prolific clients like BBC,
                Electronic Arts, MTV, Activision, Coke, and Rainbow Pvt. Ltd.
             
                To give students a hands-on experience, Rajesh launched
                Frameboxx in 2008 with the now sought-after, ‘Incubation Centre’
                where students got to hone their skills on LIVE projects. It was
                a real production scenario of client servicing, providing
                quality output within the stipulated deadlines, and cracking
                deliverables as a team.
            
                Despite achieving milestones, Rajesh was still hungry to make it
                big for his students. He soon worked towards placing Frameboxx
                on the global map by collaborating with reputed academic
                institutions like Seneca College in Canada and Anglia Ruskin
                University in the United Kingdom to award international
                certifications. To give students an extra edge, Frameboxx even
                secured partnership deals with prominent Universities in India.
                As of today, Frameboxx is a proud and authorized Training
                partner of the Media and Entertainment Skill Council (MESC) and
                has its curriculum aligned to the QPNOS (a part of NSDC Skill
                India Mission Project) standards. To raise the bar for
                continuous development, Rajesh launched Frameboxx in a whole new
                avatar. Coined as ‘Frameboxx 2.0’ in 2019, the refashioned
                establishment became a ‘Premier Academy for Media & Creative
                Arts’- an amalgamation of various creative and technical skills
                required by the media and entertainment industry. Frameboxx 2.0
                broadened the gamut of creative design and visual art by
                curating verticals of new media technologies and creative
                research in the fields of Gaming, Augmented Reality, Virtual
                Reality, and more. Frameboxx is operated and supervised by
                industry experts and professionals with over 20 years of
                experience to their credit. To leave no stone unturned, Rajesh
                engaged with internationally acclaimed artists such as Steve
                Wright to design a curriculum in path-breaking software. He even
                ensured to institutionalize an advisory board and governing
                panel for keeping a constant watch on quality content.
                Appropriate measures are taken to ensure the examples when
                quoted are from the post-production pipeline as opposed to dated
                use cases. Frameboxx 2.0 got its due credit in the form of an
                honorary mention in the ‘Top 25 International Animation Schools
                and Colleges - 2020 International Rankings’ by Animation Career
                Review. Rajesh has made his presence count by being proactive in
                several industry bodies and participating as a key speaker at
                many international events in India and overseas. Currently, he
                is a part of the Sub-Task Force (Skilling) for formulating and
                suggesting the policy for the AVGC ecosystem. He is also a
                member of the CII Sub Committee on AVGC and Immersive Media. His
                relationships with fellow industry leaders have made him one of
                the most influential personalities that can make a valuable
                difference in the field of Arts and Entertainment.</ReadMore>
              </p>{" "}
            </div>
            {/* <div className="col-md-6 thumb">
          <img src={aboutImg1} alt="Thumb" />
        </div> */}
            {/* </div> */}
            <div className="seperator col-md-12">
              <span className="border" />
            </div>
          </div>
        </div>
    </div>
      <div className="about-area1  default-padding">
        <div className="container">
          <div className="row">
          
          <div className="col-md-7 col-12 info order-lg-1 order-2">
            <div class="ownerDesc">
                    <h3>Rashmi Raut Pagare</h3>
                    <p>Vice President, Designboxx </p>
                   
                  </div>
              {/* item */}
              <div className="">
                <div className="">
                  <p>
                    {/* <i className="fa fa-check" />  */}
                    Mrs. Rashmi Raut Pagare has made a significant impact in the
                    field of Education, skill industry leading Fashion and
                    Interior Designing She is active in relevant sectors and
                    successfully executing JFiD brand covering more than 10
                    years. The registered institution accomplishes a desired aim
                    in mentoring more than 60,000 students. Rashmi Raut Pagare
                    has unique aspirations for her life and designboxx offers
                    the education pathways and guidance to discover a successful
                    future. Rashmi Raut Pagare envision a one-of-a-kind college
                    of the applied arts,where your creative talent, academic
                    engagement and determination are fostered by a dedicated
                    faculty and staffs, this visionary mindset always energized
                    fellow students from diverse backgrounds, across the country
                    and around the globe , with creative objectives and ideas.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-12 pb-3 order-lg-2 order-1">
                  <div class="ownerImg " >
                    <img src={aboutImg1} alt="" />

                  </div>
                
                </div>
            
          </div>
        </div>
      </div>
      <div
        className="video-area padding-xl text-center bg-fixed text-light shadow dark-hard"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-0"></div>
            <div className="col-md-6 col-12">
              <div className="video-heading text-center">
                <h2>Explore the Best You Can</h2>
                <p>
                To get the best out of you, you will be trained to enhance your creative and technical skills. This process takes a final shape when we provide you with industry specific assignments to work on. You will fetch the benefit of practically experiencing the creative process of the Fashion & Interior Designing industry. Various projects will keep you abreast with the new technology and media.

Learning the latest trends in these industries will help you in building a lucrative career in new digital age. Our versatile training and personal mentoring focuses on mastering various technical and interpersonal skills.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-0"></div>
          </div>
        
        </div>
      </div>

      <section
        id="advisor"
        className="portfolio-area  carousel-shadow default-padding bottom-less"
      >
        <div className="container default-padding">
          <div className="row">
            <div className="site-heading text-center">
              {/* <div className="col-md-8 col-md-offset-2"> */}
              <h2>Meet The Team</h2>
           
            </div>
          </div>
          <div className="row">
            <div className="col-12 portfolio-content">
              {/* <Tabs filterCategory={filterCategory} tabsData={tabsData} /> */}

              <Team data={data} />
            </div>
          
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
