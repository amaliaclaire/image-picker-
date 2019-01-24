import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Icon, Grid, Segment } from 'semantic-ui-react'
import HeaderPlugIcon from './HeaderPlugIcon'
import ImageUpload from './ImageUpload';
import Card from './Card'
import LoaderStuff from './Loader'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return(
    <div className="container">
      <div className="header">
        <div className="body">
          <HeaderPlugIcon />
          <Card content=""/>
        </div>
        <footer className="site-footer">
        </footer>
      </div>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
