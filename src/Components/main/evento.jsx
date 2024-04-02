import React, { useState, useEffect } from 'react';
import imagem1 from '../../assets/bigbigmac.png';
import imagem2 from '../../assets/bigmac.png';
import imagem3 from '../../assets/sorvete.png';

function ImageGallery() {
const [MC, setMC] = useState (imagem1)
}
useEffect (() => {
  if (MC === imagem2) {
  }

return (
    <>
 <section>
      <div>
        <img src={MC} alt="" />
      </div>
      <div>
        <img onClick={() => { setMC(imagem1) }} src={imagem1} alt="" />
        <img onClick={() => { setMC(imagem2) }} src={imagem2} alt="" />
        <img onClick={() => { setMC(imagem3) }} src={imagem3} alt="" />
      </div>
    </section>
    </>
)

export default ImageGallery;