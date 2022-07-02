import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            body: "",
            counter: 0,
        }

        this.inputMaxlength = 40

        this.onSubmitNotesEventHandler = this.onSubmitNotesEventHandler.bind(this)
        this.onInputTitleEventHandler = this.onInputTitleEventHandler.bind(this)
        this.onInputBodyEventHandler = this.onInputBodyEventHandler.bind(this)
    }

    onInputTitleEventHandler(event) {
        console.log(this.state.title);
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
                counter: event.target.value.length,
            }
        })
        if (this.state.counter === this.inputMaxlength - 1) {
            event.target.nextSibling.classList.add("text-error")
        } else {
            event.target.nextSibling.classList.remove("text-error")
        }
    }
    onInputBodyEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        })
    }

    onSubmitNotesEventHandler(event) {
        event.preventDefault()
        this.setState(() => {
            return {
                title: "",
                body: "",
                counter: 0,
            }
        })
        this.props.AddNotes(this.state)
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitNotesEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={ this.onInputTitleEventHandler } required maxLength={this.inputMaxlength}/>
                <span className="text-counter">{this.state.counter}/{this.inputMaxlength}</span>
                <textarea type="text" placeholder="Body" value={this.state.body} onChange={ this.onInputBodyEventHandler } rows="12" required></textarea>
                <button type="submit">Add Notes</button>
            </form>
        )
    }
}

export default NotesInput