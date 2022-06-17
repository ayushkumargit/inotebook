import React from 'react'

function About() {
  return (
    <>
      <div >

        <div style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1499289944739-7707f1ae6fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: 'cover',
          height: "100vh",
          width: "100%",
          position: 'relative',
          top: "-50px"
        }}>
        <h1 className='' style={{ position:"absolute", textAlign:"center"  , top: "10%", left: "30%" }}>Welcome to iNoteBook</h1>
        <h4 className='' style={{ position:"absolute", textAlign:"center"  , top: "20%", left: "32%" }}>Safe and secure notes on Cloud</h4>
        </div>
      </div>

    </>
  )
}

export default About