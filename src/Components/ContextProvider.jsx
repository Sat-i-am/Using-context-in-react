import MyContext from "./MyContext"
import PropTypes from 'prop-types';

export default function ContextProvider(props) { 
    const currentState = { //this is the state we created and we will we passing as a value to our context
        "name" : "satyam",
        "place": "bengaluru"
    }
  return (
    <MyContext.Provider value= {currentState}>
        {props.children}
    </MyContext.Provider>
  )
}

ContextProvider.propTypes = { //this is required in some places, it just tells the props types
    children: PropTypes.node.isRequired,
  };