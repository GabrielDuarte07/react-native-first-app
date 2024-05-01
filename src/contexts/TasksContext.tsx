import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, ReactNode, useEffect, useState} from 'react';

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
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

const keyStorage = '@myTasks2:TaskLit';

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

  const addTask = async (task: ITask) => {
    const newData = [...data, task];
    setData(newData);
    await AsyncStorage.setItem(keyStorage, JSON.stringify(newData));
  };

  return (
    <TasksContext.Provider value={{tasks: data, addTask}}>
      {children}
    </TasksContext.Provider>
  );
};
