const ADD_TASK = "task/add"; //state/event
const DELETE_TASK = "task/delete";

const initialState = {
    task: [], 
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
                task: [...state.task, updatedTask], //don't change old state "...state.task"
            };
    
        default:
            return state; //alway return new state here
    }
};