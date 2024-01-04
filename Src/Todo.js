// src/Todo.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox, Button, TextInput } from 'react-native-paper';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="New Todo"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button icon="camera">
        ok
      </Button>
      <Button mode="contained" onPress={addTodo} style={{ marginTop: 10 }}>
        Add Todoo
      </Button>
      {todos.map((todo) => (
        <View key={todo.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Checkbox
            status={todo.completed ? 'checked' : 'unchecked'}
            onPress={() => toggleTodo(todo.id)}
          />
          <Text style={{ marginLeft: 8, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Todo;
