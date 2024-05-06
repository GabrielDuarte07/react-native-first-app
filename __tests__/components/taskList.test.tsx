import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {it, expect, describe} from '@jest/globals';
import {renderHook, act} from '@testing-library/react-hooks';
import {TasksProvider, useTaskList} from '../../src/contexts/TasksContext';
import TaskList from '../../src/components/TaskList';

describe('tasklist component', () => {
  it('use hook tasklist', async () => {
    const {result} = renderHook(() => useTaskList(), {wrapper: TasksProvider});

    const data = {id: 'Task01', title: 'title task 01'};

    act(() => result.current.addTask(data));

    expect(result.current.tasks).toBeTruthy();
  });

  it('remove item tasklist', () => {
    render(<TaskList />, {wrapper: TasksProvider});

    const {result} = renderHook(() => useTaskList(), {wrapper: TasksProvider});

    const data = {id: 'Task01', title: 'title task01'};

    act(() => result.current.addTask(data));

    expect(result.current.tasks[0].title).toEqual('title task01');

    act(() => result.current.removeTask('Task01'));

    expect(result.current.tasks.length).toEqual(0);
  });
});
