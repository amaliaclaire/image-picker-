import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const divStyle = {
  margin: '40px',
  border: '5px dashed black',
  padding: '10px'
};



const HeaderExamplePlugIcon = () => (
  <Header style={divStyle} as='h2'>
    <Icon name='flask' />
    <Header.Content>Deep Cell Prototype</Header.Content>
  </Header>
)

export default HeaderExamplePlugIcon
