import Marquee from "react-fast-marquee";

import brand_01 from "../../images/brand-01.png";
import brand_02 from "../../images/brand-02.png";
import brand_03 from "../../images/brand-03.png";
import brand_04 from "../../images/brand-04.png";
import brand_05 from "../../images/brand-05.png";
import brand_06 from "../../images/brand-06.png";
import brand_07 from "../../images/brand-07.png";
import brand_08 from "../../images/brand-08.png";
const Marque = () => {
  return (
    <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <Marquee>
          <div className="d-flex ">
            <img src={brand_01} alt="brand_01" />
            <img src={brand_02} alt="brand_01" />
            <img src={brand_03} alt="brand_01" />
            <img src={brand_04} alt="brand_01" />
            <img src={brand_05} alt="brand_01" />
            <img src={brand_06} alt="brand_01" />
            <img src={brand_07} alt="brand_01" />
            <img src={brand_08} alt="brand_01" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Marque;
