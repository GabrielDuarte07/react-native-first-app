import React, {useContext} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ITask, TasksContext} from '../../contexts/TasksContext';

const TaskList = (): React.JSX.Element => {
  const {tasks, removeTask} = useContext(TasksContext);

  const handleDeleteTask = (id: string): void => {
    const tasksTemp = [...tasks];
    const titleTask = tasksTemp.find(task => task.id === id)?.title || '';
    Alert.alert('Tem certeza?', `Deseja mesmo excluir ${titleTask} ?`, [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => removeTask(id),
      },
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonTask}
          onPress={() => handleDeleteTask(item.id)}
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
