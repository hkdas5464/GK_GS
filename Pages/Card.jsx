import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import {Checkbox} from 'react-native-paper';


const MyCard = ({text,id}) => {
    const [checked, setChecked] = React.useState(false);
  return (
    <Card>
    <Card.Actions key={id}>
      <Text>{text}</Text>
      <Checkbox
      key={id}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </Card.Actions>
  </Card>
  )
}

export default MyCard