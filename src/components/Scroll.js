import React from "react";

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'auto',
            border: '5px solid #0ccac4',
            height: '800px',
            padding: '10px'
        }}>
            {props.children}
        </div>
    )
}
export default Scroll;