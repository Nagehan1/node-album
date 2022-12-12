import React from 'react'
import {Button, Card} from "react-bootstrap";

function CountryInfo(props) {


  return (
    <div>
 <Card className="card">
                <Card.Img variant="top" src={props.data.flag} />
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <ul className="card__list">
          
          <li>
            <span>Population: </span>
            {props.data.population}
          </li>
          <li>
            <span>Region: </span>
            {props.data.region}
          </li>
          <li>
            <span>Capital: </span>
            {props.data.capital}
          </li>
        </ul>
                   
                    <Button variant="primary" onClick={props.handleShow}>Go somewhere</Button>
                    
                </Card.Body>
            </Card>
    </div>
  )
}

export default CountryInfo