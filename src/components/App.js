import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // setSelectedVideo(response.data.items[0]);

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            // onSelectedVideo={(selected) => setSelectedVideo(selected)} the same refactored version down below
                            onSelectedVideo={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;