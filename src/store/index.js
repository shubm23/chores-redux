import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './tasksSlice';
import { humansReducer } from './humansSlice';
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    humans: humansReducer
  }
});
