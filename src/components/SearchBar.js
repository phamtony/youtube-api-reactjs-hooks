import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
    };

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;