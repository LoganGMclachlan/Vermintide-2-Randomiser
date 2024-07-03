import Loadout from "./components/Loadout"
import Menu from "./components/Menu"
import { useState } from "react"

function App() {
  const [loadout, setLoadout] = useState(null)

  return (
    <div style={{"display":"flex"}}>
      <Menu setLoadout={setLoadout}/>
      <Loadout loadout={loadout}/>
    </div>
  )
}

export default App
