import React, {useState} from "react";

const SearchBar = ({fetchYouTube}) => {
    const [term, setTerm] = useState('');

    const onTermSubmit = (e) => {
        e.preventDefault();
        fetchYouTube(term);
    }

    const inputTerm = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div className="search-bar ui segment">
            <form action="" className="ui form" onSubmit={onTermSubmit}>
                <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={inputTerm}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;





















































// import React, {useState} from "react";
//
// const SearchBar = ({onTermSubmit}) => {
//     const [term, setTerm] = useState('');
//
//     const onFormSubmit = (e) => {
//         e.preventDefault();
//
//         onTermSubmit(term);
//     };
//
//     const onInputChange = (e) => {
//         setTerm(e.target.value);
//     };
//
//     return (
//         <div className="search-bar ui segment">
//             <form action="" className="ui form" onSubmit={onFormSubmit}>
//                 <div className="field">
//                     <label htmlFor="">Video Search</label>
//                     <input
//                         type="text"
//                         value={term}
//                         onChange={onInputChange}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };
//
// export default SearchBar;