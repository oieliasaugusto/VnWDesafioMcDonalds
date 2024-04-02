import React from 'react';
import * as S from "./styledfooter"
// imagens
import Arcos from "../../assets/minilogo.png"
import Playstore from "../../assets/appstore.png"
import Appstore from "../../assets/playstore.png"

function Footer() {
  return (
    <>
<S.Background>
<S.Footer>
<S.Assinatura><img src={Arcos} alt="Arcos Dourados" />
<p>© McDonald’s 2024</p></S.Assinatura>
<S.MobileStores>
    <img src={Playstore} alt="Google Play Store" />
    <img src={Appstore} alt="Apple App Store" />
</S.MobileStores>
</S.Footer>
</S.Background>
    </>
    );
  }
  
  export default Footer;