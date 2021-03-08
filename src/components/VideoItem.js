import React from "react";
import "./VideoItem.css";

const VideoItem = ({video, chooseSelectedVideo}) => {
    return (
      <div onClick={() => {chooseSelectedVideo(video)}} className="video-item item">
          <img
              alt={video.snippet.title}
              className="ui image"
              src={video.snippet.thumbnails.medium.url}
          />
          <div className="content">
              <div className="header">
                  {video.snippet.title}
              </div>
          </div>
      </div>
    );
}

export default VideoItem;




























// import React from "react";
// import "./VideoItem.css";
//
// const VideoItem = ({video, onSelectedVideo}) => {
//   return (
//       <div onClick={() => onSelectedVideo(video)} className="video-item item">
//           <img
//               alt={video.snippet.title}
//               className="ui image"
//               src={video.snippet.thumbnails.medium.url}
//           />
//           <div className="content">
//               <div className="header">
//                   {video.snippet.title}
//               </div>
//           </div>
//       </div>
//   );
// };
//
// export default VideoItem;