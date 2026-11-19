import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [], 
    initialState: false,
};

//? old style redux reducer to create action Type and action creater

// const tastReducer = (state = initialState, action)=> {
//     switch (action.type) {
//         case ADD_TASK:
//             return{
//                 ...state,
//                 task: [...state.task, action.payload], //don't change old state "...state.task"
//             };
        
//         case DELETE_TASK:
//             const updatedTask = state.task.filter((currTask, index)=> {
//                 return index !== action.payload; // if need extra info use action.payload
//             });
//             return{
//                 ...state,
//                 task: updatedTask, //don't change old state "...state.task"
//             };
//         case FETCH_TASKS:
//             return{
//                 ...state,
//                 task: [...state.task, ...action.payload],
//             };
    
//         default:
//             return state; //alway return new state here
//     }
// };

//? new style (createSlice()) function using RTK redux toolkit
export const taskReducer = createSlice({
    name: "task",
    initialState: initialState,
    reducers:{
        addTask(state, action) {
            state.task.push(action.payload);
            //state.task = [...state.task, action.payload], do like this also
        },// action creater
        deleteTask(state, action) {
            state.task = state.task.filter((currTask, index)=> index !== action.payload);
        },// action creater
        fetchTasks(state, action) {
            state.task.push(...action.payload);
        }
    },
});
console.log(taskReducer);

export const { addTask, deleteTask, fetchTasks } = taskReducer.actions;// action creater