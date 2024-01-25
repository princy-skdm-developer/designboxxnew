import React from 'react';
import "../Css/Tabs.css";
// import Zoom from 'react-reveal/Zoom';
const Tabs = ({ filterCategory, tabsData }) => {


    return (
        <>
            <div className='Tabs-container'>
                {/* <Zoom right cascade> */}
                    <div className="text-center">
                        {
                            tabsData.map((category, index) => {
                                return (
                                    <div className="mix-item-menu active-theme">
               <button type="button" className="btn btn-outline-primary my-2 mx-3 text-capitalize " onClick={() => filterCategory(category)} key={index}>{category}</button>
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

export default Tabs