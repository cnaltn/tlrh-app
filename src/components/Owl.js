import React from "react";
import img_1 from "../image/top2.jpg";
import img_2 from "../image/top9.jpg";
import img_3 from "../image/top10.jpg";
import img_4 from "../image/top11.jpg";
import img_5 from "../image/top12.jpg";
import img_6 from "../image/top13.jpg";
import img_7 from "../image/top14.jpg";
import img_8 from "../image/top17.jpg";
import img_9 from "../image/top18.jpg";
import img_10 from "../image/top19.jpg";
import img_11 from "../image/top20.jpg";
import img_12 from "../image/top21.jpg";
import img_13 from "../image/top22.jpg";
import img_14 from "../image/top23.jpg";
import img_15 from "../image/top24.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

const Owl = () => {
  return (
    <div className="section ">
      <div className="owl_ ">
        <div class=""></div>
        <div class="container2 owl-carousel owl-theme owl-loaded">
          <OwlCarousel
            items={20}
            autoWidth={true}
            margin={10}
            autoplay={true}
            loop={true}
            autoplayTimeout={2000}
            autoplaySpeed={4000}
            slideTransition={"linear"}
            slideBy={1}
          >
            <div>
              <img className="img" src={img_1} />
            </div>
            <div>
              <img className="img" src={img_2} />
            </div>
            <div>
              <img className="img" src={img_3} />
            </div>
            <div>
              <img className="img" src={img_4} />
            </div>
            <div>
              <img className="img" src={img_5} />
            </div>
            <div>
              <img className="img" src={img_6} />
            </div>
            <div>
              <img className="img" src={img_7} />
            </div>
            <div>
              <img className="img" src={img_8} />
            </div>
            <div>
              <img className="img" src={img_9} />
            </div>
            <div>
              <img className="img" src={img_10} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Owl;
