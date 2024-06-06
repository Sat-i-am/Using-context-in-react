import { useContext } from "react"
import MyContext from "../Components/MyContext"
export default function File1() {
    const currentState = useContext(MyContext) //accessing context value
  return (
    <div>
      Hi this is file1
      i am importing the currentState from Context 
      and here is the currentState =  {currentState.name}, {currentState.place}
    </div>
  )
}
