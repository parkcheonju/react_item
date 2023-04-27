import React from 'react';
import "./Card.css";
const Card = (props) =>{
  //card 띄어쓰기 후, props.className으로 class 추가하는 로직
  const classes = `card ${props.className}`;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}
export default Card;