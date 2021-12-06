import React from 'react'
import { Card } from 'react-bootstrap';
import AllBeers from '../assets/beers.png'
import Random from '../assets/random-beer.png'
import New from '../assets/new-beer.png'


function Home() {
    return (
        <div>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={AllBeers}/>
     <Card.Body>
     <Card.Title>All Bears</Card.Title>
     <Card.Text>
     Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
     Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     </Card.Text>
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={Random}/>
     <Card.Body>
     <Card.Title>Random Beer</Card.Title>
     <Card.Text>
     Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
     Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     </Card.Text>
     </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={New}/>
     <Card.Body>
     <Card.Title>New Beer</Card.Title>
     <Card.Text>
     Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
     Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     </Card.Text>
     </Card.Body>
     </Card>
            
    </div>
    )
}

export default Home
