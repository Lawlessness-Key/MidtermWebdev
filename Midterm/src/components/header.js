import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const header = () => {

    const home = "Home"
    const about = "About"

    const styling = {
        color: "white",
        backgroundColor: "gray",
        textAlign: "center",
        padding: "10px",
        textDecoration: "none",
        border: "1px solid white",
        fontSize: "25px",
        fontWeight: "bold",
 
    }
  return (
    <header>
        <div>
            <a href = "#" style={styling}>{home}</a>
            <a href = "#" style={styling}>{about}</a>
            
        </div>
    </header>
  )
}

export default header