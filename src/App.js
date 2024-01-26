import React from "react";
import Nav from "./Nav";
import Sections from "./sections";
import Footer from "./footer";
import Carousal from "./Carousal";
import Discount from "./discounts";
import Ad from "./ad";
// import Data from "./Data";
import Product from "./product";
import OurProduct from './lauches'
import Smart from './Smart'


function App(params) {
  return (
    <>
   
      <Nav />
      
      <Sections />
      <br /> <br />
      <Carousal />
      <br />
      <br />
      <Discount />
      <br />
      <br />
      <Ad />
      <br />
      <OurProduct/>
      <br />
      
      <Product
       imgsrc="https://www.drsheths.com/cdn/shop/products/PRA_0110_600x.jpg?v=1665674079"
        sname="Serum"
       
        link="https://www.drsheths.com/"
      />
    

      <Product
       imgsrc="https://www.drsheths.com/cdn/shop/files/29_500x_crop_center.jpg?v=1689414858"
        sname="Cleanser"
       
        link="https://www.drsheths.com/"
      />
      <Product
       imgsrc="https://www.drsheths.com/cdn/shop/files/H_H-Sunscreen_600x.jpg?v=1693494034"
        sname="Sunscreen"
       
        link="https://www.drsheths.com/"
      />
      <Product
       imgsrc="https://www.drsheths.com/cdn/shop/files/CVCOFM_600x.png?v=1689592980"
        sname="Moisturizer"
       
        link="https://www.drsheths.com/"
      />
      <Product
       imgsrc="https://i0.wp.com/makeupandsmiles.com/wp-content/uploads/2020/11/phonto-6-scaled.jpg?fit=2560%2C2048&ssl=1"
        sname="Eye-cream"
       
        link="https://www.drsheths.com/"
      />
      <Product
      imgsrc="https://www.drsheths.com/cdn/shop/products/Ceramide-_-Vitamin-C-Body-Lotion_c8f74f29-02ea-45a0-b621-d06f97648d08_600x.jpg?v=1665755032"
       
        sname="Body-lotion"
        
         link="https://www.drsheths.com/"
      />
      <Product
       imgsrc="https://www.drsheths.com/cdn/shop/products/Passion-Fruit-_-Sulphur-Mask_b3d4e995-cadf-4abb-a083-2d2b67d285b8.jpg?v=1665755312"
        sname="Face-mask"
       
        link="https://www.drsheths.com/"
      />
      <Product
       imgsrc="https://www.distacart.com/cdn/shop/products/178QEZU0ek_1200x.jpg?v=1685008573"
        sname="Body-wash"
       
        link="https://www.drsheths.com/"
      />
      <Product
      imgsrc="https://www.mcaffeine.com/cdn/shop/products/PrimaryImage_2.jpg?v=1664172269"
        sname="Body-mask"
        
        link="https://www.mcaffeine.com/"
      />
      <Product
       imgsrc="https://www.mcaffeine.com/cdn/shop/products/IMG1_76cda0bc-47b6-4263-829d-37d4b4f8ccb4.jpg?v=1680074870"
        sname="Body-oil"
       
        link="https://www.mcaffeine.com/"
      />
      <Product
       imgsrc="https://www.mcaffeine.com/cdn/shop/files/Card1Website_1.jpg?v=1693975736"
        sname="kambucha-moisturizer"
       
        link="https://www.mcaffeine.com/"
      />
      {/* <Product
      imgsrc={Data[11].imgsrc}
        sname={Data[11].sname}
        
        link={Data[11].link}
      />
      <Product
      imgsrc={Data[12].imgsrc}
        sname={Data[12].sname}
        
        link={Data[12].link}
      />
      <Product
        imgsrc={Data[13].imgsrc}
        sname={Data[13].sname}
      
        link={Data[13].link}
      /> */}
      <br />
      {/* <Smart/> */}
      <Footer />
    </>
  );
}
export default App;
