import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  postComments  from "../Api";


export default function PostComment() {
    const { article_id } = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        postComments(article_id).then(())
        setComment()
    }, [article_id])
}