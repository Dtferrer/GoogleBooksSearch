import React from "react";
import Button from "../Button";
import axios from "axios";

class AddBookBtn extends React.Component{
 
    postToDB = (book) => {
        var dbBook = {
          authors: book.authors,
          description: book.description,
          thumbnail: book.thumbnail,
          link: book.link,
          title: book.title
        }
    
        axios.post("/api/books", dbBook)
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </Button>
        </div>
        );
    }
  }

  export default AddBookBtn;