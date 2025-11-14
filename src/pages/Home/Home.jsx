import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import CoffeeGallery from "./HomeComponents/CoffeeGallery/CoffeeGallery";
import ListProduct from "./HomeComponents/listProduct/listProduct"

function Home(){
    return(
        <div className = "wrapper">
            <Banner/>
            <CoffeeGallery/>
            <ListProduct />
        </div>
    )

}
export default Home