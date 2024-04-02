import React from "react";
import Logo from "../../assets/logo.png";
import Cel from "../../assets/app.png";
import * as S from "./styledheader"

function Header () {
    return (
        <>
        <S.Background>
        <S.Menu>
        <img src={Logo} height="50px" alt="logo" />
        <S.BaixarApp>
        <img src={Cel} alt="Baixe o app" />
        <p>Baixe o App</p>
        <S.button>Peça seu Méqui</S.button>
        </S.BaixarApp>
        </S.Menu>
        </S.Background>
        </>
    )
}

export default Header;