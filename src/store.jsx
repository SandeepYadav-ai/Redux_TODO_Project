//import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, createSlice } from "@reduxjs/toolkit";
//import { applyMiddleware, createStore } from "redux";
//import { thunk } from "redux-thunk";

//const ADD_TASK = "task/add"; //state/event
//const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch"

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
const taskReducer = createSlice({
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


//! (old style) step 2: create redux store using reducer 
// export const store = createStore(tastReducer, composeWithDevTools(applyMiddleware(thunk)));
// console.log(store);

//! new style using redux toolkit
export const store = configureStore({
    reducer: {
        taskReducer: taskReducer.reducer,
    },
});

//console.log("initial :", store.getState());

//step 5:create action creators
// export const addTask = (data)=> {
//     return {type: ADD_TASK, payload: data}
// };

// export const deleteTask = (id)=> {
//     return {type: DELETE_TASK, payload: id}
// }

//step 4: dispatch an action to add a task
// store.dispatch({type: ADD_TASK, payload: "mango"})
console.log(store.dispatch(addTask("mango")));
console.log(store.dispatch(addTask("apple")));
console.log("updated state :", store.getState());//initiale state

//store.dispatch({type: ADD_TASK, payload: "orange"})
console.log(store.getState());

// store.dispatch({type: DELETE_TASK, payload: 1});
//store.dispatch(deleteTask(1));
console.log(store.getState());

export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json();
            console.log(res);
            
            //dispatch({type: FETCH_TASKS, payload: state.task.map((curTask)=> curTask.title),});
             const taskTitle = task.map((currTask)=> currTask.title);
            dispatch(fetchTasks(taskTitle));
        } catch (error) {
            console.log(error);
            
        }
    };
};
