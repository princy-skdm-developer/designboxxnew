import React from 'react'

const Art = ({data}) => {
  return (
    <div>
   <div className='row'>
    {
                     data.map((value) => {
                         const {Eventimg } = value
 
                         return (
                             <>
                              <div className="col-md-3 mt-lg-4 mt-2">
               <div className="advisor-item">
                 <div className="info-box">
                   <img src={Eventimg} alt="Thumb" />
                   {/* <div className="stick">
                    <p></p>
                   </div> */}
                 </div>
               </div>
               </div>
               </>
                         )
                     })
                   }
           </div>
     </div>
  )
}

export default Art