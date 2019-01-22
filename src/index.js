import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Icon } from 'semantic-ui-react'
import HeaderPlugIcon from './HeaderPlugIcon'
import ImageUpload from './ImageUpload';
import Card from './Card'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return(
    <div>
      <HeaderPlugIcon /> 
      <Card content=""/>

    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
