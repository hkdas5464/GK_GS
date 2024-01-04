import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Divider, List } from 'react-native-paper';
import {Checkbox} from 'react-native-paper'

const ExpandableList = ({id,name,meaning}) => {
  const [expanded, setExpanded] = useState(false);
  const [check,setChecked] = useState(false);
  const [textdecoration,setTextDecoration]=useState('none');
  const [color,setColor]=useState('red'); 

  

  const updateCheckbox=()=>{
  
      if(check===true){
        setChecked(false)
        setColor('red')
        setTextDecoration('none')
      }else{
        setChecked(true)
        setColor('green')
        setTextDecoration('line-through')
      }
  }

  // const handlePress = () => {
  //   setExpanded(!expanded);
  // };
  const handlePress = () => setExpanded(!expanded);

  return (
    <TouchableWithoutFeedback>
    <View style={{display:"flex"  }}>
      
      <List.Item key={name}
      style={{backgroundColor:"#e8e8e8",paddingBottom:5}}
        title={name}
        titleNumberOfLines={0}
        left={(props) => <List.Icon {...props} icon="ab-testing" />}
        expanded={expanded}
        titleStyle={{fontWeight: 'bold',color:`${color}` ,textDecorationLine:`${textdecoration}`}}
        right={() => (
          <Checkbox
            status={check ? 'checked' : 'unchecked'}
            onPress={updateCheckbox}
            color='green'
          />
          
          
          
        )}
        onPress={handlePress}
      />
      <Divider/>
        {expanded && (
        // Content of the accordion
        <List.Item title={meaning} />
      )}
       
    
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ExpandableList;
