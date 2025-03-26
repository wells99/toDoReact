import ToDoReact from "./components/ToDoReact"
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {
 

  return (
    <>
     <ToDoReact />
     {SpeedInsights}
    </>
  )
}

export default App
