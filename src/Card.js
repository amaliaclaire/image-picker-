import React from 'react';
import ImageUpload from './ImageUpload';
import { Grid, Segment } from 'semantic-ui-react'


// const divStyle = {
//   margin: '50px',
//   padding: '50px',
//   color: 'pink'
// };

const Card = (props) => {
  return (
    <Grid className="ui card card-border">
        <ImageUpload/>

    </Grid>
  )
}

export default Card;
