import { createStore } from "redux";

const ADD_TASK = "task/add"; //state/event
const DELETE_TASK = "task/delete";

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
    
        default:
            return state; //alway return new state here
    }
};

export const store = createStore(tastReducer);
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
