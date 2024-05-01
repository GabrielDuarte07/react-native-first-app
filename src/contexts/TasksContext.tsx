import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type IProps = {
  children: ReactNode;
};

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id: string): void;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

const keyStorage = '@myTasks2:TaskList';

export const TasksProvider = ({children}: IProps): React.JSX.Element => {
  const [data, setData] = useState<ITask[]>([]);

  useEffect(() => {
    async function getTasksStorage() {
      const taskList = await AsyncStorage.getItem(keyStorage);
      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }
    getTasksStorage();
  }, []);

  const addTask = async (task: ITask): Promise<void> => {
    const newData = [...data, task];
    setData(newData);
    await AsyncStorage.setItem(keyStorage, JSON.stringify(newData));
  };

  const removeTask = async (id: string): Promise<void> => {
    const dataTemp = [...data];
    const newData = dataTemp.filter(task => task.id !== id);
    setData(newData);
    await AsyncStorage.setItem(keyStorage, JSON.stringify(newData));
  };

  return (
    <TasksContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskList = (): ITasksContext => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('O TaskContext deve estar setado');
  }
  return context;
};
