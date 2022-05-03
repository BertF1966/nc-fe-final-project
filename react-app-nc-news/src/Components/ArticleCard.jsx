import React from "react";

const ArticleCard = (props) => {

    return ( 
        <div key={props.article_id}>
              <h2>{props.title}</h2>
              <p>{props.author}</p>
              <p>{props.topic}</p>
              <p>Comments: {props.comment_count}</p>
              <p>Votes: {props.votes}</p>
      </div>
     );
}
 
export default ArticleCard;