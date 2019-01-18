import React from 'react';
import ReactDOM from 'react-dom';
import ImageUpload from './ImageUpload';
import './index.css'

const App = () => {
  return(
    <div>
      <div className="title">Deep Cell Image Rendering Prototype</div>

      <ImageUpload />

    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
