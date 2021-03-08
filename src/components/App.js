import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

import youtube from "../api/Youtube";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchYouTube('baby bus');
    }, []);

    const fetchYouTube = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    const chooseSelectedVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="ui container">
            <SearchBar fetchYouTube={fetchYouTube}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} chooseSelectedVideo={chooseSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

































































// import React, {useState, useEffect} from "react";
// import SearchBar from "./SearchBar";
// import VideoList from "./VideoList";
// import VideoDetail from "./VideoDetail";
// import useVideos from "../hooks/useVideos";
//
// const App = () => {
//     const [selectedVideo, setSelectedVideo] = useState(null);
//     const [videos, search] = useVideos('baby bus');
//
//     useEffect(() => {
//         setSelectedVideo(videos[0]);
//     }, [videos]);
//
//
//     return (
//         <div className="ui container">
//             <SearchBar onTermSubmit={search}/>
//             <div className="ui grid">
//                 <div className="ui row">
//                     <div className="eleven wide column">
//                         <VideoDetail video={selectedVideo}/>
//                     </div>
//                     <div className="five wide column">
//                         <VideoList
//                             videos={videos}
//                             // onSelectedVideo={(selected) => setSelectedVideo(selected)} the same refactored version down below
//                             onSelectedVideo={setSelectedVideo}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;