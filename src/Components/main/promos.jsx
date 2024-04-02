import React from 'react';
// imagens
import Banner1 from '../../assets/banner1.png'
import Banner2 from '../../assets/banner2.png'
import Banner3 from '../../assets/banner3.png'
import * as S from "./styledpromos"

function Promos() {
  return (
    <>
      <S.Background>
        <S.Titulo>Promoção</S.Titulo>
        <S.Promos>
            <figure>
            <S.Cards>
                <img src={Banner1} alt="McLanche no Sofá da Sala" />
                <h3>Que tal um #MéquiNoSofá?</h3>
                <S.CTA>Clique aqui</S.CTA></S.Cards>
            </figure>
            <figure>
            <S.Cards>
                <img src={Banner2} alt="Loja McDonalds" />
                <h3>Venha conhecer nossa nova loja!</h3>
                <S.CTA>Clique aqui</S.CTA></S.Cards>
            </figure>
            <figure>
              <S.Cards>
                <img src={Banner3} alt="Banner de Novidades" />
                <h3>Confira as medidas que o Méqui adotou!</h3>
                <S.CTA>Clique aqui</S.CTA></S.Cards>
                </figure>
          </S.Promos>
      </S.Background>
    </>
  );
}

export default Promos;