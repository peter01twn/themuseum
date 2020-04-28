import React from 'react'
import { Card as BsCard, Button } from 'react-bootstrap'

const Card = ({ img, title, text, onClick }) => {
  return (
    <BsCard as="a" href="#">
      <div className="card-img">
        <BsCard.Img variant="top" src={img} className="img-fluid" />
      </div>
      <BsCard.Body>
        <BsCard.Title>
          <Button
            variant="link"
            onClick={onClick}
            className="stretched-link"
          >
            {title}
          </Button>
        </BsCard.Title>
        <BsCard.Text>{text}</BsCard.Text>
      </BsCard.Body>
    </BsCard>
  )
}

export default Card
