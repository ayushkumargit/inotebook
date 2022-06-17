import React from "react"
import Notes from "./Notes"
function Home(props) {
  const {showAlert} = props
  return (
    <>
    <div className="mx-3">
      <h1>your notes</h1>
      <Notes showAlert={showAlert}/>
    </div>
    </>
  )
}

export default Home