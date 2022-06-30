import React from 'react'

class SearchNotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: ''
        }

        this.onInputSearchEventHandler = this.onInputSearchEventHandler.bind(this)
    }

    onInputSearchEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                keyword: event.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" className="search-notes" placeholder='Search' value={this.state.keyword} onChange={this.onInputSearchEventHandler} />
            </React.Fragment>
        )
    }
}

export default SearchNotes