import React from 'react';
import {StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';

type TaskListProps = {
  tasks: {
    id: string;
    title: string;
  }[];
};

const TaskList = ({tasks}: TaskListProps): React.JSX.Element => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonTask}
          key={item.id}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TaskList;
