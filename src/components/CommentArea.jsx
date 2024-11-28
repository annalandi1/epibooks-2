import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
    state = {
        comments: [],
    }

    getComments = () => {
        fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
            {
                headers: {
                    authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWJjMjhhZDEyOTAwMTU4NzZjMWMiLCJpYXQiOjE3MzI4MTA0MDcsImV4cCI6MTczNDAyMDAwN30.bVWEKf1JLoJc-9rz5u2V9khjqh73-KSShDww3QjDobQ"
                },
            }
        )
        .then((response) => {
            if(response.ok) {
              return response.json()
            } else{
                throw new Error ("Errore nel recupero dei file")
            }
        })
        .then((arrayOfComments) => {
            console.log("commenti:", arrayOfComments)
            this.setState({
                comments:arrayOfComments
            })
        }) 
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.getComments()
    }

    render(){
        return (
            <>
            <h5 className="text-danger text-center mb-3">
                Recensioni degli utenti:
            </h5>
            <CommentList comments={this.state.comments}/>
            </>
        )
    }
}

export default CommentArea
