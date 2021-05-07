import { connect } from 'react-redux';
import React from 'react';

function List({ items }) {
    return (
        <ul>
            {items.map((item) => {
                return <li>{item}</li>;
            })}
        </ul>
    );
}

const mapStateToProps = state => {
    return { items: state?.items === undefined ? [] : state?.items };
};

export default connect(mapStateToProps)(List);
