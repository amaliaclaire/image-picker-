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
    <Grid columns='equal' className="ui card ui center aligned grid">


      <Grid.Row>
        <Grid.Column>
          <ImageUpload/>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  )
}

export default Card;
