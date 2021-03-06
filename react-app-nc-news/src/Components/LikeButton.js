import React, {useState} from 'react'
import { incrementVote } from "../Api";
import {FaRegThumbsUp} from 'react-icons/fa'


const LikeButton = (props) => {
    const [voting, setVoting] = useState(0);
    const [hasVoted, setHasVoted] = useState(false)
    function handleClick() {
        setHasVoted(true)
        setVoting((currentVoting) => {
          return currentVoting + 1;
        });
        incrementVote(props.article_id).catch((err) => {
          setVoting((currentVoting) => {
            return currentVoting - 1;
          });
        });
      }
  return (
    <div>
        <p>Votes {props.votes + voting} <FaRegThumbsUp/> </p>
              <button
              disabled={hasVoted}
                className="vote-button"
                size="large"
                variant="contained"
                onClick={handleClick}
              >
                Like
              </button>
              
    </div>
  )
}

export default LikeButton
