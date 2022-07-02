import React from "react"

const ArchiveButton = ({ onArchived, isArchived, NoteId }) => {
    const parseColorArchived = () => {
        return isArchived ? '#F7EC09' : '#aaa'
    }
    return (
        <button className="btn-archive" onClick={() => onArchived(NoteId)}>
            <svg
                fill={parseColorArchived()}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px">
                    <title>Archive</title>
                    <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"/>
            </svg>
        </button>
    )
}

export default ArchiveButton