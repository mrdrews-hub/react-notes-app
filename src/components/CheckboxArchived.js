import React from "react"

class CheckboxArchived extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            archived: false,
        }
        this.onCheckBoxClicked = this.onCheckBoxClicked.bind(this)
    }

    onCheckBoxClicked(event) {
        this.props.filterArchived(event.target.checked)
    }

    render() {
        return (
            <div className="filter-archived">
                <input type="checkbox" id="archived" value={this.state.archived} onChange={this.onCheckBoxClicked}/>
                <label htmlFor="archived">Show Archived</label>
            </div>
        )
    }
}

export default CheckboxArchived