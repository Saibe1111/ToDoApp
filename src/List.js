import { connect } from 'react-redux';
import React from 'react';

function List({ items, dispatch}) {
    return (
        <ul>
            {items.map((item) => {
                return(
                    <React.Fragment>
                        <li>{item.id}: {item.text} - {new Date(item.timestamp).toLocaleTimeString()}</li>
                        <button id={item.id} onClick={function (e){
                            const buttonId = e.target.id;
                            dispatch({
                                type: "REMOVE_ITEMS",
                                buttonId
                            });
                        }}>X</button>
                    </React.Fragment>
                );
            })}
        </ul>
    );
}

const mapStateToProps = (state, {dispatch}) => {
    return { items: state?.items === undefined ? [] : state?.items , dispatch: dispatch};
};

export default connect(mapStateToProps)(List);
