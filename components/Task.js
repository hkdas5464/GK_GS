import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from '@react-native-community/checkbox';

const Task = ({ task, onToggle }) => {
  return (
    <View style={styles.taskContainer}>
      <Checkbox
        value={task.completed}
        onValueChange={() => onToggle(task.id)}
      />
      <Text style={styles.taskText}>{task.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  taskText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Task;
