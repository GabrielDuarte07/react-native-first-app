import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import TaskList from '../../components/TaskList';

type Task = {
  id: string;
  title: string;
};

const Home = (): React.JSX.Element => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask() {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'empty task',
    };

    setTasks([...tasks, data]);
    setNewTask('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>

        <TextInput
          placeholder="Digite a tarefa"
          placeholderTextColor="#555"
          style={styles.textInput}
          value={newTask}
          onChangeText={text => setNewTask(text)}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleAddTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTasks}>Minhas tarefas</Text>

        <TaskList tasks={tasks} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    marginTop: 30,
    borderRadius: 7,
    padding: Platform.OS === 'ios' ? 15 : 12,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
