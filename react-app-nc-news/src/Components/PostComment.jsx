import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  postComment  from "../Api";


export default function PostComment() {
    const { article_id } = useParams();
    const [comment, setComment] = useState({

    });
    useEffect(() => {
        postComment(article_id).then(() => {
            setComment()
        })
    }, [article_id])
}