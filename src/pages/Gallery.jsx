import React from 'react';

import '/public/css/gallery-style.css'
import { galleres } from '../database.test';

const GalleryPage = () => {
  return (
    <>
      <div className="bg-img-gallery">
        <div className="title">
            <h1>Gallery</h1>
        </div>
      </div>

      <article>
        <scetion className="gallery-container">
          {galleres.map(gallery => (
            <>
              <div className="img-container">
                {gallery.col1.map(img => (
                  <img src={img.img} alt="" />
                ))}
              </div>
              <div className="img-container">
                {gallery.col2.map(img => (
                  <img src={img.img} alt="" />
                ))}
              </div>
              <div className="img-container">
                {gallery.col1.map(img => (
                  <img src={img.img} alt="" />
                ))}
              </div>
              <div className="img-container">
                {gallery.col2.map(img => (
                  <img src={img.img} alt="" />
                ))}
              </div>
            </>
          ))}
        </scetion>
      </article>
    </>
  );
}

export default GalleryPage;