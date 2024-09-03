import React from 'react'

export default function Footer(props) {
  const {handletoggle,showmodal}=props
    return (
    <footer>
        <div>
      <h2>Here we have a picture of the moon</h2>
      <h1>NASA TANTA</h1>
      </div>
      <button onClick={handletoggle}>
      <i className="fa-solid fa-circle-info"></i>
      </button>
 
    </footer>
  )
}
