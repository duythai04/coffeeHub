import React, { useState } from "react";
import data from './data_product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './listProduct.scss';

function ListProduct() {
  const [selectedCategory, setSelectedCategory] = useState("coffee"); 

  const categories = [...new Set(data.map(item => item.category))];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter(item => item.category === selectedCategory);

  return (
    <div className="list-container">
      <div className="list-menu">
        <ul>
          {categories.map((cat, index) => (
            <li
              key={index}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-slide">
        <Slider {...settings}>
          {filteredData.map(item => (
            <div key={item.id} className="slide-item">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p className = "price">Giá: {item.price.toLocaleString()} VNĐ</p>
              <p>Đánh giá: {item.rating} ⭐ | Đã bán: {item.sold}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ListProduct;
