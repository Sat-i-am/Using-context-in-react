import ContextProvider from './Components/ContextProvider'
import File1 from './Files/File1'
import './App.css'
import File2 from './Files/File2'

function App() {
//since i have wrapped File1 and File2 in context-provider hence the value of the context will be available in both File1 and File2 and all their children and their children and so on
  return (
    <>
     <ContextProvider> 
      <File1/>
      <File2/>
     </ContextProvider>
    </>
  )
}

export default App
