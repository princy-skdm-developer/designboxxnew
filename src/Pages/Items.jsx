import React from 'react';
import "../Css/Item.css";
// import Zoom from 'react-reveal/Zoom';
const Items = ({ data }) => {
    return (
        <>
            <div className='row'>
                {
                    data.map((value) => {
                        const { id, CImage, CategoryName } = value

                        return (
                            <>
                              {/* <div className="alumni"> */}
        {/* <div className="wrap-site"> */}
          {/* <div className="container">
            <div className="row"> */}
              
              <div
                className="col-12 col-md-3 grid-item scat17"
               
              >
                <a>
                  <div className="wrap-site">
                    <h3>Piyush Gadage</h3>
                    <h4>Modeling Artist</h4>
                    <h5>iMUONS</h5>
                  </div>
                </a>
              </div>
             
            {/* </div> */}
          {/* </div>
        </div> */}
      {/* </div> */}
                                {/* <Zoom> */}
                                    {/* <div className="col-lg-4 col-md-6 my-3" key={id}>
                                        <div className="card bg-light text-center">
                                            <img src={CImage} alt="house interior design" />
                                            <div className='Card-text'>
                                                <h2>{CategoryName}</h2>
                                            </div>
                                        </div>
                                    </div> */}
                                {/* </Zoom> */}
                            </>
                        )
                    })
                }

            </div>

            
        </>
    )
}

export default Items