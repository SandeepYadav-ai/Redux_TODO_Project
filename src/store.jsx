import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const ADD_TASK = "task/add"; //state/event
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch"

const initialState = {
    task: [], 
    initialState: false,
};

const tastReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state,
                task: [...state.task, action.payload], //don't change old state "...state.task"
            };
        
        case DELETE_TASK:
            const updatedTask = state.task.filter((currTask, index)=> {
                return index !== action.payload; // if need extra info use action.payload
            });
            return{
                ...state,
                task: updatedTask, //don't change old state "...state.task"
            };
        case FETCH_TASKS:
            return{
                ...state,
                task: [...state.task, ...action.payload],
            };
    
        default:
            return state; //alway return new state here
    }
};

export const store = createStore(tastReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store);

//console.log("initial :", store.getState());

//step 5:create action creators
export const addTask = (data)=> {
    return {type: ADD_TASK, payload: data}
};

export const deleteTask = (id)=> {
    return {type: DELETE_TASK, payload: id}
}

//step 4: dispatch an action to add a task
// store.dispatch({type: ADD_TASK, payload: "mango"})
store.dispatch(addTask("mango"))
console.log("updated state :", store.getState());

//store.dispatch({type: ADD_TASK, payload: "orange"})
console.log(store.getState());

// store.dispatch({type: DELETE_TASK, payload: 1});
store.dispatch(deleteTask(1));
console.log(store.getState());

export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json();
            console.log(res);
            
            dispatch({type: FETCH_TASKS, payload: task.map((curTask)=> curTask.title),});
        } catch (error) {
            console.log(error);
            
        }
    };
};
