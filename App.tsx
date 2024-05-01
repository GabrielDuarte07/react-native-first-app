import React from 'react';
import Home from './src/pages/Home';
import {TasksProvider} from './src/contexts/TasksContext';

function App(): React.JSX.Element {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}

export default App;
