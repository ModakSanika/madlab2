import React from "react";

function Product(props) {
  // console.log(props);
  return (
    <>
     <div className="card" >
    <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
    <div className="card-body">
      {props.sname}
    </div>
    <div className='links'>
    <a href={props.link}></a>
    </div>
  </div>
    </>
   
  );
}
export default Product;
