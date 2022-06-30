import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
        }

        this.onSubmitNotesEventHandler = this.onSubmitNotesEventHandler.bind(this)
        this.onInputTitleEventHandler = this.onInputTitleEventHandler.bind(this)
        this.onInputBodyEventHandler = this.onInputBodyEventHandler.bind(this)
    }

    onInputTitleEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }
    onInputBodyEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value
            }
        })
    }

    onSubmitNotesEventHandler(event) {
        event.preventDefault()
        this.setState(() => {
            return {
                title: '',
                body: ''
            }
        })
        this.props.AddNotes(this.state)
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitNotesEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={ this.onInputTitleEventHandler } required/>
                <textarea type="text" placeholder="Body" value={this.state.body} onChange={ this.onInputBodyEventHandler } rows="12" required></textarea>
                <button type="submit">Add Notes</button>
            </form>
        )
    }
}

export default NotesInput