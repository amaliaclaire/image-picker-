import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderStuff = (props) =>
   (
     <Segment>
   <Dimmer active>
   <Loader inverted size="massive">Loading</Loader>
   </Dimmer>
   <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
   <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
   <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
   </Segment>
)


export default LoaderStuff;
