import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


const Carousal = () => {

  const settings = {
   
    dots: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    marginBottom:'2cm',
    height:'2cm',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <Arrow />,
          prevArrow: <Arrow />
        }
      }
    ]
    
  };

  const text={
    textAlign:'center',
  }

  return (
    
    <div>
      <span><h3 {...text} >Top Deals</h3><button className='view-more'>View more</button></span>
      
      <Slider {...settings}>
        <div className='card'>
          <img src="https://i.pinimg.com/564x/7c/ec/0f/7cec0fca381a20372b2eaee45e238037.jpg" alt="skincare" />
          <p>Skincare</p>
        </div>
        <div className='card'>
          <img src="https://navbharattimes.indiatimes.com/thumb/100695729/american-tourister-luggage-bags-100695729.jpg?imgsize=34586&width=1200&height=900&resizemode=75" alt="luggage_bags" />
          <p>Travel</p>
        </div>
        <div className='card'>
          <img src="https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202306/26/jK6sScg42MpQa4Yc.png" alt="mobile-phones" />
          <p>Mobiles & Laptops</p>
        </div>
        <div className='card'>
          <img src="https://www.freshcleanlaundromat.com/wp-content/uploads/2023/07/types-of-detergents-for-washing-machine.jpg" alt="detegents" />
          <p>Cleaning</p>
        </div>
       <div className='card'>
        <img sc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrEk_RLgbBTMJ-qIenh6PG8BOflPRvciJ0A&usqp=CAU"/>
        <p>Fruits and Vegetables</p>
        </div>
       <div className='card'>
        <img src="https://i.pinimg.com/originals/58/fb/c2/58fbc2b6ac5a1e7c9ef8f5e11964e90e.jpg" alt="fashion" />
        <p>Fahion</p>
       </div>
       <div className='card'>
        <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-kitchen-layouts.jpg" alt="kitchen" />
        <p>Kitchen</p>
        </div>
        <div className='card'><img src="https://staranddaisy.in/wp-content/uploads/2023/09/Baby-Shampoo-gallery-18923-main.jpg" alt="shampoo" />
        <p>Haircare</p></div>
        <div className='card'><img src="https://hips.hearstapps.com/hmg-prod/images/cinnamon-roll-power-bites-secondary-646bd64de15ab.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" alt="snacks" />
        <p>Snacks</p>
        </div>
    
     <div className='card'>
      <img src="https://www.melvin-hamilton.com/cdn/shop/articles/AW22_-_clive_1_header.jpg?v=1674664624" alt="loafers" />
      <p>Footware</p>
     </div>
    <div className='card'><img src='https://5.imimg.com/data5/SELLER/Default/2021/11/QQ/SI/XU/60672026/5.jpg' alt="Books" />
    <p>Books</p></div>
    
   

      </Slider>
    </div>
  );
};

export default Carousal;