import React from 'react';
// imagens
import BigMac from '../../assets/bigbigmac.png';
import Burg from '../../assets/bigmac.png'
import Batata from '../../assets/batata.png'
import Sorvete from '../../assets/sorvete.png'

import * as S from "./styledmain"



function Main() {
  return (
    <>
    <S.background>
      <S.banner>
        <img src={BigMac} alt="Grandioso Big Mac" />
        <S.frase>
        <S.h1>BATEU AQUELA</S.h1>
        <S.line2>
        <S.span>#FOME</S.span><S.h1>DE</S.h1>
        <S.span>MÉQUI</S.span><S.h1>?</S.h1>
        </S.line2>
        </S.frase>
      </S.banner>
      <S.Promos>
        <img src={Burg} alt="Big Mac delicioso" />
        <img src={Batata} alt="Batata frita crocante" />
        <img src={Sorvete} alt="Cascão de sorvete" />
      </S.Promos>
      </S.background>
    </>
  );
}

export default Main;