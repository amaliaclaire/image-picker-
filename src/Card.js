import React from 'react';
import ImageUpload from './ImageUpload';

const Card = (props) => {
  return (
    <div className="ui card card-border">
      <div className="content"> {props.content}
        <div className="header">Photo Comparsion</div>
        <ImageUpload />
        <div className="description">
         <i className="upload icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Card;
