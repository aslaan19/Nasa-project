
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import { useState } from "react"

function App() {
  const [showmodal,setShowmodal] =useState(false)

  function handletoggle(){
    setShowmodal(!showmodal)
  }
  return (
    <>
      <Main/>
      {showmodal && (
        <Sidebar handletoggle={handletoggle} />
      )}      
      <Footer handletoggle={handletoggle}/>
    </>
  )
}

export default App
