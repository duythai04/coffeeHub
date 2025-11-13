import React from "react";
import "./CoffeeGallery.scss";
import img1 from '../../../../assets/img/img1.png'
import img2 from '../../../../assets/img/img2.png'
import img3 from '../../../../assets/img/img3.png'
import img4 from '../../../../assets/img/img4.png'



const CoffeeGallery = () => {
  return (
    <section className="coffee-gallery">
      <div className="gallery-text">
        <h2>Không gian cà phê – Hương vị & Cảm xúc</h2>
        <p>
          Mỗi tách cà phê đều mang trong mình một câu chuyện riêng. Từ hương thơm 
          nồng nàn của hạt rang mới đến vị đắng dịu trên đầu lưỡi – tất cả hòa quyện 
          tạo nên những khoảnh khắc đáng nhớ. Hãy để chúng tôi mang trải nghiệm cà phê 
          đích thực đến với bạn.
        </p>
      </div>

      <div className="gallery-images">
        <div className="img">
          <img src={img1} alt="Không gian quán cà phê" />
        </div>
        <div className="img">
          <img src= {img3} alt="Ly cà phê" />
        </div>
        <div className="img">
          <img src= {img2} alt="Pha cà phê thủ công" />
        </div>
        <div className="img">
          <img src= {img4} alt="Pha cà phê thủ công" />
        </div>
      </div>
    </section>
  );
};

export default CoffeeGallery;
