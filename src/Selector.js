import React from 'react';
import { connect } from 'react-redux';

function Selector() {

    return (
        <React.Fragment>
            <button onClick={function (e){changeBackgroundColor(e)}}>Open</button>
            <button onClick={function (e){changeBackgroundColor(e)}}>Closed</button>
        </React.Fragment>
    );

}

function changeBackgroundColor(e) {
    if(e.target.style.backgroundColor === "rgb(127, 255, 0)"){
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
    }else{
        e.target.style.backgroundColor = "rgb(127, 255, 0)";
    }
}

export default connect()(Selector);
