import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import CoffeeGallery from "./HomeComponents/CoffeeGallery/CoffeeGallery";

function Home(){
    return(
        <div className = "wrapper">
            <Banner/>
            <CoffeeGallery/>
        </div>
    )

}
export default Home