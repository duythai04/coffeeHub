import React from "react";
import "./Header.scss";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        AND.Z COFFEE | PREMIUM COFFEE FROM VIETNAM
      </div>

      <div className="main-header">
        <div className="logo">
          <h1>And.Z</h1>
        </div>

        <nav className="menu">
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </nav>

        <div className="header-icons">
          <ul>
            <li><FiSearch className="icon" /></li>
            <li><FaRegUser className="icon" /></li>
            <li>
              <IoCartOutline className="icon" />
              <span className="cart-count">0</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
