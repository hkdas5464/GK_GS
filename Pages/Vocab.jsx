// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Checkbox, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import axios from 'axios';
import ExpandableList from './Screens/ExpandCollaps';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { name: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8, }}>
      <Checkbox.Android
        status={item.completed ? 'checked' : 'unchecked'}
        onPress={() => toggleTodo(index)}
      />
      <Text style={{ marginLeft: 8,fontWeight:"bold", textDecorationLine: item.completed ? 'line-through' : 'none' }}>
        {item.name}
      </Text>
    </View>
  );

  useEffect(()=>{
    axios.get("https://react-native-319dc-default-rtdb.firebaseio.com/vocab.json")
    .then((res)=>setTodos(res.data))
    .catch(err=>{
    setError(err.message);
    });
},[])
  return (
    <ScrollView>
      {todos.map((e)=>{
        return(
          <ExpandableList id={e.id} name={e.name} meaning={e.meaning}/>
        )
      })}
    </ScrollView>
  );
};

export default App;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
    },
  });