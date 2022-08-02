import React from "react";

function SearchBox({ searchChange }) {
    return (
        <div className="pa-2">
            <input className="pa3 ba b--green bg-lightest-blue br5 bw2 ma3"
                type='search' placeholder="Search buds.."
                onChange={searchChange} />
        </div>
    )
}

export default SearchBox;