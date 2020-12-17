import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";

class App extends React.Component {
    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render () {
        return (
            <div>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;