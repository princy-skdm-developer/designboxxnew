import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { TiEyeOutline } from "react-icons/ti";
const Art = ({data}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  console.log(data)

  return (
    <div>
   <div className='row'>
    {
                     data.map((value,index) => {
                         const {Eventimg } = value
 
                         return (
                             <>
                              <div className="col-lg-3 col-md-6 col-12 mt-lg-4 mt-2" key={index}>
               <div className="advisor-item">
                 <div className="info-box" onClick={() => openLightbox(index)}>
                   <img src={Eventimg} alt="Thumb" />

                   <div className="smile-icon">
              <TiEyeOutline />
            </div>
                 </div>
               </div>
               {lightboxOpen && (
        <Lightbox
          mainSrc={data[photoIndex].Eventimg}
          nextSrc={data[(photoIndex + 1) % data.length].Eventimg}
          prevSrc={data[(photoIndex + data.length - 1) % data.length].Eventimg}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + data.length - 1) % data.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % data.length)}
        />
      )}
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