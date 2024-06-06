import { useContext } from "react"
import MyContext from "../Components/MyContext"
import File3 from "./File3"


export default function File2() {
    const currentState = useContext(MyContext) //accesssing context-value
  return (
    <div>
      Hi this is file2
      i am importing the currentState in file2 from Context 
      and here is the currentState =  {currentState.name}, {currentState.place}
      <File3/>
    </div>
  )
}

