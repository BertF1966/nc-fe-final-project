import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../Api";
import ScrollToTop from "./ScrollToTop";

export default function ArticleComments() {
  const { article_id } = useParams();
  const [selectComment, setselectComment] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(article_id).then((data) => {
            setselectComment(data)
            // console.log(data)
        })
    }, [article_id]);

    return (
        <div  className="comments" key="article_id">
            {selectComment.map((comment) => {
                return (
                <p>{comment.body}
                Author: {comment.author}
                Votes: {comment.votes}</p>
                )
            })}
            <ScrollToTop />
        </div>
    )

}