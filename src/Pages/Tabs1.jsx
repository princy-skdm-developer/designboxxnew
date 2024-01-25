import React from 'react';
import "../Css/Tabs.css";
// import Zoom from 'react-reveal/Zoom';
const Tabs1 = ({ filterCategory, tabsData }) => {


    return (
        <>
            <div className='Tabs-container'>
                {/* <Zoom right cascade> */}
                    <div className="text-center">
                        {
                            tabsData.map((Category, index) => {
                                return (
                                    <div className="mix-item-menu active-theme">
               <button type="button" className="btn btn-outline-primary my-2 mx-3 text-capitalize " onClick={() => filterCategory(Category)} key={index}>{Category}</button>
            </div> 
                                  
                                )
                            })
                        }

                    </div>
                    
                {/* </Zoom> */}
            </div>
        </>
    )
}

export default Tabs1