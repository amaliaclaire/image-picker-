import React from 'react';
import ReactDOM from 'react-dom';
import ImageUpload from './ImageUpload';

const App = () => {
  return(
    <div>
      <ImageUpload />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
