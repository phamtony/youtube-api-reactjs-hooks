import axios from "axios";

const KEY = 'AIzaSyAs48Caon5nk2WS5e0UMcyI_KvpLcpZOFQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});














































// import axios from "axios";
//
// const KEY = 'AIzaSyAs48Caon5nk2WS5e0UMcyI_KvpLcpZOFQ';
//
// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params: {
//         part: 'snippet',
//         type: 'video',
//         maxResults: 5,
//         key: KEY
//     }
// });