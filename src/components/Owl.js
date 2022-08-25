import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { Autoplay, Pagination, Navigation } from "swiper";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./owl.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    className="img"
    src={img_1}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_2}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_3}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_4}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_5}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_6}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_7}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_8}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_9}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_10}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_11}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_12}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_13}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_14}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    className="img"
    src={img_15}
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const itemsLength = Array.from({ length: 5 });

// const items = itemsLength.map((item, index) => {
//   const style = { width: 150 + index * 100 };

//   return (
//     <div className="item" style={style}>
//       {index + 1}
//     </div>
//   );
// });

const Owl = () => {
  return (
    <div className="section">
      <div className="container2">
        <AliceCarousel
          autoWidth
          mouseTracking
          autoPlay={true}
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={true}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      </div>
    </div>
  );
};

export default Owl;
