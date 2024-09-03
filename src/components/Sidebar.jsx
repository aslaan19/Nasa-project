import React from 'react'

export default function Sidebar(props) {
    const {handletoggle,showmodal} = props 
  return (
    <div className='sidebar' >
      <div className="bgOverlay"> </div>
      <div className="sidebarContents">
      <h2>the moon</h2> 
      <div>
      <p>Discription</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis officia consequuntur eius illo alias aut error, sunt fugit iusto nihil ipsa quos rerum quam? Sequi non ipsa voluptatibus sed accusantium.</p>
      </div>
      
      <button onClick={handletoggle}>
        <i class="fa-solid fa-right-long"></i>
      </button>
      </div> 
      </div>
  )
}
