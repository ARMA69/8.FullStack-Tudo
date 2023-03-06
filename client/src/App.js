import React,{useReducer} from "react";

function App() {

  const reducer = (state, action ) => {
    return state
  }

  const [state, dispatch] = useReducer({
    user: null,
    tasks: []
  })

  return (
    <div>App</div>
  );
}

export default App;
