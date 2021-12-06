import React from 'react'

function Navbar() {
    return (
    <div>
    <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/home">Home</Nav.Link>
    </Nav>
        
    </div>
    )
}

export default Navbar
