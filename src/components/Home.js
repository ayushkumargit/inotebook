import React from "react"
import AddNote from "./AddNote"
import Notes from "./Notes"
function Home() {

  return (
    <>
    <div className="mx-3">
      <h1>your notes</h1>
      <Notes/>
    </div>
    </>
  )
}

export default Home