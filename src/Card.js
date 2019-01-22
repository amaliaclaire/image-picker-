import React from 'react';
import ImageUpload from './ImageUpload';

const Card = (props) => {
  return (
    <div className="ui card card-border">
        <ImageUpload />
        <div className="description">
         <i className="upload icon"></i>
      </div>
    </div>
  )
}

export default Card;
