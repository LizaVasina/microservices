import React from "react";

const DEFAULT_TEXTS = {
    PENDING: 'This comment is awaiting moderation',
    REJECTED: 'This comment has been rejected'
}

export const CommentList = ({ comments }) => {
    const renderedComments = comments.map(({ id, content, status }) => {
        let text;

        if (status === 'approved') {
            text = content;
        }

        if (status === 'pending') {
            text = DEFAULT_TEXTS.PENDING
        }
        
        if (status === 'rejected') {
            text = DEFAULT_TEXTS.REJECTED
        }

        return <li key={id}>{text}</li>
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}