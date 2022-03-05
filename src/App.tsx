import { useState } from "react"
import { Tweet } from "./components/Tweet"


function App() {
  const [like, setLike] = useState(0)

  return (
    <div style={{
      width: "100%", 
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div style={{width: "100%", maxWidth: "100px"}}>
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: "100%", 
        }}>
          <Tweet text="Like" />{like}
        </div>
      
        <button type="button"
          style={{cursor: 'pointer', width: "100%"}} 
          onClick={() => setLike(like + 1) 
        }>
          Like
        </button>
      </div>
    </div>
  )
}

export default App
