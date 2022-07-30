import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLikePostMutation, useUnlikePostMutation } from "../../services/miaowbookApiRtk";
import { transformResponse } from "../../utils/utils";

const LikeButton = ({ postId: post_id, liked, onUpdate = null }) => {
    const [isLiked, setIsLiked] = useState(liked)

    const [like] = useLikePostMutation()
    const [unlike] = useUnlikePostMutation()
    const likeHandler = async () => {
        const { isOk } = transformResponse(isLiked ? await unlike({ id: post_id }) : await like({ id: post_id }))
        if (isOk) {
            if (onUpdate) {
                onUpdate({ likes_count: isLiked ? -1 : 1 })
            }
            setIsLiked(!isLiked)
        }
    }
    return (
        <button onClick={likeHandler}>
            <FontAwesomeIcon icon={isLiked ? faHeart : faHeartEmpty} size="lg" color={isLiked ? 'red' : null} />
        </button>
    )
}

export default LikeButton