import React from 'react';
import ImageUpload from './ImageUpload';
import { Grid, Segment } from 'semantic-ui-react'




const Card = (props) => {
  return (
    <Grid columns='equal' centered>
        <Grid.Column width={12}>
          <ImageUpload/>
        </Grid.Column>
    </Grid>
  )
}

export default Card;
