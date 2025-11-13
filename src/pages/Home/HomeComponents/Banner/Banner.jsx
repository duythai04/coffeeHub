import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";
import banner1 from "../../../../assets/banner/banner1.png";
import banner2 from "../../../../assets/banner/banner2.png";

const BannerImg = [
  {
    img: banner1,
    title: "Cà phê đậm vị – Sáng tạo từng ngày",
    desc: "Thưởng thức hương vị tuyệt hảo từ hạt cà phê nguyên chất.",
    btn: "Đặt ngay",
  },
  {
    img: banner2,
  },
];

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {BannerImg.map((item, index) => (
          <div key={index} className="banner-slide">
            <img
              src={item.img}
              alt={`banner-${index}`}
              className="banner-img"
            />

            {(item.title || item.desc || item.btn) && (
              <div className="banner-content">
                {item.title && <h2>{item.title}</h2>}
                {item.desc && <p>{item.desc}</p>}
                {item.btn && <button>{item.btn}</button>}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
