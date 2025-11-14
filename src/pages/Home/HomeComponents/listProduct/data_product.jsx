const data = [
  // Coffee
  { id: 1, category: "coffee", name: "Espresso", price: 35000, rating: 4.8, sold: 120, img: "https://product.hstatic.net/200000914837/product/capuchino_2_0f38ce14337b400783e7fa3222ec7129_a7b20c54d10648e190a5dd5aff7d871f_grande.png" },
  { id: 2, category: "coffee", name: "Cappuccino", price: 45000, rating: 4.7, sold: 90, img: "https://product.hstatic.net/200000914837/product/capuchino_2_0f38ce14337b400783e7fa3222ec7129_a7b20c54d10648e190a5dd5aff7d871f_grande.png" },
  { id: 3, category: "coffee", name: "Latte", price: 40000, rating: 4.6, sold: 100, img: "https://product.hstatic.net/200000914837/product/capuchino_2_0f38ce14337b400783e7fa3222ec7129_a7b20c54d10648e190a5dd5aff7d871f_grande.png" },
  { id: 4, category: "coffee", name: "Americano", price: 30000, rating: 4.5, sold: 80, img: "https://product.hstatic.net/200000914837/product/capuchino_2_0f38ce14337b400783e7fa3222ec7129_a7b20c54d10648e190a5dd5aff7d871f_grande.png" },
    { id: 5, category: "coffee", name: "Mocha", price: 50000, rating: 4.7, sold: 70, img: "https://product.hstatic.net/200000914837/product/capuchino_2_0f38ce14337b400783e7fa3222ec7129_a7b20c54d10648e190a5dd5aff7d871f_grande.png" },

  // Đồ đá xay
  { id: 6, category: "đồ đá xay", name: "Chocolate Frappe", price: 50000, rating: 4.5, sold: 80, img: "https://muffinbreak.com.au/wp-content/uploads/2020/11/55_CHOC-FRAPPE-3_4-03_Retouch.png" },
  { id: 7, category: "đồ đá xay", name: "Mocha Frappe", price: 52000, rating: 4.6, sold: 70, img: "https://i.pinimg.com/736x/4d/02/e8/4d02e87d27cafe07cd45e4c5edba9bc0.jpg" },
  { id: 8, category: "đồ đá xay", name: "Caramel Frappe", price: 48000, rating: 4.4, sold: 60, img: "https://img.freepik.com/free-psd/delicious-caramel-popcorn-milkshake-indulge-this-creamy-sweet-treat-topped-with-caramel-popcorn-perfect-blend-textures-flavors_632498-24534.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 9, category: "đồ đá xay", name: "Matcha Frappe", price: 50000, rating: 4.5, sold: 50, img: "https://png.pngtree.com/png-clipart/20250421/original/pngtree-iced-matcha-frappe-with-whipped-cream-png-image_20819384.png" },
  { id: 10, category: "đồ đá xay", name: "Vanilla Frappe", price: 47000, rating: 4.3, sold: 55, img: "https://example.com/images/vanilla_frappe.jpg" },

  // Trà sữa
  { id: 11, category: "trà sữa", name: "Trà sữa trân châu", price: 40000, rating: 4.7, sold: 150, img: "https://example.com/images/tra_sua_tran_chau.jpg" },
  { id: 12, category: "trà sữa", name: "Trà sữa matcha", price: 45000, rating: 4.5, sold: 110, img: "https://example.com/images/tra_sua_matcha.jpg" },
  { id: 13, category: "trà sữa", name: "Trà sữa socola", price: 42000, rating: 4.6, sold: 95, img: "https://example.com/images/tra_sua_socola.jpg" },
  { id: 14, category: "trà sữa", name: "Trà sữa dâu", price: 43000, rating: 4.4, sold: 85, img: "https://example.com/images/tra_sua_dau.jpg" },
  { id: 15, category: "trà sữa", name: "Trà sữa hoàng kim", price: 46000, rating: 4.5, sold: 70, img: "https://example.com/images/tra_sua_hoang_kim.jpg" },

  // Trà hoa quả
  { id: 16, category: "trà hoa quả", name: "Trà đào cam sả", price: 38000, rating: 4.6, sold: 95, img: "https://example.com/images/tra_dao_cam_sa.jpg" },
  { id: 17, category: "trà hoa quả", name: "Trà vải", price: 40000, rating: 4.5, sold: 85, img: "https://example.com/images/tra_vai.jpg" },
  { id: 18, category: "trà hoa quả", name: "Trà chanh leo", price: 37000, rating: 4.4, sold: 75, img: "https://example.com/images/tra_chanh_leo.jpg" },
  { id: 19, category: "trà hoa quả", name: "Trà cam quýt", price: 39000, rating: 4.5, sold: 80, img: "https://example.com/images/tra_cam_quyt.jpg" },
  { id: 20, category: "trà hoa quả", name: "Trà dâu tây", price: 40000, rating: 4.6, sold: 60, img: "https://example.com/images/tra_dau_tay.jpg" },

  // Trà nóng
  { id: 21, category: "trà nóng", name: "Trà xanh nóng", price: 30000, rating: 4.8, sold: 60, img: "https://example.com/images/tra_xanh_nong.jpg" },
  { id: 22, category: "trà nóng", name: "Trà gừng nóng", price: 32000, rating: 4.7, sold: 50, img: "https://example.com/images/tra_gung_nong.jpg" },
  { id: 23, category: "trà nóng", name: "Trà hoa cúc nóng", price: 31000, rating: 4.6, sold: 45, img: "https://example.com/images/tra_hoa_cuc_nong.jpg" },
  { id: 24, category: "trà nóng", name: "Trà thảo mộc nóng", price: 33000, rating: 4.5, sold: 40, img: "https://example.com/images/tra_thao_moc_nong.jpg" },
  { id: 25, category: "trà nóng", name: "Trà sâm nóng", price: 35000, rating: 4.6, sold: 35, img: "https://example.com/images/tra_sam_nong.jpg" }
];


export default data;