import ToDoReact from "./components/ToDoReact"
import { Analytics } from "@vercel/analytics/react"
function App() {
 

  return (
    <>
     <ToDoReact />
     <Analytics />
    </>
  )
}

export default App
