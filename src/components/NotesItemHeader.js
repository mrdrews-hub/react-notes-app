import React from "react";
import { showFormattedDate } from '../utils'

const NotesItemHeader = ({id, date, title, onDelete, onArchived, archived }) => {

    const parseColorArchived = () => {
        return archived ? '#F7EC09' : '#aaa'
    }

    return (
        <div className="note-item__header">
            <div className="note-item__title">
                <h3 className="title">{ title }</h3>
                <p className="note-item__date">{ showFormattedDate(date) }</p>
            </div>
            <div className="note-item__actions">
                <button className="btn-archive" onClick={() => onArchived(id)}>
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

                <button className="btn-delete" onClick={() => onDelete(id)}>
                    <svg
                        fill="#F90716"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="30px"
                        height="30px">
                            <title>Delete</title>
                            <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NotesItemHeader