import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
    render(){
        return this.props.comments.map ((comment, i) => {
            return <SingleComment key={i} singleFeed={comment.comment}/>
        })
    }
}

export default CommentList