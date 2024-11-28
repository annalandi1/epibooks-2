import { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? '3px solid red' : '1px solid black' }}
      >
        <Card.Img variant="top" src={this.props.book.img}  />
        <Card.Body>
          <Card.Title style={{ color: 'black' , height:" 70px"}}>
            {this.props.book.title}
          </Card.Title>
          {this.state.selected && <CommentArea id={this.props.book.asin}/>}
          {this.state.selected && (
            <Button className="mt-3" variant="warning">
              Lascia una recensione qui:
            </Button>
          )}
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
