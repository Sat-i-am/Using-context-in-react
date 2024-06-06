import { useContext } from "react"
import MyContext from "../Components/MyContext"



export default function File3() {
    const currentState = useContext(MyContext)  //accessing context-value
  return (
    <div>
      Hi this is file3
      although file3 wasn not directly wrapped in context provider in app.jsx, but it can access the context-value,because it is a children of file2 and here is the currentState =  {currentState.name}, {currentState.place}
    </div>
  )
}
