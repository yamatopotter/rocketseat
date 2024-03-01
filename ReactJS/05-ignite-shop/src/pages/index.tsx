import {HomeContainer, Product} from "../styles/pages/home";
import Image from "next/image";

import camiseta1 from '../assets/shirts/1.png';
import camiseta2 from '../assets/shirts/2.png';
import camiseta3 from '../assets/shirts/3.png';
import camiseta4 from '../assets/shirts/4.png';
export default function Home() {
  return (
      <HomeContainer>
            <Product>
                <Image src={camiseta1} width={520} height={480} alt={''}/>
                <footer>
                    <strong>Camiseta 1</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

          <Product>
              <Image src={camiseta2} width={520} height={480} alt={''}/>

              <footer>
                  <strong>Camiseta 3</strong>
                  <span>R$ 79,90</span>
              </footer>
          </Product>

          <Product>
              <Image src={camiseta3} width={520} height={480} alt={''}/>
              <footer>
                  <strong>Camiseta 3</strong>
                  <span>R$ 79,90</span>
              </footer>
          </Product>
      </HomeContainer>
  );
}
