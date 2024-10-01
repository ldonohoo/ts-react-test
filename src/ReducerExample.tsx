import { useReducer } from "react";

type Actions = 
    | { type: "add"; text: string }
    | { type: "remove"; 
        idx: number;
    }

interface Todo {
    text: string;
    complete: boolean;
}

type State = Todo[];

// in todo reducer, store an array of reducers, and what actions to accept
const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }




}

export const ReducerExample: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
            {JSON.stringify(todos)}
            <button onClick={() => {
                dispatch({ type: "add", text: "..." });
                dispatch({type: "remove", idx: 12})
            }}></button>
        </div>
    )
}
    



