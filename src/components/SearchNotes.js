import React from "react"

class SearchNotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            keyword: "",
        }

        this.onInputSearchEventHandler = this.onInputSearchEventHandler.bind(this)
    }

    onInputSearchEventHandler(event) {
        this.setState((prevState) => {
            return {
                keyword: event.target.value,
            }
        })
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
                <input type="text" className="search-notes" placeholder='Search' onChange={this.onInputSearchEventHandler} />
        )
    }
}

export default SearchNotes