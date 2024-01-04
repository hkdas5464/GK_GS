import React from 'react';
import { View, FlatList } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <Task task={item} onToggle={onToggleTask} />
        )}
      />
    </View>
  );
};

export default TaskList;
