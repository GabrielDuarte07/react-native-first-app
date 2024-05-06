/* eslint-disable testing-library/no-unnecessary-act */
import 'react-native';
import React from 'react';
import Home from '../../src/pages/Home';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {it, expect, describe} from '@jest/globals';
import {renderHook, act} from '@testing-library/react-hooks';
import {TasksProvider, useTaskList} from '../../src/contexts/TasksContext';

describe('home page', () => {
  it('renders Home correctly', () => {
    render(<Home />);

    const txtTask = screen.getByTestId('txtTask');

    expect(txtTask).toBeDefined();
    expect(txtTask.props.testID).toBeTruthy();
  });

  it('click add button', async () => {
    render(<Home />, {wrapper: TasksProvider});
    const buttonAdd = screen.getByTestId('addButton');
    const txtTask = screen.getByTestId('txtTask');

    const {result} = renderHook(() => useTaskList(), {wrapper: TasksProvider});

    const data = {id: 'Task01', title: 'title task 01'};

    act(() => fireEvent.changeText(txtTask, data.title));

    act(() => fireEvent.press(buttonAdd));

    expect(result.current.tasks).toBeTruthy();
  });
});
